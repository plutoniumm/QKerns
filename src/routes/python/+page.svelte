<script>
  import { onMount } from "svelte";

  $: hash = "";

  const routeChange = () =>
    (hash = new URL(window.location.href).hash.slice(1));

  onMount(routeChange);
</script>

<svelte:window on:hashchange={routeChange} />

<!-- below is a hack to get around sveltes no id problem for /python#pageid -->
{#each ["qgss-kerns.html", "docs-hybrid.html"] as pid}
  <span class="d-n" id={pid}>&nbsp;</span>
{/each}
<!-- hack over -->

<iframe
  src="/python/{hash}"
  class="w-100 h-100"
  title="ipynb Iframe"
  frameborder="0"
/>

<style>
  /*  */
</style>
