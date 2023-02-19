<script>
  import Plot from "../../components/plotly.svelte";

  $: holds = new Int16Array([
    100, 200, 300, 400, 500, 600, 700, 1000, 1100, 1200,
  ]);

  const RBF = (x, y) => Math.exp(-1 * (holds[0] / 100) * (x - y) ** 2);
  const Laplacian = (x, y) => Math.exp(-1 * (holds[1] / 100) * Math.abs(x - y));
</script>

<section>
  <h1>Kernel Functions</h1>
</section>
<section>
  <h2>Baseline: $F(x, y) = x * y$</h2>
  <div>
    Here we plot the function $F(x, y) = x * y$ simply for an established
    baseline.
  </div>
  <div class="ƒ">
    <Plot samples={1000} type="scatter3d" />
    <Plot samples={50} type="heatmap" />
  </div>
</section>

<hr class="o-25" />
<section>
  <h2>RBF Kernel: $F(x, y) = e^{`{-\\gamma * (x - y)^2}`}$</h2>
  <div>
    Here we plot the function $F(x, y) = e^{`{-\\gamma * (x - y)^2}`}$, where
    $\gamma$ is a hyperparameter.
  </div>
  <div>
    <label for="gamma">Gamma</label>
    <input
      type="range"
      id="gamma"
      min="0"
      max="100"
      step="1"
      bind:value={holds[0]}
    />
    <span>{holds[0] / 100}</span>
    <div class="ƒ">
      <Plot samples={1000} type="scatter3d" F={RBF} />
      <Plot samples={50} type="heatmap" F={RBF} />
    </div>
  </div>
</section>
<hr class="o-25" />
<section>
  <h2>Laplacian Kernel: $F(x, y) = e^{`{-\\gamma * |x - y|}`}$</h2>
  <div>
    Here we plot the function $F(x, y) = e^{`{-\\gamma * |x - y|}`}$, where
    $\gamma$ is a hyperparameter.
  </div>
  <div>
    <label for="gamma">Gamma</label>
    <input
      type="range"
      id="gamma"
      min="0"
      max="100"
      step="1"
      bind:value={holds[1]}
    />
    <span>{holds[1] / 100}</span>
    <div class="ƒ">
      <Plot samples={1000} type="scatter3d" F={Laplacian} />
      <Plot samples={50} type="heatmap" F={Laplacian} />
    </div>
  </div>
</section>

<style>
</style>
