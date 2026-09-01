import { For, type Component } from 'solid-js'
import { asset } from '../asset'

const TESTIMONIALS = [
  { avatar: 'profile-1.jpg', name: 'Satish Patel', role: 'Founder & CEO, Huddle' },
  { avatar: 'profile-2.jpg', name: 'Bruce McKenzie', role: 'Founder & CEO, Huddle' },
  { avatar: 'profile-3.jpg', name: 'Iva Boyd', role: 'Founder & CEO, Huddle' },
]

const QUOTE =
  'Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine.'

const Testimonials: Component = () => (
  <section class="testimonials" aria-label="Testimonials">
    <For each={TESTIMONIALS}>
      {(item) => (
        <figure class="tcard">
          <blockquote class="tcard__quote">{QUOTE}</blockquote>
          <figcaption class="tcard__author">
            <img
              class="tcard__avatar"
              src={asset(`images/${item.avatar}`)}
              alt=""
              width="24"
              height="24"
            />
            <div>
              <p class="tcard__name">{item.name}</p>
              <p class="tcard__role">{item.role}</p>
            </div>
          </figcaption>
        </figure>
      )}
    </For>
  </section>
)

export default Testimonials
