# Paper Summaries
```yaml
  PC: Personal/Classical Computers;
  QC: Quantum Computers
```

## [Quantum circuit learning](https://doi.org/10.1103/PhysRevA.98.032309) - Mitarai et al (2018)

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

## [Quantum Machine Learning in Feature Hilbert Spaces](https://doi.org/10.1103/PhysRevLett.122.040504) - Schuld & Killoran (2019)
