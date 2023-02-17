<script>
  import { onMount } from "svelte";
  import Plotly from "plotly.js-dist";

  let plotlyDiv;
  const layout = {
    margin: {
      l: 20,
      r: 20,
      b: 20,
      t: 20,
    },
  };

  onMount(() => {
    let z1 = [
      [8.83, 8.89, 8.81, 8.87, 8.9, 8.87],
      [8.89, 8.94, 8.85, 8.94, 8.96, 8.92],
      [8.84, 8.9, 8.82, 8.92, 8.93, 8.91],
      [8.79, 8.85, 8.79, 8.9, 8.94, 8.92],
      [8.79, 8.88, 8.81, 8.9, 8.95, 8.92],
      [8.8, 8.82, 8.78, 8.91, 8.94, 8.92],
      [8.75, 8.78, 8.77, 8.91, 8.95, 8.92],
      [8.8, 8.8, 8.77, 8.91, 8.95, 8.94],
      [8.74, 8.81, 8.76, 8.93, 8.98, 8.99],
      [8.89, 8.99, 8.92, 9.1, 9.13, 9.11],
      [8.97, 8.97, 8.91, 9.09, 9.11, 9.11],
      [9.04, 9.08, 9.05, 9.25, 9.28, 9.27],
      [9, 9.01, 9, 9.2, 9.23, 9.2],
      [8.99, 8.99, 8.98, 9.18, 9.2, 9.19],
      [8.93, 8.97, 8.97, 9.18, 9.2, 9.18],
    ];

    let z2 = [];
    for (let i = 0; i < z1.length; i++) {
      let z2_row = [];
      for (let j = 0; j < z1[i].length; j++) z2_row.push(z1[i][j] + 1);

      z2.push(z2_row);
    }

    let z3 = [];
    for (let i = 0; i < z1.length; i++) {
      let z3_row = [];
      for (let j = 0; j < z1[i].length; j++) z3_row.push(z1[i][j] - 1);

      z3.push(z3_row);
    }
    let data_z1 = { z: z1, type: "surface" };
    let data_z2 = { z: z2, showscale: false, opacity: 0.9, type: "surface" };
    let data_z3 = { z: z3, showscale: false, opacity: 0.9, type: "surface" };

    Plotly.newPlot("myDiv", [data_z1, data_z2, data_z3], layout);
  });

  export let width = 600;
  export let height = 400;

  export let data = [];
  export let config = {};
</script>

<div
  id="myDiv"
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
