<script>
  import { onMount } from "svelte";

  let ul;
  // onmount everything gets converted to links with concatnated hrefs
  onMount(() => {
    let links = ul.querySelectorAll("li code");
    links.forEach((link) => {
      const code =
        link.parentElement.parentElement.parentElement.querySelector(
          "code"
        ).innerText;
      link.innerHTML = `<a href="${code}/${link.innerText}">${link.innerText}</a>`;
    });
  });
</script>

<section>
  <!-- If ever you need to compose, see here :https://www.cs.toronto.edu/~duvenaud/cookbook/  -->
  <h2>Statically Accessible Elements</h2>
  <ul bind:this={ul}>
    <li><code>/assets</code>: Just code stuff</li>
    <li>
      <code>/markdown</code>: <br />
      <ul>
        <li><code>gpt.md</code>: GPT Generated Methods</li>
        <li><code>updates.md</code>: Weekly Updates</li>
      </ul>
    </li>
    <li>
      <code>/python</code>: <br />
      <ul>
        <li><code>docs-hybrid.html</code>: Std Hybrid Classifier</li>
        <li><code>qgss-kerns.html</code>: QGSS QSVM (2021)</li>
      </ul>
    </li>
    <li>
      <code>/templates</code>: <br />
      <ul>
        <li><code>paper.tex</code>: QML LitRev</li>
        <li><code>w3.html</code>: Week 3 Presentation</li>
        <li><code>w3py.html</code>: Visualisations Notebook</li>
      </ul>
    </li>
  </ul>
</section>

<style lang="scss">
</style>
