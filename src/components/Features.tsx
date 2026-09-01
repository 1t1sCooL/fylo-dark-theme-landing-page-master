import { For, type Component } from 'solid-js'
import { asset } from '../asset'

const FEATURES = [
  {
    icon: 'icon-access-anywhere.svg',
    title: 'Access your files, anywhere',
    text: 'The ability to use a smartphone, tablet, or computer to access your account means your files follow you everywhere.',
  },
  {
    icon: 'icon-security.svg',
    title: 'Security you can trust',
    text: '2-factor authentication and user-controlled encryption are just a couple of the security features we allow to help secure your files.',
  },
  {
    icon: 'icon-collaboration.svg',
    title: 'Real-time collaboration',
    text: 'Securely share files and folders with friends, family and colleagues for live collaboration. No email attachments required.',
  },
  {
    icon: 'icon-any-file.svg',
    title: 'Store any type of file',
    text: "Whether you're sharing holidays photos or work documents, Fylo has you covered allowing for all file types to be securely stored and shared.",
  },
]

const Features: Component = () => (
  <section class="features" aria-label="Features">
    <For each={FEATURES}>
      {(feature) => (
        <article class="feature">
          <div class="feature__icon-box">
            <img src={asset(`images/${feature.icon}`)} alt="" />
          </div>
          <h2 class="feature__title">{feature.title}</h2>
          <p class="feature__text">{feature.text}</p>
        </article>
      )}
    </For>
  </section>
)

export default Features
