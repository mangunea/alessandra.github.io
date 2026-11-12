import { profile } from '../data.js'

export default function Footer() {
  return (
    <footer className="footer">
      <span>{profile.name} · Made with Vite + React</span>
      <a href="#hero">Back to top</a>
    </footer>
  )
}