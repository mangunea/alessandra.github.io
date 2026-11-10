import { profile } from './data.js'

export default function App() {
  return (
    <>
      <nav className="nav" aria-label="Sections">
        <a className="nav__logo" href="#hero">{profile.logo}</a>
        <div className="nav__links">
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#experience">Experience</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>
    </>
  )
}

