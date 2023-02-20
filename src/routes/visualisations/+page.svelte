<script>
  import Plot from "../../components/plotly.svelte";

  $: holds = ["0.01", "0.1", "1", "0.2", "0.2", "0.05", "0.05"];

  const config = [
    {
      name: "Plain",
      title: "Baseline testing with just to see things work",
      desc: `Here we plot the function $F(x, y) = x * y$ simply for an established
    baseline.`,
      f: `return x * y;`,
    },
    {
      name: "RBF",
      title: "RBF Kernel: $F(x, y) = e^{-\\gamma * (x - y)^2}$",
      desc: `Here we plot the function $F(x, y) = e^{-\\gamma * (x - y)^2}$, where $\gamma$ is a hyperparameter.`,
      f: `return Math.exp(-1 * gamma * (x - y) ** 2);`,
    },
    {
      name: "Laplacian",
      title: "Laplacian Kernel: $F(x, y) = e^{-\\gamma * |x - y|}$",
      desc: `Here we plot the function $F(x, y) = e^{-\\gamma * |x - y|}$, where $\gamma$ is a hyperparameter.`,
      f: `return Math.exp(-1 * gamma * Math.abs(x - y));`,
    },
    {
      name: "Sigmoid",
      title: "Sigmoid Kernel: $F(x, y) = \\tanh(\\gamma * (x - y) + \\beta)$",
      desc: `Here we plot the function $F(x, y) = \\tanh(\\gamma * (x - y) + \\beta)$, where $\\gamma$ and $\\beta=0.5$ are hyperparameters.`,
      f: `return Math.tanh(gamma * (x - y) + 0.5);`,
    },
    {
      name: "Polynomial",
      title: "Polynomial Kernel: $F(x, y) = (\\gamma * (x - y) + \\beta)^d$",
      desc: `Here we plot the function $F(x, y) = (\\gamma * (x - y) + \\beta)^d$, where $\\gamma$, $\\beta=0.5$ and $d=2$ are hyperparameters.`,
      f: `return (gamma * (x - y) + 0.5) ** 2;`,
    },
    {
      name: "Matern",
      title:
        "Matern Kernel: $F(x, y) = \\frac{2^{1-\\nu}}{\\Gamma(\\nu)}\\left(\\sqrt{2\\nu}\\frac{|x - y|}{\\lambda}\\right)^\\nu K_\\nu\\left(\\sqrt{2\\nu}\\frac{|x - y|}{\\lambda}\\right)$",
      desc: `Here we plot the function $F(x, y) = \\frac{2^{1-\\nu}}{\\Gamma(\\nu)}\\left(\\sqrt{2\\nu}\\frac{|x - y|}{\\lambda}\\right)^\\nu K_\\nu\\left(\\sqrt{2\\nu}\\frac{|x - y|}{\\lambda}\\right)$, where $\\nu=1.5$ and $\\lambda=1$ are hyperparameters.`,
      // f: `{
      f: `{
        const nu = 2;
        return (
          (2 ** (1 - nu)) / math.gamma(nu) *
          ((2 * nu) ** 0.5 * Math.abs(x - y)) ** nu *
          BESSEL.besselk(nu, (2 * nu) ** 0.5 * Math.abs(x - y))
        );
      };`,
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
</section>

{#each config as func, indx}
  {@const name = func.name}
  {@const f = func.f}

  <hr class="o-25" />
  <section>
    <h2>{func.title}</h2>
    <div>{func.desc}</div>
    <div>
      <label for="gamma">Gamma</label>
      <input class="rpm-10" type="text" bind:value={holds[indx]} />
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
