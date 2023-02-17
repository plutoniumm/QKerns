<script>
  import { base } from "$app/paths";
</script>

<main>
  <nav class="p20 fade-right">
    <ul>
      <li><a href="{base}/">Home</a></li>
      <li>
        <a href="{base}/visualisations">Visualisations</a>
      </li>
      <li><a href="{base}/">Contact</a></li>
    </ul>
  </nav>
  <div class="p20 fade content">
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
    overflow-y: hidden;
  }

  nav {
    grid-area: nav;
    background: #6929c4;
    color: #fff;
  }

  .content {
    grid-area: main;
    overflow-y: scroll;
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
  }

  ul {
    list-style: none;
    padding: 0;
    li {
      padding: 10px 0;
      // a {
      //   color: #fff;
      //   text-decoration: none;
      //   &:hover {
      //     text-decoration: underline;
      //   }
      // }
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
