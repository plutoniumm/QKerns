# Paper Summaries
```yaml
  PC: Personal/Classical Computers;
  QC: Quantum Computers
```

<style>
  h3::before {
    content: "🔗 ";
    height: 20px;
    width: 20px;
    display: inline-block;
  }
</style>

<section id="index">

## Index
- [1. Quantum circuit learning](#1-quantum-circuit-learning)
- [2. Quantum Machine Learning in Feature Hilbert Spaces](#2-quantum-machine-learning-in-feature-hilbert-spaces)
- [3. A rigorous and robust quantum speed-up in supervised machine learning](#3-a-rigorous-and-robust-quantum-speed-up-in-supervised-machine-learning)
- [4. Forrelation: A Problem that Optimally Separates Quantum from Classical Computing](#4-forrelation-a-problem-that-optimally-separates-quantum-from-classical-computing)
- [5. Supervised quantum machine learning models are kernel methods](#5-supervised-quantum-machine-learning-models-are-kernel-methods)
- [6. Circuit-centric quantum classifiers](#6-circuit-centric-quantum-classifiers)
- [7. Supervised learning with quantum-enhanced feature spaces](#7-supervised-learning-with-quantum-enhanced-feature-spaces)
- [8. Supervised quantum machine learning models are kernel methods](#8-supervised-quantum-machine-learning-models-are-kernel-methods)
- [9. Read the Fine Print](#9-read-the-fine-print)


</section>

---
###  1. [Quantum circuit learning](https://doi.org/10.1103/PhysRevA.98.032309) - Mitarai et al (2018)

This is the direct Q equivalent of an NN

**Algorithm**
1. Encode $\{x_i\}$ onto some $|ψ_{in} (x_i)\rangle$ by applying $U(x_i)$ to $|0\rangle$
2. Apply some $U(\theta)$ such that $\theta$ is a parameter and get output $|ψ_{out} (x_i, \theta)\rangle = U(\theta) |ψ_{in} (x_i)\rangle$
3. Measure Expectation across chosen dimensions, say Pauli Operators $B_j ⊂ \{I, X, Y, Z\}^{⊗N}$
4. Using some func $F$ output $y_i = y(x_i, \theta)$ defined as $y(x_i, \theta) = F ({\langle B_j (x_i, \theta )\rangle})$
5. **LOOP** $min\, L(f(x_i), y(x_i, \theta))$ where $f$ is teacher and $\theta$ is param to give y_i output
6. Eval Test-Train

**Key Takeaways**
- This can approximate any analytical $f^n$ because of the tensor prod
- NonLin basis funcs are needed for Classical ML, however the computational requirements grow very fast with # basis funcs, to avoid which Kernel Trick is used
  - QCL avoids this by using an Exp number of funcs w.r.t #qubits to model teacher (intractible in PCs)
- QCL can also represent more complex $f^n$ than classical NNs can

---
### 2. [Quantum Machine Learning in Feature Hilbert Spaces](https://doi.org/10.1103/PhysRevLett.122.040504) - Schuld & Killoran (2019)

1. QC estimates inner prod of Q states to compute a classically intractable kern which can be fed into an SVM.
2. VQC as as a linear model that classifies data explicitly in Hilbert space.
- Illustrate these ideas with a feature map based on squeezing in a continuous-variable system, and visualize the working principle with two-dimensional minibenchmark
datasets.

**Key Takeaways**
- A given kern can be related to many different
feature spaces. Kernel theory also defines a unique Hilbert
space associated $\forall$ kernel, the Reproducing Kernel
Hilbert Space. Since a feature map gives rise to a kern & a kernel gives rise to an RKHS, we can construct a unique RKHS for any given feature map. OR \
Feature Map &rarr; Kernel &rarr; RKHS $\implies$ Feature Map &rarr; RKHS
- Representer Theorem: For a common fam of ML opti probs over functions in an RKHS (such as our linear models), the solution can be represented as an expansion of kernel functions,  $$ f^*(x) = \sum_{m=1}^M \alpha_m k(x, x^m) $$
Therefore, instead of optimizing over $\infty$-dim RKHS we can directly start with the ansatz $f^*(x)$ and solve the convex optimization problem of finding the parameters $α_m$. In short, linear models in the RKHS are often equivalent to kernelized models in the input space

---
### 3. [A rigorous and robust quantum speed-up in supervised machine learning](https://doi.org/10.1038/s41567-021-01287-z) - Liu, Arunachalam & Temme (2021)


Several challenges need to be addressed for a theoretical justification of quantum advantage.
1. These algorithms may not use QCs in an essential way. Ex, it was observed in ref. that variational circuits can only implement linear classifiers on input Q encoding, which can be replaced by a classical SVM if the encoding is classically tractable.
2. Even if parts of the Q algorithm cannot be efficiently simulated classically, it is unclear if the learning problem it solves is also hard for classical algorithms. Indeed, one cannot rule out the existence of an end-to-end dequantization argument, where an efficient classical algorithm exists for any learning problem that can be solved by the Q learning algorithms. Third, Q learning algorithms are subject to finite sampling noise, even when implemented fault-tolerantly. Because of these challenges, none of the heuristic Q learning algorithms have hitherto been rigorously proven to solve a learning problem that is hard for classical computers.

**Key Takeaways**
- An important advantage of the SVM-QKE algorithm, which only uses QC to estimate kernel entries, is that error-mitigation techniques can be applied,, when the feature map circuit is sufficiently shallow. Our robustness analysis gives hope that an error-mitigated quantum feature map can still maintain its computational power. Recent experiments have shown the feasibility of the implementation of quantum kernel methods on near-term hardware, and moreover demonstrated the efficacy of error-mitigation techniques, as well as robustness to noise in the kernel entries,,,. Our results and these experimental advances suggest that quantum kernel methods are leading candidates toward obtaining a practical quantum advantage in machine learning on near-term devices.



---
### 4. [Forrelation: A Problem that Optimally Separates Quantum from Classical Computing](https://ar5iv.labs.arxiv.org/html/1411.5729) - Aaronson & Ambainis (2014)

Achieves the largest known gap between quantum and classical query complexity for the same problem (The Forrelation problem)
. Where one needs to decide whether one Boolean function is highly correlated with the Fourier transform of a second function.
$O_q = 1$ and $O_c =  O(\sqrt(N) / log(N))$


---
### 5. [Supervised quantum machine learning models are kernel methods](https://ar5iv.labs.arxiv.org/html/2101.11020) - Schuld (2021)

We map input space directly into the feature space, since feature map space and hilbert space are equivalent. \
if $\rho(x) = |\phi(x)\rangle \langle\phi(x)|$ then $k(x, x') := f(x,x') = Tr[\rho(x) \rho(x')]$ is a kernel.

Example: In angle embeding let

$|\phi(x)\rangle = (\text{from }R_x)\quad cos(\frac{x}{2}) \ |0\rangle - i\, sin(\frac{x}{2}) |1\rangle$
then
$$|\phi(x)\rangle\langle\phi(x)| = cos^2(\frac{x}{2}) |0\rangle\langle0| - i\, sin(\frac{x}{2}) cos(\frac{x}{2}) |0\rangle\langle1| - i\, sin(\frac{x}{2}) cos(\frac{x}{2}) |1\rangle\langle0| + sin^2(\frac{x}{2}) |1\rangle\langle1|$$
So
$k(x,x') = cos(\frac{x-x'}{2})$

So: Generally for embeddings

|Embedding|Kernel|
|:-|:-|
|Basis|$\delta_{x,x'}$|
|Amplitude| $\|\langle x\|x'\rangle\|^2$ |
|Angle|$\cos(\frac{x-x'}{2})$|

We can see despite the allures of Amplitude embedding the best it can do is a 2nd order polynomial kernel.

---
### 6. [Circuit-centric quantum classifiers](https://doi.org/10.1103/PhysRevA.101.032308) - Schuld, et al (2019)

Introduces the idea of the phase shift rule. And some circuit designs.
- [Supplementary Code Paper](https://arxiv.org/pdf/1811.04968.pdf)

---
### 7. [Supervised learning with quantum-enhanced feature spaces](https://doi.org/10.1038/s41586-019-0980-2) - Gambetta et al. (2019)

There are 2 kinds of quantum classifiers:
1. Quantum Kernel Estimator (QKE): Uses a quantum computer to estimate the kernel function, which is then fed into a classical SVM.
2. Quantum Variational Classifier (QVC): Uses a variational quantum circuit to classify the data in a way similar to the method of conventional SVMs.

Introduces the Pauli FeatureMaps (Z: single Qubit, ZZ: Entablement based), i.e now the well known map

$$\phi_s(\mathbb{X}) =  \left\{
\begin{array}{ll}
      x_0 \because k=1 \\
      \prod_{j\in\mathbb{S}} (\pi-x_j) \quad \text{otherwise}
\end{array}
\right. $$

---
### 8. [Supervised quantum machine learning models are kernel methods](https://ar5iv.labs.arxiv.org/html/2101.11020) - Schuld (2021)

Due to Kernel Methods in contrast to the popular strategy of variational models (where a quantum algorithm depends on a tractable number of classical parameters that are optimised), we do not have to worry about finding the right variational circuit ansatz, or about how to avoid barren plateaus problems – but pay the price of having to compute pairwise distances between data points.

**Key Takeaways**
- Quantum models are linear models in the “feature vectors”
- Quantum models that minimise typical machine learning cost functions have measurements that can be written as “kernel expansions in the data”, $\mathcal{M} = \sum_{m}^N \alpha_m \rho(x^m)$ i.e In other words, we are guaranteed that the best measurements for machine learning tasks only have $m$ degrees of freedom (where $m$ is num of dims of training data) $𝒪(2^{2^N})$ D.O.F degrees of freedom needed to express a general measurement on a standard N-qubit quantum computer
- The problem of finding the optimal measurement for typical machine learning cost functions trained with m data samples can be formulated as an m-dimensional optimisation problem

This is magic, there is no better explanation for it.

---
### 9. [Read the Fine Print](https://doi.org/10.1038/nphys3272) - Aaronson (2015)

HHL claims to be an efficient algorithm for solving $Ax = b$ for a sparse matrix A.

HHL has some caveats, as follows
- **QRAM Assumption**: Assuming $b = (b_1, ..., b_n)$ can be loaded quickly into memory to prepare a quantum state $|b\rangle$ = \sum_{i=1}^n b_i |i\rangle$ of $log_2(n)$ qubits, whose amplitudes encode the entries of $b$ (Amplitude Enoding).
  EVEN IF we assume that QRAMs exist and we can read all the values of $b_i$ at once via superposition, WE STILL need to make sure that $b_i$ values are relatively uniform, or in other words the values are similar to each other. <br/>\
  **Failure Condition**: If preparing $|b\rangle$ $n^c$ steps for some const $c$

- The computer needs to be able to do $e^{-iAt}$ for a sparse matrix A. If lets say the number of non-zero entries in each row of A is $s$ for some $s << n$ then this scales Linearly as size of $s$. <br/>\
  **Failure Condition**: If $e^{-iAt}$ takes $n^c$ steps for some const $c$

- Matrix needs to not only be **robustly** invertible, but also **well-conditioned**. Let us define $$\kappa = \lambda_{min} / \lambda_{max}\quad \forall\quad \lambda_i \in \text{eigenvalues} $$
  Then we know HHL is linear in $\kappa$
  **Failure Condition**: If $\kappa$ grows like $n^c$ for some const $c$

- The output of the HHL is not a classical $x = (x_1 ... x_n)$ but rather a quantum state $|x\rangle$ of $log_2(n)$ qubits, whose amplitudes encode the entries of $x$ (Amplitude Enoding). We then need to measure this in any basis to get the classical $x$. But to this statistically we need to do the measurement an average of $n$ times to get all $x_i$ with any statistical confidence
  **Failure Condition**: The size of $n$ is too large