<script>
  import Plot3d from "../../components/plotly-3d.svelte";
  import PlotHeat from "../../components/plotly-heatmap.svelte";
</script>

<section>
  <h1>Kernel Functions</h1>
</section>
<section>
  <h2>Baseline: $F(x, y) = x * y$</h2>
  <div class="ƒ">
    <Plot3d samples={1000} />
    <PlotHeat samples={50} />
  </div>
</section>

<style>
</style>
