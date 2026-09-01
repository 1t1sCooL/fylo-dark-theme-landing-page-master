import type { Component } from 'solid-js'
import { asset } from '../asset'

const Header: Component = () => (
  <header class="header">
    <a href="#" class="header__logo-link" aria-label="Fylo home">
      <img class="header__logo" src={asset('images/logo.svg')} alt="Fylo" width="176" height="52" />
    </a>
    <nav class="nav" aria-label="Main">
      <a href="#" class="nav__link">Features</a>
      <a href="#" class="nav__link">Team</a>
      <a href="#" class="nav__link">Sign In</a>
    </nav>
  </header>
)

export default Header
