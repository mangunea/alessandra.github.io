import { useState } from 'react'
import SectionHead from './SectionHead.jsx'
import { projects } from '../data.js'

export default function Projects() {
  const categories = ['All', ...new Set(projects.map((p) => p.category))]
  const [active, setActive] = useState('All')
  const shown = active === 'All' ? projects : projects.filter((p) => p.category === active)

  return (
    <section id="projects" className="section" aria-labelledby="projects-title">
      <SectionHead id="projects-title" label="03 · Project portfolio" title="My Projects" />

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
    </section>
  )
}