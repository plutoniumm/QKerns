<script>
  export let collapse = false;
  export let count = 0;
</script>

{#if collapse}
  <details class="mx-a fw2">
    <summary class="fw5 p10 rx10">Week {count}</summary>
    <div>
      <slot />
    </div>
  </details>
{:else}
  <section class="mx-a fw2">
    <header class="fw5 p10 rx10">Week {count}</header>
    <div>
      <slot />
    </div>
  </section>
{/if}

<style lang="scss">
  section,
  details {
    max-width: 1040px;
    height: auto;
    padding: 10px;
  }

  header,
  summary {
    text-transform: uppercase;
    background: #fff;
    margin: 10px 0;
    max-width: 300px;
  }
</style>
