import SectionHead from './SectionHead.jsx'
import { skills } from '../data.js'

export default function Skills() {
  return (
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
  )
}