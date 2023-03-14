<script>
  import { onMount } from "svelte";
  import { presentations } from "../nav.json";

  $: hash = "";

  const routeChange = () => {
    hash = new URL(window.location.href).hash.slice(1);
    window.location.href = "/assets/" + hash;
  };
  onMount(routeChange);
</script>

<svelte:window on:hashchange={routeChange} />

<!-- below is a hack to get around sveltes no id problem for /python#pageid -->
{#each presentations as pid}
  <span class="d-n" id={pid.href}>&nbsp;</span>
{/each}

<!-- hack over -->
<style>
  /* overflow-y: scroll; */
</style>
