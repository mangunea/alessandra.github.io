export default function SectionHead({ id, label, title }) {
  return (
    <div className="section__head">
      <p className="section__label">{label}</p>
      <h2 id={id} className="section__title">{title}</h2>
    </div>
  )
}