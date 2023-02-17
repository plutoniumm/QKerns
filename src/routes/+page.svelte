<section>
  <h2>3D Usage</h2>
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
  <h2>Heatmap Usage</h2>
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
