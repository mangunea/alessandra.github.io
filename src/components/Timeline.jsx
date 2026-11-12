import SectionHead from './SectionHead.jsx'
import { timeline } from '../data.js'

export default function Timeline() {
  return (
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
  )
}