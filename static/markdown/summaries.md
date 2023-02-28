# Paper Summaries
```yaml
  PC: Personal/Classical Computers;
  QC: Quantum Computers
```
---
### 1. [Quantum circuit learning](https://doi.org/10.1103/PhysRevA.98.032309) - Mitarai et al (2018)

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