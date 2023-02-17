<script></script>

<main>
  <nav>
    <ul>
      <li><a href="/">Home</a></li>
      <li><a href="/">About</a></li>
      <li><a href="/">Contact</a></li>
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
    background-color: #f1f1f1;
    padding: 20px;
  }

  .main {
    grid-area: main;
    padding: 20px;
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
