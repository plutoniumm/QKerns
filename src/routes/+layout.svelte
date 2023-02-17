<script>
  import { base } from "$app/paths";
</script>

<main class="p20">
  <nav class="p20">
    <ul>
      <li><a href="{base}/">Home</a></li>
      <li><a href="{base}/">About</a></li>
      <li><a href="{base}/">Contact</a></li>
    </ul>
  </nav>
  <div class="main">
    <slot />
  </div>
</main>

<style lang="scss">
  main {
    display: grid;
    grid-template-columns: 200px 1fr;
    grid-template-rows: 1fr;
    grid-template-areas: "nav main";
    height: 100vh;
  }

  nav {
    grid-area: nav;
    background: #6929c4;
  }

  .main {
    grid-area: main;
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
