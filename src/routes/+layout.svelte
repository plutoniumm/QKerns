<script>
  import { onMount } from "svelte";
  import nav from "./nav.json";

  let showNav = true;
  onMount(() => {
    window.TEXRender();
    // get query 'no-nav' and hide nav if true
    const urlParams = new URLSearchParams(window.location.search);
    const noNav = urlParams.get("no-nav");
    if (noNav !== null) showNav = false;
  });
  const headings = [
    ["🐍 Python Files", "python", (name) => `/python#${name}.html`],
    ["📝 Markdown Files", "markdown", (name) => `/markdown#${name}.md`],
    ["📸 Docs & Imgs", "documents", (name) => `/document#${name}`],
    ["🖥️ Presentation", "presentations", (name) => `/presentation#${name}`],
  ];
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
  {#if showNav}
    <nav class="fade-right" data-sveltekit-preload-data data-sveltekit-reload>
      <a
        href="/"
        id="logo"
        class="ƒ ∆-ct mx-a"
        style="padding: 20px 0 10px 0;display:block"
      >
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
      </a>
      <hr class="w-50 o-25" />
      <h4 class="p510 m0">Pages</h4>
      <ul class="p520">
        <li>
          <a href="/visualisations">Kern Visualisations</a>
        </li>
        <li><a href="/mechanism">Mechanism</a></li>
      </ul>
      {#each headings as header}
        <h4 class="p510 m0">{header[0]}</h4>
        <ul class="p520">
          {#each nav[header[1]] as item}
            <li>
              <a href={header[2](item.href)}>{item.title}</a>
            </li>
          {/each}
        </ul>
      {/each}
    </nav>
  {/if}
  <article class="mx-a p520 fade">
    <slot />
    <!-- padding hack -->
    {#each new Array(4) as _}
      <p class="p520"><br /></p>
    {/each}
  </article>
</main>
<div class="p-abs o-0" id="overlay">
  <!--  -->
</div>

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
  .p520 {
    padding: 5px 20px;
  }
  .p510 {
    padding: 5px 10px;
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

  #overlay {
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    pointer-events: none;
  }
</style>
