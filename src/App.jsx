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
      
      <main className="page">
      <header id="hero" className="hero">

        <div className="hero__text">
          <p className="hero__badge">{profile.available}</p>
          <h1 className="hero__headline">{profile.headline}</h1>
          <p className="hero__intro">{profile.intro}</p>
          <div className="hero__actions">
            <a className="btn btn--solid" href="#projects">View featured work</a>
            <a className="btn btn--ghost" href="#contact">Contact me</a>
          </div>
        </div>

    <img
      className="hero__photo"
      src={`${import.meta.env.BASE_URL}${profile.photo}`}
      alt={profile.photoAlt}
      width="400"
      height="480"
    />

    <ul className="stats">
      {profile.stats.map((stat) => (
        <li key={stat.label}>
          <span className="stats__value">{stat.value}</span>
          <span className="stats__label">{stat.label}</span>
        </li>
      ))}
    </ul>
  </header>
</main>
    </>
  )
}

