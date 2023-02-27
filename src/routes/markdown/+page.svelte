<script>
  import { marked } from "marked";
  import { onMount } from "svelte";
  import { markdown } from "../nav.json";

  $: hash = "";

  const routeChange = () => {
    hash = new URL(window.location.href).hash.slice(1);
    fetch(`/markdown/${hash}`)
      .then((res) => res.text())
      .then((text) => {
        console.log(text);
        document.querySelector("article.fade").innerHTML = marked(text);
        window.renderMathInElement(document.querySelector("article.fade"), {
          output: "html",
          delimiters: [
            { left: "$$", right: "$$", display: true },
            { left: "$", right: "$", display: false },
          ],
          throwOnError: false,
        });
      });
  };

  onMount(routeChange);
</script>

<svelte:window on:hashchange={routeChange} />

<!-- below is a hack to get around sveltes no id problem for /python#pageid -->
{#each markdown as pid}
  <span class="d-n" id="{pid.href}.html">&nbsp;</span>
{/each}
<!-- hack over -->

<iframe
  src="/markdown/{hash}"
  class="w-100 h-100"
  title="ipynb Iframe"
  frameborder="0"
/>

<style>
  /*  */
</style>
