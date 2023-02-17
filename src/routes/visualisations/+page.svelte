<script>
  import Plot3d from "../../components/plotly-3d.svelte";
  import PlotHeat from "../../components/plotly-heatmap.svelte";

  $: holds = new Float32Array([
    0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1.0,
  ]);
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
    <Plot3d samples={1000} />
    <PlotHeat samples={50} />
  </div>
</section>
<section>
  <h2>RBF Kernel: $F(x, y) = e^{`{-\\gamma * (x - y)^2}`}$</h2>
  <div>
    Here we plot the function $F(x, y) = e^{`{-\\gamma * (x - y)^2}`}$, where
    $\gamma$ is a hyperparameter.
  </div>
  <div class="ƒ">
    <Plot3d
      samples={1000}
      F={(x, y) => Math.exp(-1 * holds[0] * (x - y) ** 2)}
    />
    <PlotHeat
      samples={50}
      F={(x, y) => Math.exp(-1 * holds[0] * (x - y) ** 2)}
    />
  </div>
</section>
<section>
  <h2>Laplacian Kernel: $F(x, y) = e^{`{-\\gamma * |x - y|}`}$</h2>
  <div>
    Here we plot the function $F(x, y) = e^{`{-\\gamma * |x - y|}`}$, where
    $\gamma$ is a hyperparameter.
  </div>
  <div class="ƒ">
    <Plot3d
      samples={1000}
      F={(x, y) => Math.exp(-1 * holds[0] * Math.abs(x - y))}
    />
    <PlotHeat
      samples={50}
      F={(x, y) => Math.exp(-1 * holds[0] * Math.abs(x - y))}
    />
  </div>
</section>

<style>
</style>
