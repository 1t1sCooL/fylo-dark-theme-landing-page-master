import type { Component } from 'solid-js'
import Header from './components/Header'
import Hero from './components/Hero'
import Features from './components/Features'
import Productive from './components/Productive'
import Testimonials from './components/Testimonials'
import Cta from './components/Cta'
import Footer from './components/Footer'

const App: Component = () => (
  <>
    <div class="hero-band">
      <Header />
      <Hero />
    </div>
    <main class="main">
      <Features />
      <Productive />
      <Testimonials />
      <Cta />
    </main>
    <Footer />
  </>
)

export default App
