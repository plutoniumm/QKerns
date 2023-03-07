<script>
  import { onMount } from "svelte";
  import { documents } from "../nav.json";

  $: hash = "";

  const routeChange = () =>
    (hash = new URL(window.location.href).hash.slice(1));

  onMount(routeChange);
</script>

<svelte:window on:hashchange={routeChange} />

<!-- below is a hack to get around sveltes no id problem for /python#pageid -->
{#each documents as pid}
  <span class="d-n" id={pid.href}>&nbsp;</span>
{/each}
<!-- hack over -->

<iframe
  src="/document/{hash}#view=FitH"
  class="w-100 h-100 rpm-0"
  title="ipynb Iframe"
  frameborder="0"
/>

<style lang="scss">
  :global {
    article {
      margin: 0 !important;
      padding: 0 !important;
      max-width: unset !important;
      width: 100% !important;
    }
  }
</style>
