<script>
  import Mermaid from "./assets/mermaid.svelte";
  import { onMount } from "svelte";
  import { plainText as Timeline } from "./assets/timeline.mmd";

  onMount(() => {
    // generate toc with <header> > <b>
    let sections = document.querySelectorAll("section,details:not(.mini)");
    let toc = document.querySelector("#toc ol");
    for (let i = 0; i < sections.length; i++) {
      let section = sections[i];
      let header = section.querySelectorAll("header, summary")[0];
      if (!header.id) header.id = header.textContent.replace(/ /g, "-");
      let bs = section.querySelectorAll("b");
      let li = `<li><a href="#${header.id}">${header.textContent}</a></li>`;
      if (bs.length > 0) {
        let nestedOl = `<ol>`;
        for (let j = 0; j < bs.length; j++) {
          let b = bs[j];
          nestedOl += `<li><a href="#${b.id}">${b.textContent}</a></li>`;
        }
        nestedOl += `</ol>`;
        li = li.replace("</li>", `${nestedOl}</li>`);
      }
      toc.insertAdjacentHTML("beforeend", li);
    }

    let observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          let id = entry.target.id;
          let a = toc.querySelector(`a[href="#${id}"]`);
          a.classList.add("bold");
        } else {
          let id = entry.target.id;
          let a = toc.querySelector(`a[href="#${id}"]`);
          a.classList.remove("bold");
        }
      });
    });

    const headers = [
      ...document.querySelectorAll("section header"),
      ...document.querySelectorAll("details:not(.mini) summary"),
    ];
    headers.forEach((header) => observer.observe(header));
  });
</script>

<article
  class="p-abs rpm-10"
  id="toc"
  style="right: 10px;top:10px;background:#fff;padding-right:15px;"
>
  <ol />
</article>
<section>
  <header>General</header>
  <h4>
    Problem: Finding new Quantum Kernel Functions for data mapping to be used in
    QSVMs and other QML Algorithms
  </h4>
  <div>
    <b>Probable Tools</b>
    <div>
      <chip><a href="https://youtu.be/RI35E5ewBuI">Liquid Neural Nets</a></chip>
    </div>
    <b>Current State</b>
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

<section>
  <header>Week 5</header>
  <div>???</div>
</section>
<section>
  <header>Week 4</header>
  <Mermaid
    config={{
      gitGraph: {
        mainBranchName: "New-Kernel",
      },
    }}
    content={`
    graph LR
    GaussianKernel --> RBFKernel --> PeriodicKernel --> MaternKernel --> Unkown["???"]
  `}
  />
  <details class="mini">
    <summary>Presentation</summary>
    <iframe
      src="/templates/w3.html"
      sandbox="allow-scripts"
      title="w3"
      frameborder="0"
    />
  </details>
</section>
<!-- Week 3 -->
<section>
  <header>Week 3</header>
  <details class="mini">
    <summary>Code</summary>
    <iframe
      src="/templates/w3py.html"
      sandbox="allow-scripts"
      title="w3py"
      frameborder="0"
    />
  </details>
  <b>Useful Questions</b>
  <ul>
    <li>
      <input type="checkbox" checked disabled />
      What are Kernel Functions
      <br />
      <input type="checkbox" disabled />How do they work i.e how much can we
      predict the behavior of a function if at all?
    </li>
    <li>
      <input type="checkbox" disabled />
      What are the different types of Kernel Functions and how were they Arrived
      upton? visualising them!!
    </li>
    <li>
      <input type="checkbox" disabled />
      What are the different types of Kernel Functions that are used in QML? (I think
      this is the most important question)
      <br />
      <input type="checkbox" disabled />
      As a sub question, I think I would need to think of a few ways to visualise
      Quantum Kernels since right now that seems like very poorly documented online
    </li>
  </ul>

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
<!-- Week 2 -->
<details>
  <summary>Week 2</summary>
  <div>
    <ul>
      <li>Doing LitRev of QML Algorithms</li>
    </ul>
    <b>Picking Topics</b>
    <ul>
      <li>
        Encoding Kernel Function Finding efficient kernel fns for QML (like
        DLOG) that work better on QCs than on classical computers
      </li>
      <li>Encoding Data ZZ Z XZ Finding better encodings for data</li>
      <li>
        RL for Ansatz Using RL for finding better initial guess for ansatz
      </li>
      <li>
        Problems in Finance Finding better ways to solve problems in finance
      </li>
    </ul>
  </div>
</details>
<!-- Week 1 -->
<details>
  <summary>Week 1</summary>
  <div>
    <ul>
      <li>
        Revision:
        <a
          href="https://youtube.com/playlist?list=PLvvQ7qimTOklI0uO9gYfng__EyFfOoSna"
        >
          [WILP: QIC]
        </a>
      </li>
      <li>
        Started:
        <a
          href="https://youtube.com/playlist?list=PLmRxgFnCIhaMgvot-Xuym_hn69lmzIokg"
        >
          [UnivWaterloo: QML MOOC]
        </a>
      </li>
    </ul>
  </div>
</details>

<style lang="scss">
  /* Set up CSS counting for the numbered TOC */

  section,
  details {
    font-weight: 200;
    max-width: 1040px;
    height: auto;
    margin: 0 auto;
    padding: 10px;
    & .mini {
      summary {
        margin-bottom: 5px;
        text-transform: unset;
        font-weight: 200;
        box-shadow: none;
        &:hover {
          box-shadow: none;
        }
      }
    }
  }

  header,
  summary {
    text-transform: uppercase;
    font-weight: 500;
    background: #fff;
    padding: 10px;
    margin: 10px 0;
    border-radius: 10px;
    max-width: 300px;
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

  a,
  li a {
    &,
    &:hover,
    &:focus,
    &:active {
      color: #44c !important;
    }
  }
  iframe {
    width: min(100%, 900px);
    aspect-ratio: 16/10;
  }
  @media (max-width: 900px) {
    iframe {
      width: 100%;
    }
    article {
      display: none;
    }
  }
</style>
