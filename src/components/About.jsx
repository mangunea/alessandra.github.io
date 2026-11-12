import SectionHead from './SectionHead.jsx'
import { about } from '../data.js'

export default function About() {
  return (
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
  )
}