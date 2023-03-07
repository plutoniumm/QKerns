## Multi Class QSVM via Angle Encoding for full MNIST
The idea in the following is that since data encoding is a big problem in QNNs, we don't worry about how to do it in the first place and leave it up to the NNs to actually do, after which we can use Angle Encoding to encode the output of the NNs into the quantum state. This is a very simple approach, but it is a good starting point for more complex approaches.

Angle encoding is used since the feature map is cosine whereas in Amplitude Encoding while data needed is logaritmic, its searchable feature space is only quadratic.
**Steps:**
- **Input Data NN Encoding:**
  - [Baidu Encoding Examples](https://qml.baidu.com/tutorials/machine-learning/encoding-classical-data-into-quantum-states.html)
- **Setup Kernel:**
  - [Qiskit `QuantumKernel` Class](https://qiskit.org/documentation/machine-learning/stubs/qiskit_machine_learning.kernels.QuantumKernel.html)
- **Multi Class QSVM:**
  - [-](#)
- **Train on MNIST:**
  - [-](#)
- **Error Mitigation:**
  - [Qiskit ECC](https://qiskit.org/textbook/ch-quantum-hardware/error-correction-repetition-code.html)
  - [YT: Q ECC using Repetition Code](https://youtube.com/watch?v=ZY8PddknCos)
  - [YT: Q ECC Examples](https://youtube.com/watch?v=e-EaIs-Qr78)
  - [YT: Qiskit Tuts Err Mitigation](https://youtube.com/watch?v=yuDxHJOKsVA)
- **Output Data NN Encoding:**
  - [-](#)