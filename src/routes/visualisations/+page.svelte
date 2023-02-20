<script>
  import Plot from "../../components/plotly.svelte";
  import { uuid } from "../../components/plotly";

  $: holds = ["0.01", "0.1", "1", "0.2", "0.2", "0.05", "0.05"];

  const config = [
    // plain
    {
      name: "Plain",
      title: "Baseline testing with just to see things work",
      desc: `Here we plot the function $F(x, y) = x * y$ simply for an established
    baseline.`,
      f: `return x**2 * y**2;`,
    },
    // RBF
    {
      name: "RBF",
      title: "RBF Kernel: $F(x, y) = e^{-\\gamma * (x - y)^2}$",
      desc: `Here we plot the function $F(x, y) = e^{-\\gamma * (x - y)^2}$, where $\gamma$ is a hyperparameter.`,
      f: `return Math.exp(-1 * gamma * (x - y) ** 2);`,
    },
    // Sigmoid
    {
      name: "Sigmoid",
      title: "Sigmoid Kernel: $F(x, y) = \\tanh(\\gamma * (x - y) + \\beta)$",
      desc: `Here we plot the function $F(x, y) = \\tanh(\\gamma * (x - y) + \\beta)$, where $\\gamma$ and $\\beta=0.5$ are hyperparameters.`,
      f: `return Math.tanh(gamma * (x - y) + 0.5);`,
    },
    // Polynomial
    {
      name: "Polynomial",
      title: "Polynomial Kernel: $F(x, y) = (\\gamma * (x - y) + \\beta)^d$",
      desc: `Here we plot the function $F(x, y) = (\\gamma * (x - y) + \\beta)^d$, where $\\gamma$, $\\beta=0.5$ and $d=2$ are hyperparameters.`,
      f: `return (gamma * (x - y) + 0.5) ** 2;`,
    },
    // Matern
    {
      name: "Matern",
      title:
        "Matern Kernel: $F(x, y) = \\frac{2^{1-\\nu}}{\\Gamma(\\nu)}\\left(\\sqrt{2\\nu}\\frac{|x - y|}{\\lambda}\\right)^\\nu K_\\nu\\left(\\sqrt{2\\nu}\\frac{|x - y|}{\\lambda}\\right)$",
      desc: `Here we plot the function $F(x, y) = \\frac{2^{1-\\nu}}{\\Gamma(\\nu)}\\left(\\sqrt{2\\nu}\\frac{|x - y|}{\\lambda}\\right)^\\nu K_\\nu\\left(\\sqrt{2\\nu}\\frac{|x - y|}{\\lambda}\\right)$, where $\\nu=1.5$ and $\\lambda=1$ are hyperparameters.`,
      f: `{
        const nu = 2;
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
      f: `return Math.exp(-2 * Math.sin(Math.PI * Math.abs(x - y)) ** 2);`,
    },
    // RQ
    {
      name: "RQ",
      title:
        "RQ Kernel: $F(x, y) = \\left(1 + \\frac{|x - y|^2}{2\\alpha l^2}\\right)^{-\\alpha}$",
      desc: `Here we plot the function $F(x, y) = \\left(1 + \\frac{|x - y|^2}{2\\alpha l^2}\\right)^{-\\alpha}$, where $\\alpha=1$ and $l=1$ are hyperparameters.`,
      f: `return (1 + (x - y) ** 2 / (2 * 1 * 1)) ** -1;`,
    },
    // WHite Noise
    {
      name: "White Noise",
      title: "White Noise Kernel: $F(x, y) = \\delta(x - y)$",
      desc: `Here we plot the function $F(x, y) = \\delta(x - y)$, where $\delta$ is the Dirac delta function.`,
      f: `return x === y ? 1 : 0;`,
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
      <label for="gamma-{uid}" style="pointer-events: none;">Gamma</label>
      <input
        name="gamma-{uid}"
        class="rpm-10"
        type="text"
        bind:value={holds[indx]}
      />
      <div class="ƒ">
        <Plot
          samples={1000}
          type="scatter3d"
          {name}
          F={new Function("x", "y", `gamma=${+holds[indx]}`, f)}
        />
        <Plot
          samples={50}
          type="heatmap"
          {name}
          F={new Function("x", "y", `gamma=${+holds[indx]}`, f)}
        />
      </div>
    </div>
  </section>
{/each}

<style>
  input[type="text"] {
    background: #fff;
  }
</style>
