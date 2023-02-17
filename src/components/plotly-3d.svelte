<script>
  import { onMount } from "svelte";
  import { rand } from "./plotly";
  import Plotly from "plotly.js-dist";

  let plotlyDiv;
  const id = Math.round(Math.random() * 1e10).toString(36);

  export let F = (x, y) => x * y;
  export let samples = 1000;
  export let name = "Function";

  const x = new Float32Array(samples);
  const y = new Float32Array(samples);
  const z = new Float32Array(samples);

  onMount(() => {
    for (let i = 0; i < samples; i++) {
      x[i] = rand(-1, 1);
      y[i] = rand(-1, 1);
      z[i] = F(x[i], y[i]);
    }
    let data_z1 = {
      x,
      y,
      z,
      mode: "markers",
      marker: {
        size: Math.floor(16 / Math.round(Math.log10(samples))),
        color: z,
        colorscale: "Viridis",
        opacity: 0.75,
      },
      type: "scatter3d",
    };

    Plotly.newPlot(id, [data_z1], {
      title: name + " 3D Plot",
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
