import React from 'react'
import { createRoot } from 'react-dom/client'
import {
  ArrowUpRight,
  BriefcaseBusiness,
  Code2,
  Database,
  ExternalLink,
  Github,
  LayoutTemplate,
  Mail,
  Menu,
  PanelsTopLeft,
  Sparkles,
  X,
} from 'lucide-react'
import './styles.css'
import './case-study.css'
import './improvements.css'
import yunaAnalyse from './assets/yuna-analyse.png'
import yunaProduits from './assets/yuna-produits.png'
import yunaAujourdhui from './assets/yuna-aujourdhui.png'
import shopflowDashboard from './assets/shopflow-dashboard.png'
import shopflowCommandes from './assets/shopflow-commandes.png'
import shopflowAssistant from './assets/shopflow-assistant-ia.png'

const services = [
  {
    icon: LayoutTemplate,
    title: 'Site vitrine professionnel',
    description:
      'Un site clair et responsive pour présenter votre activité, rassurer vos prospects et faciliter la prise de contact.',
    details: ['Structure et contenu', 'Design mobile', 'Formulaire de contact'],
  },
  {
    icon: PanelsTopLeft,
    title: 'Landing page',
    description:
      'Une page ciblée pour lancer une offre, présenter un service ou transformer davantage de visiteurs en demandes.',
    details: ['Message commercial', 'Appel à l’action', 'Mise en ligne rapide'],
  },
  {
    icon: Database,
    title: 'Outil métier personnalisé',
    description:
      'Une interface adaptée à votre façon de travailler pour centraliser les informations et réduire les tâches manuelles.',
    details: ['Dashboard', 'Suivi opérationnel', 'Base de données'],
  },
]

const projects = [
  {
    number: '01',
    title: 'Yuna’s Shop',
    type: 'Application web de gestion',
    description:
      'Un outil métier conçu pour centraliser le suivi des commandes et des articles, sécuriser les calculs financiers et retrouver rapidement chaque information cliente.',
    tags: ['React', 'Firebase', 'Dashboard'],
    tone: 'yellow',
    href: 'https://yuna-shop-app.vercel.app/',
  },
  {
    number: '02',
    title: 'ShopFlow DZ',
    type: 'SaaS B2B · Version bêta',
    description:
      'Une application mobile-first pour centraliser commandes, acomptes, clientes, livraisons et bénéfices des commerces qui vendent sur Instagram, WhatsApp et Facebook.',
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
      <a className="skip-link" href="#contenu">
        Aller au contenu
      </a>

      <header className="nav-wrap">
        <a className="brand" href="#top" aria-label="Accueil Sara Ziane">
          SZ<span>.</span>
        </a>
        <button
          className="menu-button"
          onClick={() => setOpen(!open)}
          aria-label={open ? 'Fermer le menu' : 'Ouvrir le menu'}
          aria-expanded={open}
          aria-controls="navigation-principale"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
        <nav
          id="navigation-principale"
          className={open ? 'nav-links open' : 'nav-links'}
          aria-label="Navigation principale"
        >
          <a href="#services" onClick={close}>
            Services
          </a>
          <a href="#projets" onClick={close}>
            Projets
          </a>
          <a href="#apropos" onClick={close}>
            À propos
          </a>
          <a className="nav-cta" href="#contact" onClick={close}>
            Me contacter <ArrowUpRight size={16} />
          </a>
        </nav>
      </header>

      <main id="contenu">
        <section className="hero section" id="top">
          <div className="hero-copy">
            <p className="eyebrow">
              <span /> Développeuse web freelance · Alger
            </p>
            <div className="availability-pill">
              <span /> Disponible pour de nouveaux projets
            </div>
            <h1>
              Je transforme vos besoins en outils web <em>simples et utiles.</em>
            </h1>
            <p className="hero-text">
              Sites vitrines, landing pages et interfaces métier : je conçois des solutions modernes pour les petites
              entreprises et les commerces qui veulent gagner en clarté, en temps et en efficacité.
            </p>
            <div className="hero-actions">
              <a className="button primary" href="#services">
                Découvrir mes services <ArrowUpRight size={18} />
              </a>
              <a className="text-link" href="#projets">
                Voir mes réalisations <span>↗</span>
              </a>
            </div>
            <div className="hero-proof" aria-label="Compétences principales">
              <span>React</span>
              <span>Firebase</span>
              <span>Interfaces métier</span>
            </div>
          </div>

          <div className="hero-visual" aria-hidden="true">
            <div className="orbit orbit-one" />
            <div className="orbit orbit-two" />
            <div className="code-card">
              <div className="code-top">
                <span />
                <span />
                <span />
              </div>
              <pre>
                <code>
                  <b>const</b> projet = {'{'}
                  {`\n`} idée: <i>"utile"</i>,
                  {`\n`} design: <i>"humain"</i>,
                  {`\n`} résultat: <i>"concret"</i>
                  {`\n`}
                  {'}'}
                </code>
              </pre>
            </div>
            <div className="float-tag tag-one">
              <Sparkles size={16} /> Design clair
            </div>
            <div className="float-tag tag-two">
              <Code2 size={16} /> Code propre
            </div>
          </div>
        </section>

        <section className="services section" id="services">
          <div className="section-heading">
            <div>
              <p className="eyebrow">
                <span /> Mes services
              </p>
              <h2>Une solution adaptée à votre besoin.</h2>
            </div>
            <p>
              Je privilégie les projets utiles, simples à utiliser et pensés autour du fonctionnement réel de votre
              activité.
            </p>
          </div>

          <div className="service-grid">
            {services.map(({ icon: Icon, title, description, details }, index) => (
              <article className="service-card" key={title}>
                <div className="service-card-top">
                  <span className="service-number">0{index + 1}</span>
                  <span className="service-icon">
                    <Icon size={22} />
                  </span>
                </div>
                <h3>{title}</h3>
                <p>{description}</p>
                <ul>
                  {details.map((detail) => (
                    <li key={detail}>{detail}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>

          <div className="service-banner">
            <BriefcaseBusiness size={22} />
            <p>
              <strong>Vous avez seulement une idée ou un besoin mal défini ?</strong>
              <span> Je peux aussi vous aider à clarifier la solution avant de commencer le développement.</span>
            </p>
            <a href="#contact">
              Parlons-en <ArrowUpRight size={17} />
            </a>
          </div>
        </section>

        <section className="projects section" id="projets">
          <div className="section-heading">
            <div>
              <p className="eyebrow">
                <span /> Projets réels
              </p>
              <h2>Des outils conçus pour être utilisés.</h2>
            </div>
            <p>
              Chaque projet part d’un problème concret et transforme un processus dispersé en expérience plus simple.
            </p>
          </div>

          <div className="project-list">
            {projects.map((project) => (
              <a
                className={`project-card ${project.tone}`}
                key={project.title}
                href={project.href}
                target="_blank"
                rel="noreferrer"
                aria-label={`Ouvrir ${project.title} dans un nouvel onglet`}
              >
                <div className="project-meta">
                  <span>{project.number}</span>
                  <span>{project.type}</span>
                </div>
                <div className="project-content">
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                </div>
                <div className="project-bottom">
                  <div className="tags">
                    {project.tags.map((tag) => (
                      <span key={tag}>{tag}</span>
                    ))}
                  </div>
                  <span className="project-arrow">
                    <ExternalLink size={20} />
                  </span>
                </div>
              </a>
            ))}
          </div>

          <article className="case-study">
            <div className="case-intro">
              <p className="eyebrow">
                <span /> Étude de cas
              </p>
              <h3>Yuna’s Shop CRM</h3>
              <p>
                Une application métier créée à partir d’un besoin réel : remplacer les informations dispersées et les
                calculs manuels par un seul espace de travail fiable.
              </p>
              <a
                className="button primary"
                href="https://yuna-shop-app.vercel.app/"
                target="_blank"
                rel="noreferrer"
              >
                Voir l’application <ArrowUpRight size={18} />
              </a>
            </div>
            <div className="case-details">
              <div>
                <strong>Le problème</strong>
                <p>Suivre chaque cliente, commande, article, paiement et arrivage sans perdre de temps ni d’argent.</p>
              </div>
              <div>
                <strong>La solution</strong>
                <p>Un CRM centralisé avec calculs financiers, statuts, recherche et historique opérationnel.</p>
              </div>
              <div className="feature-block">
                <strong>Fonctionnalités clés</strong>
                <ul>
                  <li>Clients et commandes</li>
                  <li>Arrivages et pesée</li>
                  <li>Prix et rentabilité</li>
                  <li>Finances et achats</li>
                </ul>
              </div>
              <div>
                <strong>Stack</strong>
                <p>React · Firebase · Tailwind CSS · Vercel</p>
              </div>
            </div>
          </article>

          <div className="project-showcase" aria-label="Captures de l’application Yuna’s Shop CRM">
            <figure className="app-shot app-shot-main">
              <img
                src={yunaAnalyse}
                alt="Tableau d’analyse de Yuna’s Shop CRM avec chiffre d’affaires, marge et bénéfice"
                loading="lazy"
              />
              <figcaption>Analyse de la rentabilité en temps réel</figcaption>
            </figure>
            <figure className="app-shot">
              <img
                src={yunaProduits}
                alt="Analyse des produits gagnants et de leur marge dans Yuna’s Shop CRM"
                loading="lazy"
              />
              <figcaption>Produits gagnants et marges</figcaption>
            </figure>
            <figure className="app-shot app-shot-today">
              <img
                src={yunaAujourdhui}
                alt="Tableau opérationnel des tâches du jour dans Yuna’s Shop CRM"
                loading="lazy"
              />
              <figcaption>Priorités opérationnelles du jour</figcaption>
            </figure>
          </div>

          <article className="case-study shopflow-study">
            <div className="case-intro">
              <p className="eyebrow">
                <span /> Étude de cas B2B
              </p>
              <h3>ShopFlow DZ</h3>
              <p>
                Un SaaS mobile-first pensé pour les petits commerces algériens qui vendent sur les réseaux sociaux et
                veulent quitter le cahier ou Excel.
              </p>
              <a
                className="button primary"
                href="https://shopflow-dz.vercel.app/"
                target="_blank"
                rel="noreferrer"
              >
                Tester l’application <ArrowUpRight size={18} />
              </a>
            </div>
            <div className="case-details">
              <div>
                <strong>Le problème</strong>
                <p>Les commandes, acomptes et livraisons sont dispersés entre messages, cahiers et tableaux.</p>
              </div>
              <div>
                <strong>La solution</strong>
                <p>Un espace unique pour piloter les ventes et retrouver rapidement chaque information.</p>
              </div>
              <div className="feature-block">
                <strong>Fonctionnalités clés</strong>
                <ul>
                  <li>Commandes et paiements</li>
                  <li>Clientes et livraisons</li>
                  <li>Rapports et bénéfices</li>
                  <li>Assistant de vente IA</li>
                </ul>
              </div>
              <div>
                <strong>Stack</strong>
                <p>React · Firebase · Tailwind CSS · Vercel</p>
              </div>
            </div>
          </article>

          <div className="project-showcase shopflow-showcase" aria-label="Captures de l’application ShopFlow DZ">
            <figure className="app-shot app-shot-main">
              <img
                src={shopflowAssistant}
                alt="Assistant de vente IA de ShopFlow DZ générant une description, un message WhatsApp et un post social"
                loading="lazy"
              />
              <figcaption>Assistant de vente IA multicanal</figcaption>
            </figure>
            <figure className="app-shot">
              <img
                src={shopflowDashboard}
                alt="Tableau de bord ShopFlow DZ avec chiffre d’affaires, bénéfice, reste et charges"
                loading="lazy"
              />
              <figcaption>Vue synthétique de l’activité</figcaption>
            </figure>
            <figure className="app-shot">
              <img
                src={shopflowCommandes}
                alt="Gestion et filtrage des commandes dans ShopFlow DZ"
                loading="lazy"
              />
              <figcaption>Commandes, acomptes et statuts</figcaption>
            </figure>
          </div>
        </section>

        <section className="about section" id="apropos">
          <div className="about-number">03</div>
          <div className="about-copy">
            <p className="eyebrow">
              <span /> À propos
            </p>
            <h2>La technique au service du concret.</h2>
            <p>
              Ingénieure en génie civil et technico-commerciale, je me suis tournée vers le développement web pour
              transformer des problèmes métier réels en outils simples et utiles. Cette double approche me permet de
              comprendre le besoin avant de penser à la technologie.
            </p>
            <div className="skills">
              <span>React</span>
              <span>Firebase</span>
              <span>Tailwind CSS</span>
              <span>Vercel</span>
            </div>
            <div className="about-highlights">
              <div>
                <strong>Comprendre</strong>
                <span>Observer le travail réel et identifier ce qui fait perdre du temps.</span>
              </div>
              <div>
                <strong>Simplifier</strong>
                <span>Transformer un processus complexe en parcours clair et intuitif.</span>
              </div>
              <div>
                <strong>Construire</strong>
                <span>Développer, tester et améliorer jusqu’à obtenir un outil utilisable.</span>
              </div>
            </div>
          </div>
        </section>

        <section className="contact section" id="contact">
          <div className="contact-copy">
            <p className="eyebrow light">
              <span /> Un projet en tête ?
            </p>
            <h2>Parlez-moi de votre besoin, même s’il n’est pas encore parfaitement défini.</h2>
            <p>
              Site vitrine, landing page ou outil de gestion : expliquez-moi simplement votre activité et ce que vous
              souhaitez améliorer.
            </p>
          </div>
          <div className="contact-actions">
            <a className="button light-button" href="mailto:sara20ziane@gmail.com">
              <Mail size={18} /> Écrire à Sara
            </a>
            <a
              className="button outline-button"
              href="https://github.com/sara20ziane"
              target="_blank"
              rel="noreferrer"
            >
              <Github size={18} /> Voir mon GitHub
            </a>
            <small>Disponible à Alger et à distance.</small>
          </div>
        </section>
      </main>

      <footer>
        <span>© 2026 Sara Ziane</span>
        <a href="https://github.com/sara20ziane" target="_blank" rel="noreferrer">
          GitHub <ExternalLink size={13} />
        </a>
        <span>Conçu avec attention à Alger.</span>
      </footer>
    </div>
  )
}

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
