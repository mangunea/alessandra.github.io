import { profile, about, skills, projects, timeline, contact } from './data.js'
import { useState } from 'react'

function SectionHead({ id, label, title }) {
  return (
    <div className="section__head">
      <p className="section__label">{label}</p>
      <h2 id={id} className="section__title">{title}</h2>
    </div>
  )
}

/*projects area */
function Projects() {
  const categories = ['All', ...new Set(projects.map((p) => p.category))]
  const [active, setActive] = useState('All')
  const shown = active === 'All' ? projects : projects.filter((p) => p.category === active)

  return (
    <>
      <div className="filters" role="group" aria-label="Filter projects by type">
        {categories.map((category) => (
          <button
            key={category}
            type="button"
            className="filters__btn"
            aria-pressed={active === category}
            onClick={() => setActive(category)}
          >
            {category}
          </button>
        ))}
      </div>

      <ul className="work">
        {shown.map((project) => (
          <li key={project.title} className="work__row">    
            <span className="work__category">{project.category}</span>
            <div className="work__body">
              <h3 className="work__title">
                <a href={project.href} target="_blank" rel="noreferrer">
                  {project.title}
                  <svg className="work__icon" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                    <path d="M7 17 17 7M8 7h9v9" />
                  </svg>
                  <span className="visually-hidden"> on {project.linkLabel}</span>
                </a>
              </h3>
              <p className="work__desc">{project.description}</p>
            </div>
            <ul className="work__stack" aria-label="Built with">
              {project.stack.map((tool) => (
                <li key={tool}>{tool}</li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </>
  )
}

/*copy email button area */
function CopyEmail({ email }) {
  const [status, setStatus] = useState('')

  async function copy() {
    try {
      await navigator.clipboard.writeText(email)
      setStatus('Email copied to clipboard.')
    } catch {
      setStatus('Could not copy. Select the address above and copy it.')
    }
    setTimeout(() => setStatus(''), 3000)
  }

  return (
    <>
      <button type="button" className="btn btn--ghost" onClick={copy}>
        Copy email
      </button>
      <span className="copy-status" role="status">{status}</span>
    </>
  )
}

/*
mainapp area
*/
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

  <section id="about" className="section" aria-labelledby="about-title">
  <SectionHead id="about-title" label="01 · Overview" title="About me" />
  <div className="about">
    <div className="about__text">
      {about.paragraphs.map((paragraph) => (
        <p key={paragraph}>{paragraph}</p>
      ))}
    </div>
  </div>
</section>

<section id="skills" className="section" aria-labelledby="skills-title">
  <SectionHead id="skills-title" label="02 · Skills" title="Technical Skills" />
  <div className="skills">
    {skills.map((group) => (
      <div key={group.group}>
        <h3 className="skills__group">{group.group}</h3>
        <ul className="skills__list">
          {group.items.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>
    ))}
  </div>
</section>

<section id="projects" className="section" aria-labelledby="projects-title">
  <SectionHead id="projects-title" label="03 · Project portfolio" title="My Projects" />
  <Projects />
</section>

<section id="experience" className="section" aria-labelledby="experience-title">
  <SectionHead id="experience-title" label="04 · Experience" title="Education & Experience" />
  <ol className="timeline">
    {timeline.map((item) => (
      <li key={item.title}>
        <span className="timeline__when">{item.when}</span>
        <div>
          <h3 className="timeline__title">{item.title}</h3>
          <p className="timeline__place">{item.place}</p>
          <p className="timeline__text">{item.text}</p>
        </div>
      </li>
    ))}
  </ol>
</section>

<section id="contact" className="section" aria-labelledby="contact-title">
  <SectionHead id="contact-title" label="05 · Contact" title={contact.title} />
  <p className="contact__text">{contact.text}</p>
  <p className="contact__mail">
    <a href={`mailto:${profile.email}`}>{profile.email}</a>
  </p>
  <div className="contact__actions">
    <CopyEmail email={profile.email} />
    {profile.links.map((link) => (
      <a key={link.href} className="btn btn--ghost" href={link.href} target="_blank" rel="noreferrer">
        {link.label}
      </a>
    ))}
  </div>
</section>
</main>
<footer className="footer">
  <span>{profile.name} · Made with Vite + React</span>
  <a href="#hero">Back to top</a>
</footer>
    </>

  )
}

