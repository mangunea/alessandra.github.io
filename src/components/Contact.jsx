import { useState } from 'react'
import SectionHead from './SectionHead.jsx'
import { profile, contact } from '../data.js'

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

export default function Contact() {
  return (
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
  )
}