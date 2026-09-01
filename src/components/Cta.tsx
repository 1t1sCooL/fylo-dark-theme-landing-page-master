import { createSignal, Show, type Component } from 'solid-js'

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

const Cta: Component = () => {
  const [email, setEmail] = createSignal('')
  const [error, setError] = createSignal('')

  const handleSubmit = (e: SubmitEvent) => {
    e.preventDefault()
    if (!EMAIL_RE.test(email().trim())) {
      setError('Please enter a valid email address')
      return
    }
    setError('')
    setEmail('')
  }

  return (
    <section class="cta" aria-labelledby="cta-title">
      <h2 class="cta__title" id="cta-title">
        Get early access today
      </h2>
      <p class="cta__text">
        It only takes a minute to sign up and our free starter tier is extremely generous. If you
        have any questions, our support team would be happy to help you.
      </p>
      <form class="cta__form" novalidate onSubmit={handleSubmit}>
        <div class="cta__field">
          <label class="visually-hidden" for="cta-email">
            Email address
          </label>
          <input
            class="cta__input"
            classList={{ 'cta__input--invalid': !!error() }}
            id="cta-email"
            type="email"
            placeholder="email@example.com"
            value={email()}
            onInput={(e) => setEmail(e.currentTarget.value)}
            aria-describedby="cta-error"
          />
          <Show when={error()}>
            <p class="cta__error" id="cta-error" role="alert">
              {error()}
            </p>
          </Show>
        </div>
        <button class="btn cta__submit" type="submit">
          Get Started For Free
        </button>
      </form>
    </section>
  )
}

export default Cta
