<section>
  <h2>3D</h2>
  <pre>
    {`function plotFunction3D(F) {
      const numPoints = 100;
      const x = new Array(numPoints);
      const y = new Array(numPoints);
      const z = new Array(numPoints);
      for (let i = 0; i < numPoints; i++) {
        x[i] = Math.random();
        y[i] = Math.random();
        z[i] = F(x[i], y[i]);
      }
      const data = [
        {
          x: x,
          y: y,
          z: z,
          type: 'surface'
        }
      ];
      Plotly.newPlot('plot', data);
    }`}
  </pre>
  <h3>Usage</h3>
  <pre>
    {`// Example 1: F with RBF
      function F1(x, y) {
        const r = Math.sqrt(x * x + y * y);
        return Math.exp(-r * r);
      }
      plotFunction3D(F1);

      // Example 2: F with Laplacian
      function F2(x, y) {
        const r = Math.sqrt(x * x + y * y);
        return Math.exp(-r);
      }
      plotFunction3D(F2);
      `}
  </pre>
  <h2>Heatmap</h2>
  <pre>
    {`function plotFunctionHeatmap(F) {
    const numPoints = 100;
    const x = new Array(numPoints);
    const z = new Array(numPoints);
    for (let i = 0; i < numPoints; i++) {
      x[i] = Math.random();
      z[i] = F(x[i], 0);
    }
    const data = [
      {
        x: x,
        y: z,
        type: 'heatmap'
      }
    ];
    Plotly.newPlot('plot', data);
  }`}
  </pre>
  <h3>Usage</h3>
  <pre>
    {`// Example 1: F with RBF
      function F1(x, y) {
        const r = Math.sqrt(x * x + y * y);
        return Math.exp(-r * r);
      }
      plotFunctionHeatmap(F1);

      // Example 2: F with Laplacian
      function F2(x, y) {
        const r = Math.sqrt(x * x + y * y);
        return Math.exp(-r);
      }
      plotFunctionHeatmap(F2);
      `}
  </pre>
</section>

<style lang="scss">
</style>
