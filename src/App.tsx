import { onMount, type Component } from 'solid-js'
import Header from './components/Header'
import Hero from './components/Hero'
import Features from './components/Features'
import Productive from './components/Productive'
import Testimonials from './components/Testimonials'
import Cta from './components/Cta'
import Footer from './components/Footer'

const App: Component = () => {
  onMount(() => {
    const els = [...document.querySelectorAll<HTMLElement>('.reveal')]
    const pending = new Set(els)

    // once the entrance transition is done, drop the reveal classes so the
    // element goes back to its plain stylesheet state (and hover transitions
    // like .tcard's are no longer overridden by the 0.7s reveal transition)
    const reveal = (el: HTMLElement) => {
      if (!pending.has(el)) return
      pending.delete(el)
      el.classList.add('in-view')
      const cleanup = () =>
        el.classList.remove('reveal', 'reveal--left', 'reveal--right', 'in-view')
      el.addEventListener('transitionend', cleanup, { once: true })
      setTimeout(cleanup, 1600)
    }

    if (!('IntersectionObserver' in window)) {
      els.forEach(reveal)
      return
    }

    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            reveal(entry.target as HTMLElement)
            io.unobserve(entry.target)
          }
        }
      },
      { threshold: 0.15, rootMargin: '0px 0px -40px 0px' },
    )
    els.forEach((el) => io.observe(el))

    // a fast programmatic jump can teleport an element across the viewport
    // between two frames without ever intersecting — sweep those up on scroll
    const sweep = () => {
      for (const el of [...pending]) {
        if (el.getBoundingClientRect().top < innerHeight - 40) {
          reveal(el)
          io.unobserve(el)
        }
      }
      if (!pending.size) removeEventListener('scroll', sweep)
    }
    addEventListener('scroll', sweep, { passive: true })
  })

  return (
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
}

export default App
