<script>
  import { marked } from "marked";
  import { onMount } from "svelte";
  import { markdown } from "../nav.json";

  $: hash = "";

  let mdhold;
  const routeChange = () => {
    hash = new URL(window.location.href).hash.slice(1);
    if (!hash) return 0;
    fetch(`/markdown/${hash}`)
      .then((res) => res.text())
      .then((text) => {
        mdhold.innerHTML = marked(text);
        window.TEXRender();
      });
  };
  onMount(routeChange);
</script>

<svelte:window on:hashchange={routeChange} />

<!-- below is a hack to get around sveltes no id problem for /python#pageid -->
{#each markdown as pid}
  <span class="d-n" id="{pid.href}.md">&nbsp;</span>
{/each}
<!-- hack over -->

<article id="mdhold" bind:this={mdhold}>Loading...</article>

<style>
  /* overflow-y: scroll; */
</style>
