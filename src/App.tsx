import { useEffect, useState } from 'react'

interface Repo {
  id: number
  name: string
  description: string | null
  html_url: string
  language: string | null
  stargazers_count: number
  updated_at: string
  topics: string[]
}

const GITHUB_USERNAME = 'j12Ch05'
const AVATAR_URL = 'https://avatars.githubusercontent.com/u/192689701?v=4'

const skills = {
  Languages: ['Kotlin', 'Java', 'C', 'C++', 'C#', 'Python', 'PHP', 'JavaScript', 'TypeScript', 'SQL', 'XML'],
  Frontend: ['React', 'HTML5', 'CSS3', 'TypeScript', 'JavaScript (ES6+)'],
  'Android Dev': ['Kotlin', 'Java', 'Android Studio'],
  Backend: ['PHP', 'ASP.NET Core', 'MySQL', 'SQL Schema Design'],
  'Tools & Workflow': ['Git', 'GitHub', 'Jira', 'Confluence', 'OpenGL', 'GLUT'],
  Concepts: ['REST APIs', 'MVC Architecture', 'OOP', 'Database Normalization', 'Backtracking Algorithms'],
}


const langColors: Record<string, string> = {
  C: '#555599',
  'C++': '#f34b7d',
  PHP: '#4F5D95',
  Python: '#3572A5',
  Kotlin: '#A97BFF',
  JavaScript: '#f1e05a',
  TypeScript: '#3178c6',
  'Emacs Lisp': '#c065db',
  Go: '#00ADD8',
  Java: '#b07219',
}

function NavBar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const links = ['About', 'Skills', 'GitHub', 'Education', 'Contact']

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        background: scrolled ? 'rgba(9,9,15,0.95)' : 'transparent',
        backdropFilter: scrolled ? 'blur(12px)' : 'none',
        borderBottom: scrolled ? '1px solid var(--border)' : '1px solid transparent',
      }}
    >
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between h-16">
        <a href="#hero" className="font-mono-code text-sm font-medium" style={{ color: 'var(--primary)' }}>
          jc.dev
        </a>
        <ul className="hidden md:flex items-center gap-8">
          {links.map(l => (
            <li key={l}>
              <a
                href={`#${l.toLowerCase()}`}
                className="text-sm font-medium transition-colors duration-200"
                style={{ color: 'var(--muted-foreground)' }}
                onMouseEnter={e => (e.currentTarget.style.color = 'var(--foreground)')}
                onMouseLeave={e => (e.currentTarget.style.color = 'var(--muted-foreground)')}
              >
                {l}
              </a>
            </li>
          ))}
        </ul>
        <button
          className="md:hidden p-2"
          onClick={() => setMenuOpen(m => !m)}
          aria-label="Toggle menu"
          style={{ color: 'var(--foreground)' }}
        >
          <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
            {menuOpen
              ? <path d="M4 4l12 12M4 16L16 4" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round"/>
              : <path d="M3 5h14M3 10h14M3 15h14" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round"/>
            }
          </svg>
        </button>
      </div>
      {menuOpen && (
        <div className="md:hidden px-6 pb-4" style={{ background: 'rgba(9,9,15,0.98)', borderBottom: '1px solid var(--border)' }}>
          {links.map(l => (
            <a
              key={l}
              href={`#${l.toLowerCase()}`}
              className="block py-2 text-sm"
              style={{ color: 'var(--muted-foreground)' }}
              onClick={() => setMenuOpen(false)}
            >
              {l}
            </a>
          ))}
        </div>
      )}
    </nav>
  )
}

function Hero() {
  const firstName = 'Jean'
  const lastName = 'Chamoun'
  const [typedCharacters, setTypedCharacters] = useState(0)

  useEffect(() => {
    if (typedCharacters >= firstName.length + lastName.length) return
    const timer = window.setTimeout(() => setTypedCharacters(count => count + 1), 110)
    return () => window.clearTimeout(timer)
  }, [typedCharacters])

  const typedFirstName = firstName.slice(0, Math.min(typedCharacters, firstName.length))
  const typedLastName = lastName.slice(0, Math.max(0, typedCharacters - firstName.length))

  return (
    <section
      id="hero"
      className="min-h-screen flex flex-col justify-center relative overflow-hidden"
      style={{ padding: '0 1.5rem' }}
    >
      {/* subtle grid bg */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(var(--border) 1px, transparent 1px), linear-gradient(90deg, var(--border) 1px, transparent 1px)`,
          backgroundSize: '48px 48px',
          opacity: 0.25,
        }}
      />
      {/* gradient fade at bottom */}
      <div
        className="absolute bottom-0 left-0 right-0 h-40 pointer-events-none"
        style={{ background: 'linear-gradient(to bottom, transparent, var(--background))' }}
      />

      <div className="relative max-w-6xl mx-auto w-full">
        <p className="font-mono-code text-sm mb-4" style={{ color: 'var(--primary)' }}>
          {'// Hello, World.'}
        </p>
        <h1 aria-label="Jean Chamoun" className="font-display text-6xl md:text-8xl lg:text-9xl mb-4 leading-none tracking-tight" style={{ color: 'var(--foreground)' }}>
          {typedFirstName}
          {typedCharacters <= firstName.length && <span className="typewriter-caret" aria-hidden="true" />}
          <br />
          <span style={{ color: 'var(--primary)' }}>{typedLastName}</span>
          {typedCharacters > firstName.length && <span className="typewriter-caret" aria-hidden="true" />}
        </h1>
        <p className="text-xl md:text-2xl font-light mt-6 max-w-xl" style={{ color: 'var(--secondary-foreground)' }}>
          Computer Science Graduate - Software Developer
        </p>
        <p className="mt-3 text-sm font-mono-code" style={{ color: 'var(--muted-foreground)' }}>
          Batroun, Lebanon
        </p>
        <div className="flex flex-wrap gap-4 mt-10">
          <a
            href={`https://github.com/${GITHUB_USERNAME}`}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 text-sm font-semibold rounded-md transition-all duration-200"
            style={{ border: '1px solid var(--border)', color: 'var(--foreground)', background: 'transparent' }}
            onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--primary)'; e.currentTarget.style.color = 'var(--primary)' }}
            onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--border)'; e.currentTarget.style.color = 'var(--foreground)' }}
          >
            GitHub →
          </a>
          <a
            href="mailto:jeanchamoun93@gmail.com"
            className="px-6 py-3 text-sm font-semibold rounded-md transition-all duration-200"
            style={{ border: '1px solid var(--border)', color: 'var(--foreground)', background: 'transparent' }}
            onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--primary)'; e.currentTarget.style.color = 'var(--primary)' }}
            onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--border)'; e.currentTarget.style.color = 'var(--foreground)' }}
          >
            Get in Touch
          </a>
          <a
            href={`${import.meta.env.BASE_URL}jean-chamoun-cv.pdf`}
            download="Jean_Chamoun_CV.pdf"
            className="flex items-center gap-2 px-6 py-3 text-sm font-semibold rounded-md transition-all duration-200"
            style={{ border: '1px solid var(--border)', color: 'var(--foreground)', background: 'transparent' }}
            onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--primary)'; e.currentTarget.style.color = 'var(--primary)' }}
            onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--border)'; e.currentTarget.style.color = 'var(--foreground)' }}
          >
            <DownloadIcon size={15} /> Download CV
          </a>
        </div>
      </div>
    </section>
  )
}

function About() {
  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <SectionLabel label="About" />
        <div className="grid md:grid-cols-[1fr_2fr] gap-16 mt-12">
          <div className="flex flex-col items-start gap-6">
            <img
              src={AVATAR_URL}
              alt="Jean Chamoun"
              className="w-40 h-40 rounded-full object-cover"
              style={{ border: '2px solid var(--border)' }}
            />
            <div>
              <p className="font-semibold text-lg" style={{ color: 'var(--foreground)' }}>Jean Chamoun</p>
              <p className="text-sm mt-1" style={{ color: 'var(--muted-foreground)' }}>jeanchamoun93@gmail.com</p>
              <p className="text-sm" style={{ color: 'var(--muted-foreground)' }}>+961 76 468 728</p>
              <p className="text-sm" style={{ color: 'var(--muted-foreground)' }}>Batroun, Lebanon</p>
            </div>
            <div className="flex gap-3">
              <SocialLink href={`https://github.com/${GITHUB_USERNAME}`} label="GitHub">
                <GithubIcon />
              </SocialLink>
              <SocialLink href="https://www.linkedin.com/in/jean-chamoun-08876a39a/" label="LinkedIn">
                <LinkedInIcon />
              </SocialLink>
              <SocialLink href="mailto:jeanchamoun93@gmail.com" label="Email">
                <EmailIcon />
              </SocialLink>
            </div>
          </div>
          <div>
            <h2 className="font-display text-3xl md:text-4xl mb-6" style={{ color: 'var(--foreground)' }}>
              Building efficient, responsive software — from mobile to metal.
            </h2>
            <p className="text-base leading-relaxed" style={{ color: 'var(--secondary-foreground)' }}>
              Computer Science graduate with a strong passion for Android development and hands-on proficiency in Kotlin and Java. Backed by a solid foundation in systems programming (C/C++), algorithm design, and computer graphics, with a deep understanding of memory management, performance optimization, and how software interacts with hardware.
            </p>
            <p className="text-base leading-relaxed mt-4" style={{ color: 'var(--secondary-foreground)' }}>
              Well-versed in software engineering fundamentals including OOP, MVC architecture, REST APIs, and database design, complemented by practical experience across full-stack technologies (PHP, React, MySQL). Eager to bring a detail-oriented, performance-conscious approach to an internship or entry-level role in Android development.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

function Skills() {
  return (
    <section id="skills" className="py-24 px-6" style={{ background: 'var(--card)' }}>
      <div className="max-w-6xl mx-auto">
        <SectionLabel label="Skills" />
        <h2 className="font-display text-3xl md:text-4xl mt-4 mb-12" style={{ color: 'var(--foreground)' }}>
          Technical Expertise
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {Object.entries(skills).map(([category, items]) => (
            <div key={category} className="rounded-lg p-6" style={{ background: 'var(--secondary)', border: '1px solid var(--border)' }}>
              <p className="font-mono-code text-xs font-medium mb-4" style={{ color: 'var(--primary)' }}>
                {category}
              </p>
              <div className="flex flex-wrap gap-2">
                {items.map(skill => (
                  <span
                    key={skill}
                    className="font-mono-code text-xs px-2 py-1 rounded"
                    style={{ background: 'var(--muted)', color: 'var(--foreground)', border: '1px solid var(--border)' }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}


function GitHubRepos() {
  const [repos, setRepos] = useState<Repo[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [showAll, setShowAll] = useState(false)

  useEffect(() => {
    fetch(`https://api.github.com/users/${GITHUB_USERNAME}/repos?sort=updated&per_page=30`)
      .then(r => {
        if (!r.ok) throw new Error('Failed to fetch repos')
        return r.json()
      })
      .then((data: Repo[]) => {
        setRepos(data.filter(r => !r.name.toLowerCase().includes('config') || r.stargazers_count > 0))
        setLoading(false)
      })
      .catch(e => {
        setError(e.message)
        setLoading(false)
      })
  }, [])

  return (
    <section id="github" className="py-24 px-6" style={{ background: 'var(--card)' }}>
      <div className="max-w-6xl mx-auto">
        <SectionLabel label="GitHub" />
        <div className="flex flex-wrap items-end justify-between gap-4 mt-4 mb-12">
          <h2 className="font-display text-3xl md:text-4xl" style={{ color: 'var(--foreground)' }}>
            Repositories
          </h2>
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={() => setShowAll(value => !value)}
              className="text-sm font-medium transition-colors duration-200"
              style={{ color: 'var(--primary)' }}
            >
              {showAll ? 'Show featured' : 'View all'}
            </button>
            <a
              href={`https://github.com/${GITHUB_USERNAME}`}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:block text-sm font-medium transition-colors duration-200"
              style={{ color: 'var(--muted-foreground)' }}
              onMouseEnter={e => (e.currentTarget.style.color = 'var(--primary)')}
              onMouseLeave={e => (e.currentTarget.style.color = 'var(--muted-foreground)')}
            >
              GitHub →
            </a>
          </div>
        </div>

        {loading && (
          <div className="flex justify-center py-16">
            <div
              className="w-8 h-8 rounded-full border-2 border-t-transparent animate-spin"
              style={{ borderColor: 'var(--primary)', borderTopColor: 'transparent' }}
            />
          </div>
        )}

        {error && (
          <p className="text-sm" style={{ color: 'var(--muted-foreground)' }}>
            Could not load repositories: {error}
          </p>
        )}

        {!loading && !error && (
          <div
            className={showAll ? 'grid sm:grid-cols-2 lg:grid-cols-3 gap-5' : 'repo-marquee'}
          >
            <div
              className={showAll ? 'contents' : 'repo-marquee-track'}
              style={showAll ? undefined : { animationDuration: `${Math.max(repos.length * 12, 48)}s` }}
            >
            {(showAll ? repos : [...repos, ...repos]).map((repo, index) => {
              const isLoopCopy = !showAll && index >= repos.length
              return (
              <a
                key={`${isLoopCopy ? 'loop-' : ''}${repo.id}`}
                href={repo.html_url}
                target="_blank"
                rel="noopener noreferrer"
                aria-hidden={isLoopCopy}
                tabIndex={isLoopCopy ? -1 : undefined}
                className={`${showAll ? '' : 'repo-marquee-card'} flex flex-col gap-3 p-5 rounded-lg transition-all duration-200`}
                style={{ background: 'var(--secondary)', border: '1px solid var(--border)', textDecoration: 'none' }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--primary)'; e.currentTarget.style.transform = 'translateY(-2px)' }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--border)'; e.currentTarget.style.transform = 'translateY(0)' }}
              >
                <div className="flex items-start justify-between gap-2">
                  <p className="font-mono-code text-sm font-medium break-all" style={{ color: 'var(--foreground)' }}>
                    {repo.name}
                  </p>
                  <GithubIcon size={14} style={{ color: 'var(--muted-foreground)', flexShrink: 0, marginTop: 2 }} />
                </div>
                {repo.description && (
                  <p className="text-xs leading-relaxed flex-1" style={{ color: 'var(--muted-foreground)' }}>
                    {repo.description}
                  </p>
                )}
                <div className="flex items-center justify-between mt-auto pt-2" style={{ borderTop: '1px solid var(--border)' }}>
                  <div className="flex items-center gap-2">
                    {repo.language && (
                      <span className="flex items-center gap-1.5 text-xs" style={{ color: 'var(--muted-foreground)' }}>
                        <span
                          className="w-2.5 h-2.5 rounded-full inline-block"
                          style={{ background: langColors[repo.language] || '#888' }}
                        />
                        {repo.language}
                      </span>
                    )}
                  </div>
                  <div className="flex items-center gap-1 text-xs" style={{ color: 'var(--muted-foreground)' }}>
                    <StarIcon size={11} />
                    {repo.stargazers_count}
                  </div>
                </div>
              </a>
              )
            })}
            </div>
          </div>
        )}
      </div>
    </section>
  )
}

function Education() {
  return (
    <section id="education" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <SectionLabel label="Education" />
        <h2 className="font-display text-3xl md:text-4xl mt-4 mb-12" style={{ color: 'var(--foreground)' }}>
          Academic Background
        </h2>
        <div className="flex flex-col gap-6">
          <TimelineItem
            title="B.Sc. in Computer Science"
            org="Lebanese University — Faculty of Science, Fanar"
            period="2023 – 2026"
            detail="Algorithms, Data Structures, Databases, Operating Systems, Software Engineering, Computer Graphics"
          />
          <TimelineItem
            title="Python for Everybody Specialization"
            org="University of Michigan via Coursera"
            period="2024 – 2025"
            detail="4-course series: Python Basics, Data Structures, Accessing Web Data, Databases with Python"
          />
        </div>

      </div>
    </section>
  )
}

function Contact() {
  return (
    <section id="contact" className="py-24 px-6" style={{ background: 'var(--card)', borderTop: '1px solid var(--border)' }}>
      <div className="max-w-6xl mx-auto text-center">
        <SectionLabel label="Contact" centered />
        <h2 className="font-display text-4xl md:text-5xl mt-4 mb-6" style={{ color: 'var(--foreground)' }}>
          Let's Work Together
        </h2>
        <p className="text-base max-w-lg mx-auto mb-10" style={{ color: 'var(--secondary-foreground)' }}>
          I'm actively looking for internship or entry-level software development opportunities. Feel free to reach out.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <a
            href="mailto:jeanchamoun93@gmail.com"
            className="px-8 py-3.5 text-sm font-semibold rounded-md transition-all duration-200"
            style={{ background: 'var(--primary)', color: 'var(--primary-foreground)' }}
            onMouseEnter={e => { e.currentTarget.style.opacity = '0.85' }}
            onMouseLeave={e => { e.currentTarget.style.opacity = '1' }}
          >
            jeanchamoun93@gmail.com
          </a>
          <a
            href="tel:+96176468728"
            className="flex items-center gap-2 px-8 py-3.5 text-sm font-semibold rounded-md transition-all duration-200"
            style={{ border: '1px solid var(--border)', color: 'var(--foreground)' }}
            onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--primary)'; e.currentTarget.style.color = 'var(--primary)' }}
            onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--border)'; e.currentTarget.style.color = 'var(--foreground)' }}
          >
            <PhoneIcon size={16} /> Call
          </a>
          <a
            href="https://wa.me/96176468728"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-8 py-3.5 text-sm font-semibold rounded-md transition-all duration-200"
            style={{ border: '1px solid var(--border)', color: 'var(--foreground)' }}
            onMouseEnter={e => { e.currentTarget.style.borderColor = '#25D366'; e.currentTarget.style.color = '#25D366' }}
            onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--border)'; e.currentTarget.style.color = 'var(--foreground)' }}
          >
            <WhatsAppIcon size={16} /> WhatsApp
          </a>
          <a
            href="https://www.linkedin.com/in/jean-chamoun-08876a39a/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-8 py-3.5 text-sm font-semibold rounded-md transition-all duration-200"
            style={{ border: '1px solid var(--border)', color: 'var(--foreground)' }}
            onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--primary)'; e.currentTarget.style.color = 'var(--primary)' }}
            onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--border)'; e.currentTarget.style.color = 'var(--foreground)' }}
          >
            <LinkedInIcon size={16} /> LinkedIn
          </a>
          <a
            href={`https://github.com/${GITHUB_USERNAME}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-8 py-3.5 text-sm font-semibold rounded-md transition-all duration-200"
            style={{ border: '1px solid var(--border)', color: 'var(--foreground)' }}
            onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--primary)'; e.currentTarget.style.color = 'var(--primary)' }}
            onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--border)'; e.currentTarget.style.color = 'var(--foreground)' }}
          >
            <GithubIcon size={16} /> GitHub
          </a>
        </div>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="py-8 px-6 text-center" style={{ borderTop: '1px solid var(--border)' }}>
      <p className="font-mono-code text-xs" style={{ color: 'var(--muted-foreground)' }}>
        © 2026 Jean Chamoun · Built with React + Vite
      </p>
    </footer>
  )
}

// — Helpers —

function SectionLabel({ label, centered }: { label: string; centered?: boolean }) {
  return (
    <div className={`flex items-center gap-3 ${centered ? 'justify-center' : ''}`}>
      <span
        className="font-mono-code text-xs font-medium uppercase tracking-widest"
        style={{ color: 'var(--primary)' }}
      >
        {label}
      </span>
      <span className="h-px flex-1 max-w-16" style={{ background: 'var(--border)' }} />
    </div>
  )
}

function TimelineItem({ title, org, period, detail }: { title: string; org: string; period: string; detail: string }) {
  return (
    <div
      className="rounded-lg p-6 flex flex-col sm:flex-row sm:items-start gap-6"
      style={{ background: 'var(--card)', border: '1px solid var(--border)' }}
    >
      <div className="sm:w-40 flex-shrink-0">
        <span className="font-mono-code text-xs" style={{ color: 'var(--primary)' }}>{period}</span>
      </div>
      <div>
        <h4 className="font-semibold" style={{ color: 'var(--foreground)' }}>{title}</h4>
        <p className="text-sm mt-0.5" style={{ color: 'var(--muted-foreground)' }}>{org}</p>
        <p className="text-sm mt-3" style={{ color: 'var(--secondary-foreground)' }}>{detail}</p>
      </div>
    </div>
  )
}

function SocialLink({ href, label, children }: { href: string; label: string; children: React.ReactNode }) {
  return (
    <a
      href={href}
      target={href.startsWith('mailto') ? undefined : '_blank'}
      rel="noopener noreferrer"
      aria-label={label}
      className="w-9 h-9 rounded-md flex items-center justify-center transition-all duration-200"
      style={{ border: '1px solid var(--border)', color: 'var(--muted-foreground)' }}
      onMouseEnter={e => { e.currentTarget.style.color = 'var(--primary)'; e.currentTarget.style.borderColor = 'var(--primary)' }}
      onMouseLeave={e => { e.currentTarget.style.color = 'var(--muted-foreground)'; e.currentTarget.style.borderColor = 'var(--border)' }}
    >
      {children}
    </a>
  )
}

// — Icons —

function GithubIcon({ size = 16, style }: { size?: number; style?: React.CSSProperties }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" style={style}>
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
    </svg>
  )
}

function LinkedInIcon({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  )
}

function EmailIcon({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  )
}

function DownloadIcon({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
      <polyline points="7 10 12 15 17 10" />
      <line x1="12" y1="15" x2="12" y2="3" />
    </svg>
  )
}

function PhoneIcon({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.63 13a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.54 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L7.91 9.91a16 16 0 0 0 6.18 6.18l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  )
}

function WhatsAppIcon({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
    </svg>
  )
}

function StarIcon({ size = 14 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
    </svg>
  )
}

export default function App() {
  return (
    <div style={{ background: 'var(--background)', minHeight: '100vh' }}>
      <NavBar />
      <Hero />
      <About />
      <Skills />
      <GitHubRepos />
      <Education />
      <Contact />
      <Footer />
    </div>
  )
}
