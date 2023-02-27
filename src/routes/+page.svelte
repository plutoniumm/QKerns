<script>
  import Mermaid from "./home/mermaid.svelte";
  import { plainText as Timeline } from "./home/timeline.mmd";
</script>

<section class="mx-a fw2">
  <h4>
    Problem: Finding new Quantum Kernel Functions for data mapping to be used in
    QSVMs and other QML Algorithms
  </h4>
  <b>Probable Tools</b>
  <div>
    <chip><a href="https://youtu.be/RI35E5ewBuI">Liquid Neural Nets</a></chip>
  </div>
  <b>Current State</b>
  <div id="timeline" class="w-100">
    <Mermaid
      config={{
        gitGraph: {
          mainBranchName: "New-Kernel",
        },
      }}
      content={Timeline}
    />
  </div>
</section>

<section class="mx-a fw2">
  <b>Useful Resources</b>
  <ul>
    <li>
      <a href="https://www.nature.com/articles/s41567-021-01287-z">
        [Nature] Q-kernel estimation provide Exp Q Speedup via the use of
        Q-enhanced feature spaces
      </a>
    </li>
    <li>
      <a href="https://ar5iv.labs.arxiv.org/html/2111.06063">
        [Ar5iv] Infinite NNs are not blackboxes but SVMs
      </a>
    </li>
    <li>
      <a href="https://cognitivemedium.com/magic_paper/assets/Hornik.pdf">
        Multilayer NNs are universal approximators (Universal Approximation
        Thm): Can be used to make a Kernel out of NN (a relatively newer idea
        floating around
        <a href="https://ieeexplore.ieee.org/abstract/document/7877043">here</a>
        )?
      </a>
    </li>
    <li>
      <a href="https://www.nature.com/articles/s41598-018-20275-7"
        >Optimisation Techniques using Self Organised Criticality (SOC)
        Search(was shown to be more efficient than simulated annealing, incl on
        problems equivalent to finding ground state on Ising Spin Glass)</a
      >
    </li>
    <li>
      <a href="https://ar5iv.labs.arxiv.org/html/2107.03402"
        >The above paper is important since it was theorized here, that training
        dynamics of NNs are attracted towards SOC States, (this however might be
        too far from our use case since we're not looking at NNs directly but
        SVMs, not sure)</a
      >
    </li>
  </ul>
</section>

<style lang="scss">
  a,
  a:visited,
  a:active,
  a:hover {
    color: #66f;
    text-decoration: none;
  }
  chip {
    display: inline-block;
    border: 1px solid #ccc8;
    background: #fff;
    padding: 5px 7px;
    margin: 5px;
    border-radius: 20px;
    max-width: 300px;
  }

  section {
    max-width: 1040px;
    height: auto;
    padding: 10px;
  }

  header {
    text-transform: uppercase;
    background: #fff;
    margin: 10px 0;
    max-width: 300px;
  }
</style>
