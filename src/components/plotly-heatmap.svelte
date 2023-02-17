<script>
  import { onMount } from "svelte";
  import Plotly from "plotly.js-dist";

  let plotlyDiv;
  const id = Math.round(Math.random() * 1e10).toString(36);

  export let F = (x, y) => x * y;
  export let samples = 50;
  export let name = "Function";

  const linspace = (start, end, n) => {
    const arr = new Float32Array(n);
    const step = (end - start) / (n - 1);
    for (let i = 0; i < n; i++) arr[i] = start + step * i;
    return arr;
  };

  const x = linspace(-1, 1, samples);
  const y = linspace(-1, 1, samples);
  const z = new Array(samples);

  onMount(() => {
    for (let i = 0; i < samples; i++)
      z[i] = new Float32Array(x.map((x) => F(x, y[i])));

    let data_z1 = {
      x,
      y,
      z,
      type: "heatmap",
      hoverongaps: false,
    };

    Plotly.newPlot(id, [data_z1], {
      title: name + " Heatmap",
      margin: { l: 20, r: 20, b: 50, t: 50 },
    });
  });
</script>

<div
  {id}
  class="w-100 fade-up h-100 plut"
  bind:this={plotlyDiv}
  style="height: 400px;"
/>

<style>
  .plut {
    margin: 0 auto;
    max-width: 100%;
  }
</style>
