<script>
  import { onMount } from "svelte";
  import navpy from "./nav.json";

  onMount(() =>
    window.renderMathInElement(document.querySelector("article.fade"), {
      output: "html",
      delimiters: [
        { left: "$$", right: "$$", display: true },
        { left: "$", right: "$", display: false },
      ],
      throwOnError: false,
    })
  );

  const pyth = (filename) => `/python#${filename}.html`;
</script>

<svelte:head>
  <script
    defer
    src="https://cdn.jsdelivr.net/npm/katex@0.16.4/dist/katex.min.js"
  ></script>
  <script
    defer
    src="https://cdn.jsdelivr.net/npm/katex@0.16.4/dist/contrib/auto-render.min.js"
  ></script>
</svelte:head>

<main>
  <nav class="fade-right" data-sveltekit-preload-data data-sveltekit-reload>
    <div id="logo" class="ƒ ∆-ct mx-a" style="padding: 20px 0 10px 0;">
      <img
        src="qiskit.svg"
        alt="logo"
        height="32px"
        width="32px"
        style="margin-right: 5px;"
      />
      <div
        class="fw4"
        style="font-size:24px;line-height:32px;align-self:center"
      >
        new qkerns()
      </div>
    </div>
    <hr class="w-50 o-25" />
    <h4 class="p10 m0">Pages</h4>
    <ul class="p20">
      <li><a href="/">Home</a></li>
      <li>
        <a href="/visualisations">Visualisations</a>
      </li>
      <li><a href="/mechanism">Mechanism</a></li>
      <li><a href="/rbfgen">RBF Generalisation</a></li>
      <li><a href="/timeline">Timeline</a></li>
    </ul>
    <h4 class="p10 m0">Python Files</h4>
    <ul class="p20">
      {#each navpy as py}
        <li>
          <a href={pyth(py.href)}>{py.title}</a>
        </li>
      {/each}
    </ul>
  </nav>
  <article class="p20 fade">
    <slot />
  </article>
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

  article {
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
