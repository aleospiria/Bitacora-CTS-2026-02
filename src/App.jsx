import { useEffect, useState } from 'react'
import { QRCodeSVG } from 'qrcode.react'
import {
  Flame, Compass, Network, Users, Target, Route, Search, Lightbulb, GitCompare,
  BookOpen, Bot, PenLine, ShieldCheck, ChevronDown, CalendarClock, CircleDashed,
  CheckCircle2, QrCode, Image as ImageIcon, FileText, Table2, TreePine, Smartphone, ExternalLink,
} from 'lucide-react'
import * as d from './data.js'

const SECCIONES = [
  { id: 'inicio', label: 'Inicio', icon: Flame },
  { id: 'recorrido', label: 'Recorrido', icon: Route },
  { id: 'problema', label: 'Problema', icon: TreePine },
  { id: 'actores', label: 'Actores', icon: Users },
  { id: 'objetivos', label: 'Objetivos', icon: Target },
  { id: 'como', label: 'El cómo', icon: Compass },
  { id: 'evidencias', label: 'Evidencias', icon: ImageIcon },
  { id: 'hallazgos', label: 'Hallazgos', icon: Search },
  { id: 'propuesta', label: 'Propuesta', icon: Lightbulb },
  { id: 'decisiones', label: 'Decisiones', icon: GitCompare },
  { id: 'cts', label: 'CTS', icon: Network },
  { id: 'ia', label: 'Uso de IA', icon: Bot },
  { id: 'reflexion', label: 'Reflexión', icon: PenLine },
  { id: 'qr', label: 'QR', icon: QrCode },
]

function useScrollSpy(ids) {
  const [activo, setActivo] = useState(ids[0])
  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => e.isIntersecting && setActivo(e.target.id))
      },
      { rootMargin: '-40% 0px -55% 0px' }
    )
    ids.forEach((id) => {
      const el = document.getElementById(id)
      if (el) obs.observe(el)
    })
    return () => obs.disconnect()
  }, [ids])
  return activo
}

function Fecha({ fecha }) {
  return fecha ? (
    <span className="chip chip-fecha"><CalendarClock size={14} aria-hidden /> {fecha}</span>
  ) : (
    <span className="chip chip-falta"><CalendarClock size={14} aria-hidden /> Falta fecha</span>
  )
}

function Pendiente({ children }) {
  return (
    <div className="pendiente" role="note">
      <CircleDashed size={18} aria-hidden />
      <p>{children}</p>
    </div>
  )
}

function Seccion({ id, numero, titulo, icon: Icon, children, intro }) {
  return (
    <section id={id} className="seccion" aria-labelledby={`${id}-t`}>
      <header className="seccion-head">
        <span className="seccion-num">{numero}</span>
        <h2 id={`${id}-t`}><Icon size={26} aria-hidden /> {titulo}</h2>
        {intro && <p className="intro">{intro}</p>}
      </header>
      {children}
    </section>
  )
}

function Acordeon({ titulo, sub, children, abierto = false }) {
  const [open, setOpen] = useState(abierto)
  return (
    <div className={`acordeon ${open ? 'abierto' : ''}`}>
      <button type="button" aria-expanded={open} onClick={() => setOpen(!open)}>
        <span>
          <strong>{titulo}</strong>
          {sub && <small>{sub}</small>}
        </span>
        <ChevronDown size={20} aria-hidden />
      </button>
      {open && <div className="acordeon-body">{children}</div>}
    </div>
  )
}

function Nav({ activo }) {
  const ir = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  return (
    <nav className="nav" aria-label="Secciones de la bitácora">
      <div className="nav-inner">
        {SECCIONES.map(({ id, label, icon: Icon }) => (
          <button
            key={id}
            type="button"
            className={activo === id ? 'activo' : ''}
            aria-current={activo === id ? 'true' : undefined}
            onClick={() => ir(id)}
          >
            <Icon size={16} aria-hidden /> {label}
          </button>
        ))}
      </div>
    </nav>
  )
}

function Hero() {
  const hechos = d.etapas.filter((e) => e.estado === 'hecho').length
  const pct = Math.round((hechos / d.etapas.length) * 100)
  return (
    <header id="inicio" className="hero">
      <div className="hero-inner">
        <p className="eyebrow">{d.proyecto.curso}</p>
        <h1>{d.proyecto.titulo}</h1>
        <p className="hero-sub">{d.proyecto.subtitulo}</p>
        <p className="autor">{d.proyecto.autor} · {d.proyecto.rol}</p>
        <div className="progreso" aria-label={`Avance de la bitácora: ${pct} %`}>
          <div className="progreso-barra"><span style={{ width: `${pct}%` }} /></div>
          <small>{hechos} de {d.etapas.length} etapas documentadas</small>
        </div>
        <div className="cifras">
          {d.cifras.map((c) => (
            <div className="cifra" key={c.valor}>
              <strong>{c.valor}</strong>
              <span>{c.texto}</span>
              <small>{c.fuente}</small>
            </div>
          ))}
        </div>
      </div>
    </header>
  )
}

const ICONO_EVID = { imagen: ImageIcon, documento: FileText, tabla: Table2 }

function Recorrido() {
  return (
    <Seccion id="recorrido" numero="01" titulo="Recorrido del proyecto" icon={Route}
      intro="Cada entrada es una etapa del proceso. Toca una para ver el detalle y su evidencia.">
      <ol className="timeline">
        {d.etapas.map((e) => {
          const Ev = e.evidencia ? ICONO_EVID[e.evidencia.tipo] : null
          const hecho = e.estado === 'hecho'
          return (
            <li key={e.id} className={hecho ? 'hecho' : 'pend'}>
              <span className="punto" aria-hidden>
                {hecho ? <CheckCircle2 size={18} /> : <CircleDashed size={18} />}
              </span>
              <div className="tl-card">
                <div className="tl-top">
                  <span className="chip">{e.etapa}</span>
                  <Fecha fecha={e.fecha} />
                </div>
                <h3>{e.titulo}</h3>
                <p>{e.resumen}</p>
                {e.detalle.length > 0 && (
                  <Acordeon titulo="Ver detalle">
                    <ul>{e.detalle.map((t) => <li key={t}>{t}</li>)}</ul>
                  </Acordeon>
                )}
                {e.evidencia && (
                  <a className="evid-link" href={e.evidencia.src ? e.evidencia.src : '#'} target={e.evidencia.src ? '_blank' : undefined} rel="noreferrer">
                    <Ev size={16} aria-hidden /> Evidencia: {e.evidencia.texto}
                  </a>
                )}
              </div>
            </li>
          )
        })}
      </ol>
    </Seccion>
  )
}

function Lista({ items, clase }) {
  return (
    <ul className={`mini-lista ${clase}`}>
      {items.map(([t, s]) => (
        <li key={t}><strong>{t}</strong><span>{s}</span></li>
      ))}
    </ul>
  )
}

function Problema() {
  return (
    <Seccion id="problema" numero="02" titulo="El problema y su árbol" icon={TreePine}
      intro="Un incendio forestal es un fuego que se propaga sin control en bosques, páramos o sabanas. El clima prepara el escenario y, en la práctica, la chispa casi siempre es humana.">
      <figure className="figura">
        <img src={d.arbol.imagen} alt="Árbol de problemas: cinco efectos arriba, el problema central en el medio y ocho causas abajo, naturales y humanas" loading="lazy" />
        <figcaption>Árbol de problemas. Efectos arriba, causas abajo.</figcaption>
      </figure>
      <div className="grid-3">
        <Acordeon titulo="Causas naturales" sub="4 raíces" abierto><Lista items={d.arbol.causasNaturales} clase="azul" /></Acordeon>
        <Acordeon titulo="Causas humanas" sub="4 raíces" abierto><Lista items={d.arbol.causasHumanas} clase="rojo" /></Acordeon>
        <Acordeon titulo="Efectos" sub="5 ramas"><Lista items={d.arbol.efectos} clase="verde" /></Acordeon>
      </div>
      <h3 className="sub">Causa priorizada</h3>
      <article className="causa">
        <h4>{d.causaPriorizada.titulo}</h4>
        <p>{d.causaPriorizada.resumen}</p>
        <ul>{d.causaPriorizada.razones.map((r) => <li key={r}>{r}</li>)}</ul>
        <p className="nota"><strong>Fuera del alcance.</strong> {d.causaPriorizada.descartadas}</p>
      </article>
    </Seccion>
  )
}

function Actores() {
  return (
    <Seccion id="actores" numero="03" titulo="Actores clave" icon={Users}
      intro="No todos los actores están alineados. La ciencia avisa, pero la respuesta local y el comportamiento social no siempre llegan a tiempo.">
      <div className="cards-actores">
        {d.actores.map((a) => (
          <article className={`actor tipo-${a.tipo.toLowerCase()}`} key={a.nombre}>
            <span className="chip">{a.tipo}</span>
            <h3>{a.nombre}</h3>
            <p className="rol">{a.rol}</p>
            <p>{a.relacion}</p>
          </article>
        ))}
      </div>
    </Seccion>
  )
}

function Objetivos() {
  return (
    <Seccion id="objetivos" numero="04" titulo="Objetivos" icon={Target}>
      <div className="callout">
        <h3>Objetivo general</h3>
        <p>{d.objetivos.general}</p>
      </div>
      <h3 className="sub">Objetivos específicos</h3>
      <ol className="objetivos">
        {d.objetivos.especificos.map((o) => (
          <li key={o.texto}>
            <p>{o.texto}</p>
            <small><CheckCircle2 size={14} aria-hidden /> {o.enlace}</small>
          </li>
        ))}
      </ol>
    </Seccion>
  )
}

function Como() {
  return (
    <Seccion id="como" numero="05" titulo="El cómo" icon={Compass}
      intro="Herramientas y métodos con los que trabajamos el problema.">
      <div className="callout">
        <h3>Herramienta de definición: árbol de problemas</h3>
        <p>Primero se puso el problema central en el tronco. Luego se llenaron las raíces con las causas y las ramas con los efectos. Se descartaron los 5 porqués y la espina de pescado por las razones del registro de decisiones.</p>
      </div>
      <p>{d.como.texto}</p>
      <Oraculo />
    </Seccion>
  )
}

function Evidencias() {
  const ev = d.recoleccion.evidencias
  return (
    <Seccion id="evidencias" numero="06" titulo="Recolección y evidencias" icon={ImageIcon}
      intro="Fotos, videos, mapas, instrumentos y resultados del trabajo con el territorio.">
      <div className="etica">
        <ShieldCheck size={20} aria-hidden />
        <p><strong>Manejo ético.</strong> {d.recoleccion.consentimiento}</p>
      </div>
      {ev.length === 0 ? (
        <Pendiente>Por completar: agrega tus evidencias en <code>src/data.js</code>, en <code>recoleccion.evidencias</code>. Cada una lleva tipo, título, descripción y archivo.</Pendiente>
      ) : (
        <div className="galeria">
          {ev.map((x) => (
            <figure key={x.titulo} className="figura">
              {x.tipo === 'video' ? <video controls src={x.src} /> : <img src={x.src} alt={x.descripcion} loading="lazy" />}
              <figcaption><strong>{x.titulo}.</strong> {x.descripcion}</figcaption>
            </figure>
          ))}
        </div>
      )}
    </Seccion>
  )
}

function Hallazgos() {
  return (
    <Seccion id="hallazgos" numero="07" titulo="Hallazgos" icon={Search}
      intro="Lo que aprendimos del trabajo con técnicos y operadores, y qué cambió en la propuesta.">
      <div className="hallazgos">
        {d.hallazgos.items.map((h, i) => (
          <article className="hallazgo" key={h.titulo}>
            <span className="chip">Hallazgo {i + 1}</span>
            <h3>{h.titulo}</h3>
            <p className="fuente">Fuente: {h.fuente}</p>
            <p>{h.detalle}</p>
            <dl>
              <dt>Qué cambia en la propuesta</dt><dd>{h.implicacion}</dd>
              <dt>Relación con la causa</dt><dd>{h.causa}</dd>
            </dl>
          </article>
        ))}
      </div>
      <Pendiente>{d.hallazgos.texto}</Pendiente>
    </Seccion>
  )
}

function CapturaAnotada({ c }) {
  const [falla, setFalla] = useState(false)
  return (
    <figure className="captura">
      <div className="captura-marco">
        {falla ? (
          <div className="captura-falta"><ImageIcon size={28} aria-hidden /><span>Falta la captura <code>{c.src}</code></span></div>
        ) : (
          <img src={c.src} alt={c.alt} loading="lazy" onError={() => setFalla(true)} />
        )}
        {!falla && c.marcas.map((m) => (
          <span key={m.label} className="marca" style={{ left: `${m.left}%`, top: `${m.top}%`, width: `${m.width}%`, height: `${m.height}%` }}>
            <em>{m.label}</em>
          </span>
        ))}
      </div>
      <figcaption><strong>{c.titulo}.</strong> {c.texto}</figcaption>
    </figure>
  )
}

function Oraculo() {
  const o = d.oraculo
  return (
    <div className="oraculo">
      <h3 className="sub"><Network size={18} aria-hidden /> Referente técnico: {o.nombre}</h3>
      <p>{o.intro}</p>
      <div className="capturas">
        {o.capturas.map((c) => <CapturaAnotada key={c.src} c={c} />)}
      </div>
      <h4>Cómo funciona su módulo de incendios</h4>
      <ol className="flujo">
        {o.flujo.map(([t, s]) => <li key={t}><strong>{t}</strong><span>{s}</span></li>)}
      </ol>
      <h4>Tecnología</h4>
      <ul className="etiquetas">{o.tecnologia.map((t) => <li key={t}>{t}</li>)}</ul>
      <h4>Qué aprendimos y sirve a la propuesta</h4>
      <ul className="aprendizajes">{o.aprendizajes.map((t) => <li key={t}>{t}</li>)}</ul>
      <p className="nota"><ShieldCheck size={14} aria-hidden /> {o.aviso}</p>
    </div>
  )
}

function Propuesta() {
  const p = d.propuesta
  return (
    <Seccion id="propuesta" numero="08" titulo={`Propuesta: ${p.nombre}`} icon={Lightbulb}>
      <div className="callout">
        <h3><Smartphone size={20} aria-hidden /> La idea</h3>
        <p>{p.idea}</p>
      </div>
      <h3 className="sub">Módulos</h3>
      <div className="grid-modulos">
        {p.modulos.map(([t, s]) => (
          <div className="modulo" key={t}><strong>{t}</strong><span>{s}</span></div>
        ))}
      </div>
      <p className="nota"><ExternalLink size={14} aria-hidden /> {p.fuentes}</p>
      <h3 className="sub">Validación con actores reales</h3>
      <article className="callout validacion">
        <h3>{p.validacion.actor}</h3>
        <p>{p.validacion.texto}</p>
        <p><strong>Qué cambió:</strong> {p.validacion.cambio}</p>
      </article>
    </Seccion>
  )
}

function Decisiones() {
  return (
    <Seccion id="decisiones" numero="09" titulo="Decisiones y ajustes" icon={GitCompare}
      intro="Qué decidimos, qué cambió y por qué, incluida la retroalimentación recibida.">
      <div className="decisiones">
        {d.decisiones.map((x) => (
          <article key={x.titulo} className={`decision ${x.retro ? 'dec-pend' : ''}`}>
            <div className="tl-top"><Fecha fecha={x.fecha} /></div>
            <h3>{x.titulo}</h3>
            <dl>
              <dt>Qué decidimos</dt><dd>{x.queDecidimos}</dd>
              <dt>Por qué</dt><dd>{x.porQue}</dd>
              <dt>Qué cambió</dt><dd>{x.cambio}</dd>
            </dl>
          </article>
        ))}
      </div>
    </Seccion>
  )
}

function CTS() {
  return (
    <Seccion id="cts" numero="10" titulo="Relación con CTS" icon={Network}
      intro="Conexiones argumentadas entre el problema y los conceptos del curso.">
      <div className="grid-3 dims">
        {d.ctsDimensiones.map((x) => (
          <article className="dim" key={x.nombre}>
            <h3>{x.nombre}</h3>
            <ul>{x.puntos.map((p) => <li key={p}>{p}</li>)}</ul>
          </article>
        ))}
      </div>
      <h3 className="sub">Dos conexiones argumentadas</h3>
      <div className="grid-2">
        {d.cts.map((c) => (
          <article className="cts-card" key={c.titulo}>
            <span className="chip">{c.concepto}</span>
            <h3>{c.titulo}</h3>
            <p>{c.argumento}</p>
            {c.nota && <Pendiente>{c.nota}</Pendiente>}
          </article>
        ))}
      </div>
    </Seccion>
  )
}

function IA() {
  return (
    <Seccion id="ia" numero="11" titulo="Auditoría del uso de IA" icon={Bot} intro={d.ia.intro}>
      {d.ia.usos.map((u) => (
        <Acordeon key={u.herramienta} titulo={u.herramienta} sub={u.para}>
          <p><strong>Para qué:</strong> {u.para}</p>
          <p><strong>Verificación:</strong> {u.verificacion}</p>
          <Fecha fecha={u.fecha} />
          {u.pendiente && <Pendiente>Adjunta aquí la ficha de auditoría de este uso.</Pendiente>}
        </Acordeon>
      ))}
    </Seccion>
  )
}

function CodigoQR() {
  return (
    <section id="qr" className="seccion qr" aria-labelledby="qr-t">
      <h2 id="qr-t">Abre la bitácora en tu celular</h2>
      <p className="intro">Escanea el código con la cámara.</p>
      <div className="qr-caja">
        <QRCodeSVG value={d.proyecto.url} size={320} level="M" marginSize={4} title="Código QR de la bitácora" />
      </div>
      <a className="qr-url" href={d.proyecto.url}>{d.proyecto.url.replace('https://', '')}</a>
    </section>
  )
}

function Reflexion() {
  return (
    <Seccion id="reflexion" numero="12" titulo="Reflexión individual" icon={PenLine}>
      <article className="callout">
        <h3>{d.reflexion.autor}</h3>
        <p>{d.reflexion.aporte}</p>
        <blockquote>{d.reflexion.texto}</blockquote>
      </article>
      <h3 className="sub"><BookOpen size={18} aria-hidden /> Referencias</h3>
      <ul className="refs">{d.referencias.map((r) => <li key={r}>{r}</li>)}</ul>
    </Seccion>
  )
}

export default function App() {
  const activo = useScrollSpy(SECCIONES.map((s) => s.id))
  return (
    <>
      <a className="skip" href="#recorrido">Saltar al contenido</a>
      <Nav activo={activo} />
      <Hero />
      <main>
        <Recorrido />
        <Problema />
        <Actores />
        <Objetivos />
        <Como />
        <Evidencias />
        <Hallazgos />
        <Propuesta />
        <Decisiones />
        <CTS />
        <IA />
        <Reflexion />
        <CodigoQR />
      </main>
      <footer className="footer">Bitácora CTS 2026-02 · {d.proyecto.autor}</footer>
    </>
  )
}
