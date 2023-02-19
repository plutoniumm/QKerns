<script>
  import Plot from "../../components/plotly.svelte";

  $: holds = ["0.01", "0.1", "1"];

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
  ];
</script>

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
