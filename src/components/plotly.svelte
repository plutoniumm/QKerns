<script>
  import { onMount } from "svelte";
  import { rand, initialise, uuid } from "./plotly";

  let //
    plotlyDiv;
  const id = uuid();

  export let F = (x, y) => x * y;
  export let samples = 1000;
  export let name = "Function";
  export let type = "scatter3d";

  // Initialise xyz blanks based on type of plot
  let [x, y, z] = initialise(samples, type);

  const calculate = {
    // generate a heatmap (ASSUMING xyz are global)
    heatmap: () => {
      for (let i = 0; i < samples; i++)
        z[i] = new Float32Array(x.map((x) => F(x, y[i])));
    },
    // generate a scatter3d (ASSUMING xyz are global)
    scatter3d: () => {
      for (let i = 0; i < samples; i++) {
        x[i] = rand(-1, 1);
        y[i] = rand(-1, 1);
        z[i] = F(x[i], y[i]);
      }
    },
  };

  onMount(async () => {
    const Plotly = await import("plotly.js-dist");

    // First calculate
    for (let i = 0; i < samples; i++) calculate[type]();

    let data_z1 = {
      x,
      y,
      z,
      type,
      // mode, markers only for scatter3d
      mode: "markers",
      marker: {
        size: Math.floor(16 / Math.round(Math.log10(samples))),
        color: z,
        colorscale: "Viridis",
        opacity: 0.75,
      },
      // heatmap only
      hoverongaps: false,
    };

    Plotly.newPlot(id, [data_z1], {
      // Plotly container config
      title: `${name} ${type}`.toUpperCase(),
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
