import React from 'react'
import { createRoot } from 'react-dom/client'
import { ArrowUpRight, Code2, ExternalLink, Mail, Menu, Sparkles, X } from 'lucide-react'
import './styles.css'
import './case-study.css'
import yunaAnalyse from './assets/yuna-analyse.png'
import yunaProduits from './assets/yuna-produits.png'
import yunaAujourdhui from './assets/yuna-aujourdhui.png'
import shopflowDashboard from './assets/shopflow-dashboard.png'
import shopflowCommandes from './assets/shopflow-commandes.png'
import shopflowAssistant from './assets/shopflow-assistant-ia.png'

const projects = [
  {
    number: '01',
    title: "Yuna’s Shop",
    type: 'Application web de gestion',
    description: 'Un outil métier conçu pour centraliser le suivi des commandes et des articles, sécuriser les calculs financiers et retrouver rapidement chaque information cliente.',
    tags: ['React', 'Firebase', 'Dashboard'],
    tone: 'yellow',
    href: 'https://yuna-shop-app.vercel.app/',
  },
  {
    number: '02',
    title: 'ShopFlow DZ',
    type: 'SaaS B2B · Version bêta',
    description: 'Une application mobile-first pour centraliser commandes, acomptes, clientes, livraisons et bénéfices des commerces qui vendent sur Instagram, WhatsApp et Facebook.',
    tags: ['React', 'Firebase', 'Assistant IA'],
    tone: 'violet',
    href: 'https://shopflow-dz.vercel.app/',
  },
]

function App() {
  const [open, setOpen] = React.useState(false)
  const close = () => setOpen(false)

  return (
    <div className="site-shell">
      <header className="nav-wrap">
        <a className="brand" href="#top" aria-label="Accueil Sara Ziane">SZ<span>.</span></a>
        <button className="menu-button" onClick={() => setOpen(!open)} aria-label="Ouvrir le menu" aria-expanded={open}>
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
        <nav className={open ? 'nav-links open' : 'nav-links'} aria-label="Navigation principale">
          <a href="#projets" onClick={close}>Projets</a>
          <a href="#apropos" onClick={close}>À propos</a>
          <a className="nav-cta" href="#contact" onClick={close}>Me contacter <ArrowUpRight size={16}/></a>
        </nav>
      </header>

      <main id="top">
        <section className="hero section">
          <div className="hero-copy">
            <p className="eyebrow"><span></span> Développeuse web · Alger</p>
            <h1>Je transforme les idées en expériences <em>digitales utiles.</em></h1>
            <p className="hero-text">Je conçois des interfaces modernes et des solutions simples pour les petites entreprises, les commerces et les projets qui veulent avancer.</p>
            <div className="hero-actions">
              <a className="button primary" href="#projets">Voir mes projets <ArrowUpRight size={18}/></a>
              <a className="text-link" href="#contact">Parler de votre idée <span>↗</span></a>
            </div>
          </div>
          <div className="hero-visual" aria-hidden="true">
            <div className="orbit orbit-one"></div><div className="orbit orbit-two"></div>
            <div className="code-card">
              <div className="code-top"><span></span><span></span><span></span></div>
              <pre><code><b>const</b> projet = {'{'}{`\n`}  idée: <i>"utile"</i>,{`\n`}  design: <i>"humain"</i>,{`\n`}  résultat: <i>"concret"</i>{`\n`}{'}'}</code></pre>
            </div>
            <div className="float-tag tag-one"><Sparkles size={16}/> Design clair</div>
            <div className="float-tag tag-two"><Code2 size={16}/> Code propre</div>
          </div>
        </section>

        <section className="projects section" id="projets">
          <div className="section-heading">
            <div><p className="eyebrow"><span></span> Sélection</p><h2>Projets en lumière</h2></div>
            <p>Des projets construits autour de besoins réels, avec une attention particulière portée à la simplicité.</p>
          </div>
          <div className="project-list">
            {projects.map((project) => {
              const Card = project.href ? 'a' : 'article'
              return (
              <Card className={`project-card ${project.tone}`} key={project.title} href={project.href} target={project.href ? '_blank' : undefined} rel={project.href ? 'noreferrer' : undefined}>
                <div className="project-meta"><span>{project.number}</span><span>{project.type}</span></div>
                <div className="project-content">
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                </div>
                <div className="project-bottom">
                  <div className="tags">{project.tags.map(tag => <span key={tag}>{tag}</span>)}</div>
                  <span className="project-arrow"><ExternalLink size={20}/></span>
                </div>
              </Card>
            )})}
          </div>
          <article className="case-study">
            <div className="case-intro">
              <p className="eyebrow"><span></span> Étude de cas</p>
              <h3>Yuna’s Shop CRM</h3>
              <p>Une application métier créée à partir d’un besoin réel : remplacer les informations dispersées et les calculs manuels par un seul espace de travail fiable.</p>
              <a className="button primary" href="https://yuna-shop-app.vercel.app/" target="_blank" rel="noreferrer">Voir l’application <ArrowUpRight size={18}/></a>
            </div>
            <div className="case-details">
              <div><strong>Le problème</strong><p>Suivre chaque cliente, commande, article, paiement et arrivage sans perdre de temps ni d’argent.</p></div>
              <div><strong>La solution</strong><p>Un CRM centralisé avec calculs financiers, statuts, recherche et historique opérationnel.</p></div>
              <div className="feature-block"><strong>Fonctionnalités clés</strong><ul><li>Clients et commandes</li><li>Arrivages et pesée</li><li>Prix et rentabilité</li><li>Finances et achats</li></ul></div>
              <div><strong>Stack</strong><p>React · Firebase · Tailwind CSS · Vercel</p></div>
            </div>
          </article>
          <div className="project-showcase" aria-label="Captures de l’application Yuna’s Shop CRM">
            <figure className="app-shot app-shot-main">
              <img src={yunaAnalyse} alt="Tableau d’analyse de Yuna’s Shop CRM avec chiffre d’affaires, marge et bénéfice" />
              <figcaption>Analyse de la rentabilité en temps réel</figcaption>
            </figure>
            <figure className="app-shot">
              <img src={yunaProduits} alt="Analyse des produits gagnants et de leur marge dans Yuna’s Shop CRM" />
              <figcaption>Produits gagnants et marges</figcaption>
            </figure>
            <figure className="app-shot app-shot-today">
              <img src={yunaAujourdhui} alt="Tableau opérationnel des tâches du jour dans Yuna’s Shop CRM" />
              <figcaption>Priorités opérationnelles du jour</figcaption>
            </figure>
          </div>
          <article className="case-study shopflow-study">
            <div className="case-intro">
              <p className="eyebrow"><span></span> Étude de cas B2B</p>
              <h3>ShopFlow DZ</h3>
              <p>Un SaaS mobile-first pensé pour les petits commerces algériens qui vendent sur les réseaux sociaux et veulent quitter le cahier ou Excel.</p>
              <a className="button primary" href="https://shopflow-dz.vercel.app/" target="_blank" rel="noreferrer">Tester l’application <ArrowUpRight size={18}/></a>
            </div>
            <div className="case-details">
              <div><strong>Le problème</strong><p>Les commandes, acomptes et livraisons sont dispersés entre messages, cahiers et tableaux.</p></div>
              <div><strong>La solution</strong><p>Un espace unique pour piloter les ventes et retrouver rapidement chaque information.</p></div>
              <div className="feature-block"><strong>Fonctionnalités clés</strong><ul><li>Commandes et paiements</li><li>Clientes et livraisons</li><li>Rapports et bénéfices</li><li>Assistant de vente IA</li></ul></div>
              <div><strong>Stack</strong><p>React · Firebase · Tailwind CSS · Vercel</p></div>
            </div>
          </article>
          <div className="project-showcase shopflow-showcase" aria-label="Captures de l’application ShopFlow DZ">
            <figure className="app-shot app-shot-main">
              <img src={shopflowAssistant} alt="Assistant de vente IA de ShopFlow DZ générant une description, un message WhatsApp et un post social" />
              <figcaption>Assistant de vente IA multicanal</figcaption>
            </figure>
            <figure className="app-shot">
              <img src={shopflowDashboard} alt="Tableau de bord ShopFlow DZ avec chiffre d’affaires, bénéfice, reste et charges" />
              <figcaption>Vue synthétique de l’activité</figcaption>
            </figure>
            <figure className="app-shot">
              <img src={shopflowCommandes} alt="Gestion et filtrage des commandes dans ShopFlow DZ" />
              <figcaption>Commandes, acomptes et statuts</figcaption>
            </figure>
          </div>
        </section>

        <section className="about section" id="apropos">
          <div className="about-number">02</div>
          <div className="about-copy">
            <p className="eyebrow"><span></span> À propos</p>
            <h2>La technique au service du concret.</h2>
            <p>Ingénieure en génie civil et technico-commerciale, je me suis tournée vers le développement web pour transformer des problèmes métier réels en outils simples et utiles. Cette double approche me permet de comprendre le besoin avant de penser à la technologie.</p>
            <div className="skills"><span>React</span><span>Firebase</span><span>Tailwind CSS</span><span>Vercel</span></div>
            <div className="about-highlights">
              <div><strong>Comprendre</strong><span>Observer le travail réel et identifier ce qui fait perdre du temps.</span></div>
              <div><strong>Simplifier</strong><span>Transformer un processus complexe en parcours clair et intuitif.</span></div>
              <div><strong>Construire</strong><span>Développer, tester et améliorer jusqu’à obtenir un outil utilisable.</span></div>
            </div>
          </div>
        </section>

        <section className="contact section" id="contact">
          <p className="eyebrow light"><span></span> Un projet en tête ?</p>
          <h2>Construisons quelque chose d’utile.</h2>
          <p>Site vitrine, interface ou idée à clarifier : échangeons simplement sur votre besoin.</p>
          <a className="button light-button" href="mailto:sara20ziane@gmail.com"><Mail size={18}/> sara20ziane@gmail.com</a>
        </section>
      </main>

      <footer><span>© 2026 Sara Ziane</span><span>Conçu avec attention à Alger.</span></footer>
    </div>
  )
}

createRoot(document.getElementById('root')).render(<React.StrictMode><App /></React.StrictMode>)
