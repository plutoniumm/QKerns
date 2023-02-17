<script>
  import { onMount } from "svelte";
  import Plotly from "plotly.js-dist";

  let plotlyDiv;

  onMount(() => {
    Plotly.newPlot(
      plotlyDiv,
      [
        {
          x: [1, 2, 3],
          y: [2, 1, 3],
          type: "scatter3d",
        },
      ],
      {
        margin: { t: 0 },
      }
    );
  });

  export let width = 600;
  export let height = 400;

  export let data = [];
  export let layout = {};
  export let config = {};
</script>

<div
  class="plotly-3d"
  bind:this={plotlyDiv}
  style="width: {width}px; height: {height}px;"
/>

<style>
  .plotly-3d {
    width: 100%;
    height: 100%;
  }
</style>
