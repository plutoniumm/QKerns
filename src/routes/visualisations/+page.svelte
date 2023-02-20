<script>
  import Plot from "../../components/plotly.svelte";
  import { uuid } from "../../components/plotly";

  $: RFB_gamma = 1;
  $: Sigmoid_gamma = 1;
  $: Sigmoid_beta = 0.5;
  $: Poly_gamma = 1;
  $: Poly_d = 2;
  $: Poly_r = 0.5;
  $: Matern_nu = 1.5;
  $: RQ_alpha = 1;
  $: RQ_len = 1;
  $: WN_v = 0.66;

  $: config = [
    // plain
    {
      name: "Plain",
      title: "Baseline testing with just to see things work",
      desc: `Here we plot the function $F(x, y) = x * y$ simply for an established
         baseline.`,
      params: [],
      f: `return x**2 * y**2;`,
    },
    // RBF
    {
      name: "RBF",
      title: "RBF Kernel: $F(x, y) = e^{-\\gamma * (x - y)^2}$",
      params: [
        {
          name: "gamma",
          value: RFB_gamma,
        },
      ],
      desc: `Here we plot the function $F(x, y) = e^{-\\gamma * (x - y)^2}$, where $\gamma$ is a hyperparameter.`,
      f: `return Math.exp(-1 * gamma * (x - y) ** 2);`,
    },
    // Sigmoid
    {
      name: "Sigmoid",
      title: "Sigmoid Kernel: $F(x, y) = \\tanh(\\gamma * (x - y) + \\beta)$",
      desc: `Here we plot the function $F(x, y) = \\tanh(\\gamma * (x - y) + \\beta)$, where $\\gamma$ and $\\beta=0.5$ are hyperparameters.`,
      params: [
        {
          name: "gamma",
          value: Sigmoid_gamma,
        },
        {
          name: "beta",
          value: Sigmoid_beta,
        },
      ],
      f: `return Math.tanh(gamma * (x - y) + beta);`,
    },
    // Polynomial
    {
      name: "Polynomial",
      title: "Polynomial Kernel: $F(x, y) = (\\gamma * (x - y) + \\beta)^d$",
      desc: `Here we plot the function $F(x, y) = (\\gamma * (x - y) + \\beta)^d$, where $\\gamma$, $\\beta=0.5$ and $d=2$ are hyperparameters.`,
      params: [
        {
          name: "gamma",
          value: Poly_gamma,
        },
        {
          name: "d",
          value: Poly_d,
        },
        {
          name: "r",
          value: Poly_r,
        },
      ],
      f: `return (gamma * (x - y) + r) ** d;`,
    },
    // Matern
    {
      name: "Matern",
      title:
        "Matern Kernel: $F(x, y) = \\frac{2^{1-\\nu}}{\\Gamma(\\nu)}\\left(\\sqrt{2\\nu}\\frac{|x - y|}{\\lambda}\\right)^\\nu K_\\nu\\left(\\sqrt{2\\nu}\\frac{|x - y|}{\\lambda}\\right)$",
      desc: `Here we plot the function $F(x, y) = \\frac{2^{1-\\nu}}{\\Gamma(\\nu)}\\left(\\sqrt{2\\nu}\\frac{|x - y|}{\\lambda}\\right)^\\nu K_\\nu\\left(\\sqrt{2\\nu}\\frac{|x - y|}{\\lambda}\\right)$, where $\\nu=1.5$ and $\\lambda=1$ are hyperparameters.`,
      params: [
        {
          name: "nu",
          value: Matern_nu,
        },
      ],
      f: `{
        return (
          (2 ** (1 - nu)) / math.gamma(nu) *
          ((2 * nu) ** 0.5 * Math.abs(x - y)) ** nu *
          BESSEL.besselk(nu, (2 * nu) ** 0.5 * Math.abs(x - y))
        );
      };`,
    },
    // Periodic
    {
      name: "Periodic or ESS",
      title:
        "Periodic Kernel: $F(x, y) = \\exp\\left(-\\frac{2\\sin^2\\left(\\pi\\frac{|x - y|}{p}\\right)}{l^2}\\right)$",
      desc: `Here we plot the function $F(x, y) = \\exp\\left(-\\frac{2\\sin^2\\left(\\pi\\frac{|x - y|}{p}\\right)}{l^2}\\right)$, where $l=1$ and $p=1$ are hyperparameters.`,
      params: [],
      f: `return Math.exp(-2 * Math.sin(Math.PI * Math.abs(x - y)) ** 2);`,
    },
    // RQ
    {
      name: "RQ",
      title:
        "RQ Kernel: $F(x, y) = \\left(1 + \\frac{|x - y|^2}{2\\alpha l^2}\\right)^{-\\alpha}$",
      desc: `Here we plot the function $F(x, y) = \\left(1 + \\frac{|x - y|^2}{2\\alpha l^2}\\right)^{-\\alpha}$, where $\\alpha=1$ and $l=1$ are hyperparameters.`,
      params: [
        {
          name: "alpha",
          value: RQ_alpha,
        },
        {
          name: "l",
          value: RQ_len,
        },
      ],
      f: `return (1 + (x - y) ** 2 / (2 * alpha * l ** 2)) ** -alpha;`,
    },
    // WHite Noise
    {
      name: "White Noise",
      title: "White Noise Kernel: $F(x, y) = v\\delta(x - y)$",
      desc: `Here we plot the function $F(x, y) = v\\delta(x - y)$, where $v=1$ is a hyperparameter.`,
      params: [
        {
          name: "v",
          value: WN_v,
        },
      ],
      f: `return v * (x === y ? 1 : 0);`,
    },
  ];
</script>

<svelte:head>
  <script
    src="https://cdnjs.cloudflare.com/ajax/libs/mathjs/11.5.1/math.js"
  ></script>
  <script src="https://unpkg.com/bessel@1.0.2/bessel.js"></script>
</svelte:head>

<section>
  <h1>Kernel Functions</h1>
  <div>
    The ultimate objective of a kernel is to use some fancy way to still tell us
    how similar any two inputs $x$, $x'$ are and map it to a higher dimensions.
    Some commonly used kernels are as follows. Our objective here is to define
    some basic kernels and then see how we can use them to combine them and
    generate fancier functions
  </div>
</section>

{#each config as func, indx}
  {@const name = func.name}
  {@const f = func.f}
  {@const uid = uuid()}

  <hr class="o-25" />
  <section>
    <h2>{func.title}</h2>
    <div>{func.desc}</div>
    <div>
      <br />
      <div class="params w-100 ƒ p5" style="background: #ccc;">
        {#each func.params as param}
          {@const pid = uuid()}
          {@const pname = param.name}
          <label class="fw5" for="{pname}-{uid}">
            {pname}:
          </label>
          <input
            name="{pname}-{pid}"
            class="rpm-5"
            type="text"
            bind:value={param.value}
          />
        {/each}
      </div>

      <div class="ƒ">
        {#each [["scatter3d", 1000], ["heatmap", 50]] as [type, samples]}
          <div class="w-100">
            {#key func.params.map((p) => p.value).join("-")}
              <Plot
                {samples}
                {type}
                {name}
                F={new Function(
                  "x",
                  "y",
                  ...func.params.map((p) => `${p.name}=${p.value}`),
                  f
                )}
              />
            {/key}
          </div>
        {/each}
      </div>
    </div>
  </section>
{/each}

<style>
  input[type="text"] {
    background: #fff;
  }
  label {
    pointer-events: none;
    text-transform: capitalize;
    line-height: 2.5;
  }
</style>
