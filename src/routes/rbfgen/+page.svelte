<script>
</script>

<h1>Kernel Generalisations</h1>
<section>
  <h2>RBF $\rightarrow$ Matern</h2>
  <div>
    The RBF kernel is defined as
    <br /> $$ k(x,x') = \exp\left(-\frac{`{d(x,x')}`}{`{2*\rho^2}`}\right) $$
    where $d(x,x') \geq 0$ is the Euclidean distance between $x$ and $x'$ and
    $\rho$ is a hyperparameter. The RBF kernel is infinitely differentiable and
    is positive definite.
    <br />
    The Matern kernel is a generalization of the RBF kernel. It is defined as
    <br /> $$ k(x,x') = \frac{`{2^{1-\\nu}}`}{`{\\Gamma(\\nu)}`}\left(\frac{`{\\sqrt{2\\nu}d(x,x')}`}{`{\\rho}`}\right)^\nu
    K_{`{\\nu}`}\left(\frac{`{\\sqrt{2\\nu}d(x,x')}`}{`{\\rho}`}\right) $$ where
    $K_{`{\\nu}`}$ is the modified Bessel function of the second kind and
    $\Gamma$ is the gamma function. The parameter $\nu$ controls the smoothness
    of the function. For $\nu=1/2$, the Matern kernel reduces to the RBF kernel.
    For $\nu=1$, the Matern kernel reduces to the absolute exponential kernel.
    For $\nu\rightarrow\infty$, the Matern kernel reduces to the absolute
    exponential kernel. The Matern kernel is infinitely differentiable and is
    positive definite. The Matern kernel is also isotropic. The Matern kernel is
    defined for $d(x,x')\geq 0$.
  </div>
  <h3>Intuition</h3>
  <div>
    It's common to say that the Bessel functions are the solutions of the Bessel
    Differential Equation, but thats not much of an explanation. We arrive at
    the Bessel Differential Equation by transforming the wave equation into
    cylindrical co-ordinates.
    <br /> <br />
    Intuitively The Bessel functions are what you get in two dimensions by taking
    superpositions of sine waves with circular symmetry. If you draw a circle 100
    meters in diameter, and put 1000 sources around the circumference of the circle,
    and have them transmit sine waves towards the center, all synchronized in phase,
    then the disturbance you get in the middle is described by a Bessel function
    … actually, $J_0$. If we do the same thing but have the source phase delayed
    linearly in a clockwise direction, so that when you come full circle they are
    back in phase again…that's the next Bessel function, $J_1$. Double the phase
    delay, and you get $J_2$, and so on.
    <br />
    So the RBF is effectively the same thing as a bessel function where on a membrane,
    rather than one 'dip', i.e as in dropping a ball in the center, In the Matern
    Kernel there may be an arbitrary amount of dips of varying hights say as when
    we beat a drum. The Gamma function is just a normalization factor which comes
    with some mathematical trickery.
    <br /> <br />
    The main power of a Matern kernel is that it allows for non-stationary processes.
    The RBF kernel is stationary, meaning that the covariance between two points
    $x$ and $x'$ is independent of the distance between them. The Matern kernel is
    non-stationary, meaning that the covariance between two points $x$ and $x'$ is
    dependent on the distance between them making it much more flexible. Non-stationary
    kernels have proved to be very useful for modeling data that exhibit spatially
    varying behavior, such as weather patterns or population density. <br />
  </div>
  <div>
    <h4>Special Cases</h4>
    <ul>
      <li>
        <b>nu = 0.5:</b> Matern reduces to $e^{`{-d}`}$ i.e exponential distance
      </li>
      <li>
        <b>nu = 1.5:</b> Matern reduces to $(1+ \sqrt(3) d) e^{`{-\\sqrt(3) d}`}$
      </li>
      <li>
        <b>nu = 2.5:</b> Matern reduces to $(1+ \sqrt(5) d + \frac{5}{3} d^2) e^{`{-\\sqrt(5) d}`}$
      </li>
      <li>
        <b>nu = $\infty$</b> Matern reduces to $e^{`{-\\frac{d^2}{2}}`}$ i.e RBF
        kernel
      </li>
    </ul>
  </div>
</section>
<section>
  <h2>Matern $\rightarrow$ Wendland</h2>
  <div>
    The Matern kernel is defined as
    <br /> $$ k(x,x') = \frac{`{2^{1-\\nu}}`}{`{\\Gamma(\\nu)}`}\left(\frac{`{\\sqrt{2\\nu}d(x,x')}`}{`{\\rho}`}\right)^\nu
    K_{`{\\nu}`}\left(\frac{`{\\sqrt{2\\nu}d(x,x')}`}{`{\\rho}`}\right) $$ where
    $K_{`{\\nu}`}$ is the modified Bessel function of the second kind and
    $\Gamma$ is the gamma function. The parameter $\nu$ controls the smoothness
    of the function.
  </div>
</section>

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
