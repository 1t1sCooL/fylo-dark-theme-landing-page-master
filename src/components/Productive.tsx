import type { Component } from 'solid-js'
import { asset } from '../asset'

const Productive: Component = () => (
  <section class="productive">
    <img
      class="productive__illustration reveal reveal--left"
      src={asset('images/illustration-stay-productive.png')}
      alt=""
      width="615"
      height="465"
    />
    <div class="productive__content reveal reveal--right">
      <h2 class="productive__title">Stay productive, wherever you are</h2>
      <p class="productive__text">
        Never let location be an issue when accessing your files. Fylo has you{' '}covered for
        all of your file storage needs.
      </p>
      <p class="productive__text">
        Securely share files and folders with friends, family and colleagues for live
        collaboration. No email attachments required.
      </p>
      <a href="#" class="productive__link">
        See how Fylo works
        <img src={asset('images/icon-arrow.svg')} alt="" width="16" height="16" />
      </a>
    </div>
  </section>
)

export default Productive
