# Week 1 - 13th Jan Monday to 21st Jan Saturday

Progress
- Quick Revision of QIC from Radhika Ma’am’s WILP course
- Started a standardised MOOC on QML from Univ of Waterloo which would have been latest in 2019
- Started looking into Ising Machines

Expected Workflow for Week 2
- Meeting with Vamsi to
	- Understand his Project & The Applications of Ising Models
	- Benchmarking Models, The DWave Ecosystem, And writing simulators
- Meeting with Mrs Anupama Ray (IBM) to
	- Understand the SoA on QML Software
	- See where progress can be made (followed by which I will also look into the C#, Cirq and Pennylane Ecosystems)
- Getting Done with at least most of the lit review (at least thats my best estimate)
- Getting Started on some Qiskit Problems in ML for sake of practice before we get to SoA
- I also plan to explore a bit on the Analog/Photonic Computing Side to see how large scale matrix multiplications are done fast

# Week 2 - 22nd Jan Sunday to 28th Jan Saturday

Progress
- Meeting with Mrs Anupama Ray (IBM): per her the folling are the directions I can pursue
  - Encoding Kernel Function: Finding efficient kernel fns for QML (like DLOG) that work better on QCs than on classical computers: based on (https://qiskit.org/documentation/machine-learning/tutorials/08_quantum_kernel_trainer.html) it seems `QuantumKernelTrainer` is colossally powerful so it would be better to start thinking of functions which would be noisy in their implementation in order to avoid overfitting, (this would carry forward to RL below also)
  - Encoding Data ZZ Z XZ: Finding better encodings for data
  - RL for Ansatz: Using RL for finding better initial guess for ansatz
  - Problems in Finance: Finding better ways to solve problems in finance
    - Currently I'm considering trade based money laundering detection starting from the FATF recommendations

A very brief summary of some of the algorithms is in the attached PDF (as is on Overleaf).
Realistically the only paper that covers the algorithms themselves properly is the one by Garcia and Penavlo everything else is either just a scrape through or a meta analysis.
Other than that the 2 other papers I'm looking to cover is the QUBO paper sent by you and the original QML paper by Peter Wittek.

TLDR; Expected Models which I think I would like to be working on are QSVMs, RL for Ansatz or applications in Finance.

Expected Workflow for Week 3
- Understanding what Reservoir & therefore Quantum Reservoir Computing is
- Should I also include approximate circuits or structural diagrams for the algorithms in the next update?
- Adding the following to the LitRev
  - QFS-Nets
  - QRNNs
- Exploration into Expected Lines of Work
  - QSVMs: The easiest way I personally think to start this is to actually try out a few programs to get feel of it and then move to how Kernel functions are created and how they can be improved
  - RL for Ansatz: I think looking at the papers is the best way to start this, so I'll with the following
    * OpenAI Atari paper: https://www.cs.toronto.edu/~vmnih/docs/dqn.pdf
    * RL for VQC as recommended by Dr Anupama: https://proceedings.neurips.cc/paper/2021/file/9724412729185d53a2e3e7f889d9f057-Paper.pdf
    * Additionally this for application of QRL directly: https://dl.acm.org/doi/fullHtml/10.1145/3486622.3493944
  - Applications in Finance: The Qiskit library has several finance related example so i think I'll start there

# Week 3 - 29th Jan Sunday to 4th Feb Saturday
Since the problem statement is decided, the progress on this week was poor and I spent most of the time trying to understand the landscape itself, so far this is the approximate direction I am heading in (I'll be updating this as I go along) with what Questions to ask and some basic papers I read & think would later be useful

So as agreed upon the problems statement would be
> Finding new Quantum Kernel Functions for data mapping to be used in QSVMs and other QML Algorithms

Progress
- What are Kernel Functions & How do they work i.e how much can we predict the behavior of a function if at all?
- What are the different types of Kernel Functions and how were they Arrived upton? visualising them!!
- What are the different types of Kernel Functions that are used in QML? (I think this is the most important question)
  As a sub question, I think I would need to think of a few ways to visualise Quantum Kernels since right now that seems like very poorly documented online

Some Useful Papers (for basic Math which I think may be useful later)
- [https://www.nature.com/articles/s41567-021-01287-z] - Quantum kernel estimation can provide exponential quantum speedup via the use of quantum-enhanced feature spaces
- [https://ar5iv.labs.arxiv.org/html/2111.06063] - Neural Nets are not blackboxes anymore but SVMs in the limit as it tends to infinity
- [https://cognitivemedium.com/magic_paper/assets/Hornik.pdf] - Multilayer NNs are universal approximators (Universal Approximation Thm): Can be used to make a Kernel out of NN (a relatively newer idea floating around [https://ieeexplore.ieee.org/abstract/document/7877043])?
- [https://www.nature.com/articles/s41598-018-20275-7] - Optimisation Techniques using Self Organised Criticality (SOC) Search(was shown to be more efficient than simulated annealing, incl on problems equivalent to finding ground state on Ising Spin Glass)
  * The above paper is important since it was theorized here (https://ar5iv.labs.arxiv.org/html/2107.03402), that training dynamics of NNs are attracted towards SOC States, (this however might be too far from our use case since we're not looking at NNs directly but SVMs, not sure)

Additionally the problems in the latex document are also fixed, I've cited the relavant papers except in one case where rather than the Original paper on using RL for Quantum Control, I've cited the paper which is more specifically using RL to find an Ansatz.

Would it be possible for you to create a new document for the information dump on the current project shared with Me & Radhika Ma'am... I'll also create a github repository if ever need it and add it to the thread (currently no original code so maybe not needed)

Expected Workflow for Week 4
- Understanding Gaussian Processes since they also Involve Kernel functions to see what Kernel Functions are in the first place
- Kristian Temme's lecture on Feature Spaces & Kernel Funcs
- Writing Some classical kernel functions from scratch & visualising them (won't take much time just for my understanding)
- Looking @ derivations of Existing Quantum Kernels (DLOG etc) & their derivations if any
- In interest of making sure I really understand the Kernels at a creative level I'll try to apply them to some new problems forced for SVMs (even at the risk of abismal accuracy) and share the repository
- I am yet to meet Vamsi for Ising machines and have yet to recieve resources from Anirban to include Ising Machines & Reservoir computing in the LitReview I'll make sure to get it in Week 4 at any cost

# Week 4 - 5th Feb Sunday to 11th Feb Saturday
All the relevant progress has been added to the new overleaf doc which is used for data dumps, includes
- Intro to ML, SVM & Kernel Functions (Full mechanism of SVM)
- a few examples of Kernel Functions: This however is not complete, it looks like to me for now that a lot of the Kernel funcs can be generalised and interelated so i want to hold off on moving on from doing the examples and simulations part before moving on to composition

I suspect the flow is ->
Gaussian Kernel special case of
  RBF Kernel special case of
    Periodic Kernel special case of
      Matern Kernel and maybe another level I'm not sure.

It is worth acutually generalising this far since Matern Kernel is a standard object provided in sklearn so i know for a fact it is used in a lot of places. It stands to reason it isnt just a complex function but has a very intuitive interpretation. Also I've not added any of the images yet, will do that as soon as this generalisation is complete since they all anyway get generated in one shot

# Week 5 - 12th Feb Sunday to 18th Feb Saturday
The following is a small document that contains the full explanation of how and why Kernel Functions work, it is a bit long but I think it is worth it since it is the first time I've actually understood the full mechanism of SVMs and Kernel Functions. It also includes a small function on how SINDy compares in our problem (text only).

# Week 6 - 19th Feb Sunday to 25th Feb Saturday
Have added
- qml.nukes.in/python#docs-kernlearn.html -> Caclulates The Kernel Matrix on Quantum Computer, (Kernel Matrices for large matrices are never evaluated directly, we always do Gradient Desc, I'm preparing a classical example for sake of demo for the next time we meet)
- qml.nukes.in/python#docs-kerntrain.html -> Copy pasted (so I can't explain it yet) but is some form of Kernel Fitting code

This week and the next both I'm basically trying to understand the Qiskit libraries, There are a few kinds of feature maps which I have no idea what they do.
- Additionally I'm trying to code up the SVM->QUBO part of https://ar5iv.labs.arxiv.org/html/2008.02369
- Have started experimenting with DWave libraries to access their Annealer.

# Week 7 - 26th Feb Sunday to 4th March Saturday
This week was basically just reading papers, theres honestly nothing more. I have a brief list of extractions from some the papers which i thought might be useful later on here (https://qml.nukes.in/markdown#summaries.md)

They we're all relevant papers since the basically all cited each other but the gist of it is that they all slowly build up to where we are in QML today

The plan for 25x25 SO FAR (may change) is im thinking of doing multi-class classification on the FULL MNIST dataset. So far we do only 0s and 1s (in every paper known), and ive not really worked out how, but since we have more qubites, there is a good chance that we can do more classes. I'm not sure how to do this yet,

But im thinking of doing a binary approach where rather than couping parity in the end, we can probably output a full binary number which would then just be converted to decimal. This is a bit of a stretch but I think it is worth trying out.