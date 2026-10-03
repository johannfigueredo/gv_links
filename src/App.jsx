import { useState } from "react";

const OPEN_DAY_URL = "https://opendaygv.fillout.com/t/nEWGmKbwV8us";

const LINKS = [
  {
    title: "Admisiones 2027",
    desc: "Agenda tu visita o recorrido",
    href: "https://wa.me/573157467103?text=Hola%2C%20deseo%20agendar%20una%20visita%20o%20recorrido%20en%20el%20Gimnasio%20Vallegrande",
    tone: "alt",
    icon: (
      <>
        <rect x="3" y="5" width="18" height="16" rx="3" />
        <path d="M8 3v4M16 3v4M3 10h18M8 15l2.5 2.5L16 13" />
      </>
    ),
  },
  {
    title: "Escríbenos",
    desc: "Resolvemos tus dudas por WhatsApp",
    href: "https://wa.me/573157467103",
    icon: (
      <>
        <path d="M4 20l1.4-4.2A8.5 8.5 0 1 1 8.3 18.7L4 20z" />
        <path d="M9 9.5c0 3 2.5 5.5 5.5 5.5l1.2-1.4-2-1-.9.7a3.5 3.5 0 0 1-1.6-1.6l.7-.9-1-2L9 9.5z" />
      </>
    ),
  },
  {
    title: "Página web",
    desc: "vallegrande.edu.co",
    href: "https://vallegrande.edu.co/",
    tone: "alt",
    icon: (
      <>
        <circle cx="12" cy="12" r="9" />
        <path d="M3 12h18M12 3c3 3.2 3 14.8 0 18M12 3c-3 3.2-3 14.8 0 18" />
      </>
    ),
  },
];

const SOCIAL = [
  {
    name: "Instagram",
    href: "https://www.instagram.com/gimnasio_vallegrande/",
    icon: (
      <>
        <rect x="3" y="3" width="18" height="18" rx="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
      </>
    ),
  },
  {
    name: "TikTok",
    href: "https://www.tiktok.com/@gimnasiovallegrande",
    icon: (
      <>
        <path d="M14 3v11.5a3.5 3.5 0 1 1-3.5-3.5" />
        <path d="M14 3c.3 2.6 2 4.5 5 4.7" />
      </>
    ),
  },
  {
    name: "Facebook",
    href: "https://www.facebook.com/Gimnasiovallegrande/",
    icon: <path d="M14 8h3V4h-3a4 4 0 0 0-4 4v3H7v4h3v6h4v-6h3l1-4h-4V8z" />,
  },
];

function Icon({ children, className }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {children}
    </svg>
  );
}

/** Imagen opcional: si el archivo no existe en public/assets, no se muestra. */
function OptionalImg({ src, ...props }) {
  const [ok, setOk] = useState(true);
  if (!ok) return null;
  return <img src={src} onError={() => setOk(false)} {...props} />;
}

function Background() {
  return (
    <div className="bg" aria-hidden="true">
      <svg className="hills" viewBox="0 0 800 160" preserveAspectRatio="none">
        <path className="h1" d="M0 70 C150 20 300 90 450 60 S700 30 800 55 V160 H0Z" />
        <path className="h2" d="M0 115 C160 80 320 130 480 105 S700 90 800 105 V160 H0Z" />
      </svg>
    </div>
  );
}

export default function App() {
  return (
    <>
      <Background />
      <main>
        <header>
          <h1 className="logo">
            <img src="./assets/GV logo horizontal+bisel.PNG" alt="Gimnasio Vallegrande" />
          </h1>
          <p>Soy el mejor para bien de los demás.</p>
        </header>

        {/* 1 · OPEN DAY 2026 (destacado) */}
        <a className="hero" href={OPEN_DAY_URL} target="_blank" rel="noopener noreferrer">
          <svg className="scene" viewBox="0 0 400 300" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
            <defs>
              <linearGradient id="sky" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0" stopColor="#ffffff" />
                <stop offset="1" stopColor="#e3f1e7" />
              </linearGradient>
            </defs>
            <rect width="400" height="300" fill="url(#sky)" />
            <circle cx="292" cy="92" r="46" fill="#c8102e" />
            <path d="M0 190 C70 120 140 150 210 175 S350 150 400 130 V300 H0Z" fill="#6bb27f" />
            <path d="M0 220 C80 170 170 215 250 200 S350 180 400 190 V300 H0Z" fill="#2f8f4e" />
            <path d="M0 255 C90 225 190 262 290 240 S370 235 400 242 V300 H0Z" fill="#0f4d27" />
            <path d="M150 300 C175 262 200 250 232 238" fill="none" stroke="#fff" strokeWidth="10" strokeLinecap="round" opacity=".85" />
          </svg>
          <OptionalImg className="photo" src="./assets/banner.jpg" alt="" />

          <div className="hero-inner">
            <span className="tag">Inscripciones abiertas</span>
            <div>
              <h2>
                Open Day
                <br />
                2026
                <small>Ven a conocer nuestro gimnasio · Reserva tu cupo</small>
              </h2>
              <span className="cta">
                Reservar mi lugar
                <Icon>
                  <path d="M5 12h14M13 6l6 6-6 6" />
                </Icon>
              </span>
            </div>
          </div>
        </a>

        <nav className="stack" aria-label="Enlaces principales">
          {LINKS.map((l) => (
            <a key={l.title} className={`card ${l.tone ?? ""}`} href={l.href} target="_blank" rel="noopener noreferrer">
              <span className="ico">
                <Icon>{l.icon}</Icon>
              </span>
              <span className="txt">
                <b>{l.title}</b>
                <span>{l.desc}</span>
              </span>
              <Icon className="arrow">
                <path d="M9 6l6 6-6 6" />
              </Icon>
            </a>
          ))}
        </nav>

        {/* 5 · Redes sociales */}
        <div className="social-title">Síguenos</div>
        <div className="social">
          {SOCIAL.map((s) => (
            <a key={s.name} href={s.href} target="_blank" rel="noopener noreferrer">
              <Icon>{s.icon}</Icon>
              {s.name}
            </a>
          ))}
        </div>

        <footer>
          Gimnasio Vallegrande · Crecimiento continuo en espiritualidad, ciencia e investigación.
        </footer>
      </main>
    </>
  );
}
