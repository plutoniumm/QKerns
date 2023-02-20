<script>
  import { onMount } from "svelte";

  $: hash = "";

  function routeChange() {
    hash = new URL(window.location.href).hash.slice(1);
  }
  onMount(routeChange);
</script>

<svelte:window on:hashchange={routeChange} />

<iframe
  src="/python/{hash}"
  class="w-100 h-100"
  title="ipynb Iframe"
  frameborder="0"
/>

<style>
  /*  */
</style>
