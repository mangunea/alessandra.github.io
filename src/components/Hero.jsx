import { profile } from '../data.js'

export default function Hero() {
  return (
    <header id="hero" className="hero">
      <div className="hero__text">
        <h1 className="hero__headline">{profile.headline}</h1>
        <p className="hero__intro">{profile.intro}</p>
        <div className="hero__actions">
          <a className="btn btn--solid" href="#projects">Check out my projects!</a>
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
  )
}