<script>
  import { base } from "$app/paths";
</script>

<main>
  <nav class="fade-right">
    <div id="logo" class="ƒ ∆-ct mx-a" style="padding: 20px 0 10px 0;">
      <img
        src="{base}/qiskit.svg"
        alt="logo"
        height="36px"
        width="36px"
        style="margin-right: 5px;"
      />
      <div
        class="fw4"
        style="font-size:24px;line-height:36px;align-self:center"
      >
        new qkerns()
      </div>
    </div>
    <hr class="w-50 o-25" />
    <h4 class="p10 m0">Pages</h4>
    <ul class="p20">
      <li><a href="{base}/">Home</a></li>
      <li>
        <a href="{base}/visualisations">Visualisations</a>
      </li>
      <li><a href="{base}/mechanism">Mechanism</a></li>
      <li><a href="{base}/rbfgen">RBF Generalisation</a></li>
    </ul>
    <h4 class="p10 m0">Python Files</h4>
    <ul class="p20">
      <li><a href="{base}/python#qgss-kerns.html">QGSS QSVM (2021)</a></li>
      <li>
        <a href="{base}/python#docs-hybrid.html">
          Hybrid Classifier (torch+qiskit)
        </a>
      </li>
    </ul>
  </nav>
  <div class="p20 fade content">
    <slot />
  </div>
</main>

<style lang="scss">
  main {
    display: grid;
    grid-template-columns: 250px 1fr;
    grid-template-rows: 1fr;
    grid-template-areas: "nav main";
    height: 100vh;
    overflow-y: hidden;
  }

  nav {
    grid-area: nav;
    background: #6929c4;
    color: #fff;
  }
  .p20 {
    padding: 5px 20px !important;
  }
  .p10 {
    padding: 5px 10px !important;
  }

  .content {
    grid-area: main;
    overflow-y: scroll;
    width: calc(100% - 40px);
    max-width: 1200px;
    margin: 0 auto;
  }

  ul {
    list-style: none;
    padding: 0;
    margin: 0;
    li {
      padding-bottom: 10px;
    }
  }

  @media (max-width: 600px) {
    main {
      grid-template-columns: 1fr;
      grid-template-rows: 50px 1fr;
      grid-template-areas:
        "nav"
        "main";
    }
  }
</style>
