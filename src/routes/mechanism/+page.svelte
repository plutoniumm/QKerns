<script>
  import Highlight from "svelte-highlight";
  import python from "svelte-highlight/languages/python";
  import "highlight.js/styles/atom-one-dark.css";
</script>

<h1 class="w-100 mx-a">Kernel Functions</h1>
<section>
  <h2>Regression</h2>
  <p>
    Our objective first is to find the best linear predictor for the response
    variable $Y$ given the covariates $X$. We will assume that the response
    variable $Y$ is a linear combination of the covariates $X$ and derive a
    weight matrix $w$ such that <br />
    $$ Y = w^T X $$ We do this simply by defining the loss function as the sum of
    squared errors and minimizing it with respect to $w$. We can write this as
    <br />
    $$ J(w) = \min_w \sum_{`{i=1}`}^n (y_i - w^T x_i)^2 $$ Solving this for $w$
    gives us <br />
    $$ w = (X^T X)^{`{-1}`} X^T Y $$
  </p>
</section>
<section>
  <h2>Non Linearity</h2>
  <p>
    We can extend this to non linear mappings for $X$ by introducing a function
    $\phi$ such that $X \rightarrow \phi(X)$. We can then write the desired
    predictor as <br />
    $$ Y = w^T \phi(X) $$ We can then also write the weight matrix as <br />
    $$ w^* = (\phi^T \phi)^{`{-1}`} \phi^T Y $$ Let us introduce a regularization
    term $\lambda$ such that the weight matrix is <br />
    $$ w = (\phi^T \phi + \lambda I)^{`{-1}`} \phi^T Y $$ The logic behind adding
    a regularization term is that we want to penalise the slope of the line. This
    is because we want to avoid overfitting. Adding bias results in a lower variance
    which makes the outputs less sensitive to the inputs. The parameter $\lambda$
    is what controls the amount of bias we want to add
    <br />
    We additionally notice that in order to calculate the weight matrix, we need
    also calculate $\phi^T \phi$ which is an $n \times n$ matrix. This is computationally
    expensive and we can instead use a 'kernel trick' to avoid this. Before we do
    that, in the next section we will first set up the necessary background for the
    kernel trick.
  </p>
</section>
<details>
  <summary>
    <h2 class="d-ib m5">Restructuring the Weight Matrix</h2>
    <div class="mx-a">
      <b>Result:</b> <br />
      $ w^* = (\phi^T \phi + \lambda I)^{`{-1}`} \phi^T Y $ &rarr; <br /> $ w^*
      = \phi^T (\phi \phi^T + \lambda' I)^{`{-1}`} Y $
    </div>
  </summary>
  <p>
    Let us now define the new loss function along with a regularization term <br
    />
    $$ J(w) = \min_w \sum_{`{i=1}`}^n (y_i - w^T \phi(x_i))^2 + \frac{`{\u005Clambda}`}{2}
    ||w||^2 $$ We can now solve for $w$ and get <br />
    $$ w^* = \frac{1}{`{\u005Clambda}`} \sum_{`{i=1}`}^n (y_i - w^T \phi(x_i))
    \phi(x_i) $$ For sake of simplicity let us define a variable $\alpha$ such
    that <br />
    $$ \alpha = \frac{1}{`{\u005Clambda}`} \sum_{`{i=1}`}^n (y_i - w^T
    \phi(x_i)) $$ We can now write the weight matrix as <br />
    $$ w^* = \sum_{`{i=1}`}^n \alpha_i \phi(x_i) = \phi^T \alpha $$ Let us now
    substitute this into the loss function and get <br />
    $$ J(\alpha) = (y - \phi \alpha)^T (y - \phi \alpha) + \frac{`{\u005Clambda}`}{2}
    w^T w $$ expanding and simplifying this will give us <br />
    $$ J(\alpha) = y^T y - y^T \phi \phi^T \alpha - \alpha^T \phi^T y + \alpha^T
    \phi^T \phi \alpha + \frac{`{\u005Clambda}`}{2} w^T w $$ We can see that $\phi
    \phi^T$ is a repeated term. Let us define this new matrix as $K$ such that $$
    K = \phi \phi^T = \begin{`{bmatrix}`}
    \phi(x_1)^T \phi(x_1) & \phi(x_1)^T \phi(x_2) & \cdots & \phi(x_1)^T \phi(x_n)
    \\ \phi(x_2)^T \phi(x_1) & \phi(x_2)^T \phi(x_2) & \cdots & \phi(x_2)^T \phi(x_n)
    \\ \vdots & \vdots & \ddots & \vdots \\ \phi(x_n)^T \phi(x_1) & \phi(x_n)^T \phi(x_2)
    & \cdots & \phi(x_n)^T \phi(x_n) \end{`{bmatrix}`} $$ This matrix has two very
    important properties. First, it is symmetric and second, it is positive semi-definite.
    (This also means it is invertible which $\phi^T \phi$ MAY NOT). We can substitute
    all $\phi \phi^T$ with $K$ and also $K$ with $K^T$ and get <br />
    $$ J(\alpha) = y^T y - 2 y^T K \alpha + \alpha^T K^2 \alpha + \frac{`{\u005Clambda}`}{2}
    \alpha^T K \alpha $$ Seeting the derivative of this with respect to $\alpha$
    to zero and solving for $\alpha$ gives us (along with $K = \phi \phi^T$)
    <br />
    $$ \alpha* = (K + \frac{`{\u005Clambda}`}{2} I)^{-1} y $$ or $$ \alpha* = (K
    + \lambda' I)^{-1} y $$ We have achieved in this section effectively converting
    one equation to another as follows <br />
    $$ w^* = (\phi^T \phi + \lambda I)^{-1} \phi^T Y $$ into <br />
    $$ w^* = \phi^T (K + \lambda' I)^{-1} Y $$ By the looks of it we may not have
    done anything, but as we will see in the next section, this step will reduce
    the computation time by a lot.
  </p>
</details>
<section>
  <h2>Mercer's Theorem</h2>
  <p>
    A symmetric positive semi-definite function $K(x, y)$ can be expressed as an
    inner product of two vectors $\phi(x)$ and $\phi(y)$ such that <br />
    $$ K(x, y) = \langle \phi(x), \phi(y) \rangle $$ for some function $\phi$ iff
    $K(x,y)$ is positive semi-definite i.e <br />
    $$ \int K(x, y) g(x) g(y) dx dy \geq 0 \forall g $$ or equivalently <br />
    $$ \begin{`{bmatrix}`} K(x_1, x_1) & K(x_1, x_2) & \cdots \\ K(x_2, x_1) & \ddots
    & \\ \vdots & & \ddots \end{`{bmatrix}`} $$ is positive semi-definite for any
    collection ${`{x_1, x_2, \\cdots}`}$
    <br />
  </p>
</section>
<section>
  <h2>The Kernel Trick</h2>
  <p>
    What Mercer's Theorem lets us do is rewrite every term in the Kernel matrix
    $K$ as only a function of its base features $$ K = \phi \phi^T = \begin{`{bmatrix}`}
    \phi(x_1)^T \phi(x_1) & \phi(x_1)^T \phi(x_2) & \cdots & \phi(x_1)^T \phi(x_n)
    \\ \phi(x_2)^T \phi(x_1) & \phi(x_2)^T \phi(x_2) & \cdots & \phi(x_2)^T \phi(x_n)
    \\ \vdots & \vdots & \ddots & \vdots \\ \phi(x_n)^T \phi(x_1) & \phi(x_n)^T \phi(x_2)
    & \cdots & \phi(x_n)^T \phi(x_n) \end{`{bmatrix}`} = \begin{`{bmatrix}`}
    k(x_1, x_1) & k(x_1, x_2) & \cdots & k(x_1, x_n) \\ k(x_2, x_1) & k(x_2, x_2)
    & \cdots & k(x_2, x_n) \\ \vdots & \vdots & \ddots & \vdots \\ k(x_n, x_1) &
    k(x_n, x_2) & \cdots & k(x_n, x_n) \end{`{bmatrix}`} $$
  </p>
  <ul class="d-ib">
    <li>First: $K$ is symmetric</li>
    <li>
      Second: $K$ is positive semi-definite (This also means it is invertible
      which $\phi^T \phi$ MAY NOT)
    </li>
  </ul>
  <p>
    So as long as we know the Kernel (which we can either choose or learn), we
    can compute the Kernel matrix and use it to solve for $\alpha$ and then
    compute $w^*$ efficiently
  </p>
</section>
<section>
  <h2>Working Example</h2>
  <p>
    Consider the following mapping $$ \phi: x \rightarrow \phi(x) = \begin{`{bmatrix}`}
    x_1^2 \\ \sqrt{`{2}`} x_1 x_2 \\ x_2^2 \end{`{bmatrix}`} $$ Let us for sake of
    demonstration work out its kernel <br />
    $$ \phi^T(x_m) \phi(x_n) = \begin{`{bmatrix}`} x_{`{m,1}`}^2 & \sqrt{`{2}`} x_{`{m,1}`}
    x_{`{m,2}`} & x_{`{m,2}`}^2 \end{`{bmatrix}`} \begin{`{bmatrix}`} x_{`{n,1}`}^2
    \\ \sqrt{`{2}`} x_{`{n,1}`} x_{`{n,2}`} \\ x_{`{n,2}`}^2 \end{`{bmatrix}`}
    = x_{`{m,1}`}^2 x_{`{n,1}`}^2 + 2 x_{`{m,1}`} x_{`{m,2}`} x_{`{n,1}`} x_{`{n,2}`}
    + x_{`{m,2}`}^2 x_{`{n,2}`}^2 $$ <br />
    Clearly $$ \phi^T(x_m) \phi(x_n) = (x_{`{m,1}`}
    x_{`{n,1}`} + x_{`{m,2}`} x_{`{n,2}`})^2 = (x_m^T x_n)^2 = k(x_m, x_n) $$
    This is an example of a Kernel called the <b>Polynomial Kernel</b> which is
    defined as $$ k(x, y) = (x^T y + r)^d $$ making in our case the parameters
    $d = 2$ and $r = 0$ <br />
  </p>
</section>
<section>
  <h2>Making Predictions</h2>
  <p>
    We can now make predictions using the Kernel trick. We can use the following
    equation to make predictions with $ y = w^T \phi(x) $ But as we have seen
    above we can convert the RHS from
    <br />$$ w^T \phi(x) = y(\phi \phi^T + \lambda' I)^{`{-1}`} \phi^T \phi(x) $$
    to <br /> $$ w^T \phi(x) = y(K + \lambda' I)^{`{-1}`} k_x $$ where $k_x$ is
    <br />
    $$ k_x = \phi^T \phi(x) = \begin{`{bmatrix}`} \phi(x_1)^T \phi(x) \\ \phi(x_2)^T
    \phi(x) \\ \vdots \\ \phi(x_n)^T \phi(x) \end{`{bmatrix}`} $$ And our result
    is completely independent of the mapping $\phi$ and only depends on the Kernel
    $k$ and the data $X$ and $Y$ <br />
  </p>
</section>
<section>
  <h2>Applying the Kernel Trick to the SVM</h2>
  <p>
    As we know an SVM is a machine that can classify data by finding a
    hyperplane that separates the data into two classes. The SVM is a linear
    classifier, which means that it can only classify data that is linearly
    separable. But most data in the real world is not linear and so we need to
    use a non-linear classifier. The work around for that is that we first apply
    a non linear transformation to the data and then use a linear classifier to
    classify the transformed data. <br />
    Let us look at how we do that for a simple case
  </p>
  <Highlight
    language={python}
    code={`def rand_pt_circle(rad_min, rad_max):
      angle = random.uniform(0, 2 * math.pi)
      radius = random.uniform(rad_min, rad_max)
      x = radius * math.cos(angle)
      y = radius * math.sin(angle)
      return (x, y)

      # Data points,
      #   X = listed 2D points of uniform random in circle of rad 0.6
      #   Y = listed 2D points of uniform random in annulus of rad 0.5 to 1
      X = [rand_pt_circle(0, 0.6) for i in range(100)]
      Y = [rand_pt_circle(0.5, 1) for i in range(100)]

      fX = [(x[0], x[1], x[0] ** 2 + x[1] ** 2) for x in X] # THE TRANSFORMATION

      # fit
      # svm.SVC().fit(X,Y) rather than X,Y we use fX,Y
      svm.SVC().fit(fX,Y)`}
  />
  <!-- svelte-ignore a11y-missing-attribute -->
  <img
    class="mx-a rx10"
    src="https://i.imgur.com/V6IWaD2.png"
    height="400px"
    width="400px"
  />
  <p>
    While in an ideal world we should be able to stop here and call it a day, in
    reality we need to do a bit more work. The problem here is that choosing the
    the function fX here is a difficult task, and in interest of laziness we
    want this work cut out for us. The second problem is that in order to be
    able to make a non standard boundary we need to make a more complex non
    linear transform which in turn increases the computational requirements. The
    kernel trick will now be useful to us. The idea here is that the SVM itself
    does not need to know what each point is mapped to under this non linear
    transform, i.e $x_i \rightarrow f(x_i) \forall i$. The only thing it
    actually needs to know is how each point compares to each other data point
    i.e $f(x_i) vs f(x_j)$. This is still ultimately finding a glorified version
    of the distance between each point. Mathematically this is equivalent to
    doing $f(x_i)^T f(x_j)$ and this is what we define as the Kernel function
    <br /> $$k(x_i, x_j) := f(x_i)^T f(x_j) $$
  </p>
  <h3>Examples</h3>
  <h4>Linear Kernel</h4>
  <p>
    Let us say the transform we intend to make is $f(x) = x$ i.e the identity
    transform. Then the kernel function is
    <br /> $$ k(x_i, x_j) = x_i^T x_j $$ With the call
  </p>
  <Highlight language={python} code={`svm.SVC(kernel='linear').fit(X,Y)`} />
  <p>
    The linear kernel gives us a flat decision boundary as expected, it can only
    make a straight line through the data without any transforms.
  </p>
  <h4>Polynomial Kernel</h4>
  <p>
    Let us say the non linear transform we intend to make is $f(x) = (x_1, x_2,
    x_1x_2, x_1^2 ,x_2^2)$ i.e the polynomial transform. Then the kernel
    function is
    <br /> $$k(x_i, x_j) = (1 + x_i^T x_j)^2 $$ With the call
  </p>
  <Highlight
    language={python}
    code={`svm.SVC(kernel='poly', degree=2).fit(X,Y)`}
  />
  <p>
    The polynomial kernel gives us a curved decision boundary as expected, this
    is equivalent to first making an ideal transform before hand of the type
    $c_0 + c_1x_1 + c_2x_2 + c_3x_1x_2 + c_4x_1^2 + c_5x_2^2$ for some values
    $c_i$ and then using the linear kernel on the transformed data. The Kernel
    function here lets us find the relations between the values as if we had
    done the transform before hand without actually doing the transform.
  </p>
  <h4>RBF Kernel</h4>
  <p>
    What if we were to have a function for whom the transform were extremely
    difficult or impossible to calculate even in an approximate case, one such
    example is the Radial Basis Function (RBF) kernel. The RBF kernel is defined
    as
    <br />
    $$ k(x_i, x_j) = \exp(-\gamma ||x_i - x_j||^2) $$ With the call
  </p>
  <Highlight
    language={python}
    code={`svm.SVC(kernel='rbf', gamma=1).fit(X,Y)`}
  />
  <p>
    It turns out that the transform needed before hand for an RBF is infinite
    dimensional, i.e it looks like
    <br />
    $$ f(x) = (\text{`{infinite terms...}`}) $$ Notice how being basically
    impossible to calculate, we can still use the RBF kernel to find the
    relations between the points.
    <b>Note:</b> Gamma is a hyper parameter that controls the width of the RBF kernel.
    The smaller the gamma the wider the Kernel is therefore making it closer to a
    linear kernel. The larger the gamma the narrower the Kernel is therefore making
    it closer to a polynomial kernel of arbitrary degree. (See Proof in last section)
  </p>
</section>
<section>
  <h2>Comparison with SINDy</h2>
  <div>
    This method is different from SINDy because SINDy usually aims to find the
    exact equations of the least number of degrees of freedom in any given
    system. We don't aim to do that. SINDy will not be able to convert a text
    description to an image. We want an arbitrary classifier that can be applied
    to any data set. SINDy would be much more suitable for a physical system
    where physics modelling is needed, ML is not needed for that and does not
    aim to solve those problems in the first place.
    <br />
    ML however can be used in places where even the Non Linear systems don't have
    a closed form solution and we want to predict the state at some far time t beyond
    the chaos boundary. The results, models or even the architectures of the ML models
    used here are however not well studied and is an active area of research.
    <ul>
      <li>
        It is possible however that even for a given SINDy model, the ML model
        has lower computational requirements and thus is better used despite not
        being as accurate. A real world example was seen in Tesla Motors Inc
        where when calculating the current level of a battery it proved to be
        simpler to just use an ML model on the raw voltage than actually add
        physical resistors and model the complex interactions of all different
        sections, heat profiles and retentivities of the battery.
      </li>
      <li>
        As mentioned above, we have seen in Kadierdan et al CDC 2019, that SINDy
        can be very accurately used to model, and therefore balance an inverted
        vertical double pendulum. It however also turns out that SINDy is good
        at small specific classes of tasks and should be used for as such, it
        generalists very poorly as was seen in the modelling of Nuclear Fusion
        where fusion control is done much better with DeepMind's new model <a
          href="#">:Deepmind</a
        >, we see that they're able to not only model and predict the gas plume
        behaviour but also control it. This is a much more complex task than the
        simple double pendulum and so it is not surprising that SINDy fails
        here. This is also a good example of how ML can be used to solve
        problems that are not solvable by SINDy.
      </li>
      <li>
        SINDy aims to find a simple model such that it is EXPLAINABLE. The
        latter being the more important part, in ML the model has no constraint
        on being explainable and is very happy being a black box in interest of
        which it has no constraints on what forms it can take, therefore
        structurally it can be much more complex than a SINDy model. This is a
        good thing because it allows us to model much more complex systems, but
        it is also a bad thing because it makes it harder to explain the model
        and thus harder to trust it. In interest of this ability to Generalise,
        in 2011 NASA switched to ML for aircraft engine premptive fault
        detection and in 2015 for drought prediction in the ECOSTRESS mission,
        both areas which were traditionally left to modelling.
      </li>
    </ul>
  </div>
</section>
<details open>
  <summary
    ><h2 class="d-ib m5">Proof of RBF Kernel's Dimensionality</h2></summary
  >
  <div>
    $ k(x_i, x_j) $ <br />
    $ \quad = \exp(-\frac{`{1}`}{`{2}`} ||x_i - x_j||^2)$
    <br />
    $ \quad = \exp(-\frac{`{1}`}{`{2}`}
    \langle x_i - x_j\rangle^T \langle x_i - x_j\rangle) $ <br />
    $ \quad = \exp(-\frac{`{1}`}{`{2}`}
    (\langle x_i, x_i - x_j\rangle - \langle x_j, x_i - x_j\rangle)) $ <br />
    $ \quad = \exp(-\frac{`{1}`}{`{2}`}
    (\langle x_i, x_i\rangle - \langle x_i, x_j\rangle - \langle x_j, x_i\rangle
    + \langle x_j, x_j\rangle)) $ <br />
    $ \quad = \exp(-\frac{`{1}`}{`{2}`} (||x_i||^2 - 2\langle x_i, x_j\rangle + ||x_j||^2))
    $ <br />
    $ \quad = \exp[-\frac{`{1}`}{`{2}`}
    ||x_i||^2 - \frac{`{1}`}{`{2}`} ||x_j||^2] \exp(\langle x_i, x_j\rangle) $<br
    />
    $ \quad = C e^{`{\\langle x_i, x_j\\rangle}`}
    \quad \quad \text{`{since }`} C = \exp(-\frac{`{1}`}{`{2}`} ||x_i||^2 - \frac{`{1}`}{`{2}`}
    ||x_j||^2) $ <br /> $ \quad = C \sum_{`{n=0}`}^{`{\\infty}`} \frac{`{\\langle x_i, x_j\\rangle^n}`}{`{n!}`}
    \quad \quad \text{`{Taylor Series Expansion}`} $ <br />
    $ \quad = C \sum_{`{n=0}`}^{`{\\infty}`}
    \frac{`{K_{poly(n)}(x_i, x_j) }`}{`{n!}`}$
  </div>
</details>

<style>
  section,
  details {
    max-width: 991px;
    margin: 0 auto;
  }
  details {
    border: 1px solid #ccc;
    border-radius: 20px;
    padding: 10px;
  }
</style>
