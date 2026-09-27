import type { Component } from 'solid-js'
import { asset } from '../asset'

const Hero: Component = () => (
  <section class="hero" aria-labelledby="hero-title">
    <img
      class="hero__illustration"
      src={asset('images/illustration-intro.png')}
      alt=""
      width="720"
      height="534"
    />
    <h1 id="hero-title" class="hero__title">All your files in one secure location, accessible anywhere.</h1>
    <p class="hero__text">
      Fylo stores all your most important files in one secure location. Access them wherever you
      need, share and collaborate with friends family, and co-workers.
    </p>
    <a href="#" class="btn hero__cta">Get Started</a>
  </section>
)

export default Hero
