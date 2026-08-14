import { useEffect, useState } from 'react'
import heroIntensiveCare from './assets/juliana-hero-uti.webp'
import healthArchitecture from './assets/juliana-project-health.webp'
import housingArchitecture from './assets/juliana-project-housing.webp'
import heritageArchitecture from './assets/juliana-project-heritage.webp'
import './App.css'

type IconName = 'arrow' | 'award' | 'clock' | 'layers' | 'mark' | 'scan'

const Icon = ({ name }: { name: IconName }) => {
  const paths = {
    arrow: <path d="M5 12h14m-5-5 5 5-5 5" />,
    award: <><circle cx="12" cy="8" r="5" /><path d="m9 13-1 8 4-2 4 2-1-8" /></>,
    clock: <><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 2" /></>,
    layers: <><path d="m12 3 9 5-9 5-9-5 9-5Z" /><path d="m3 12 9 5 9-5M3 16l9 5 9-5" /></>,
    mark: <><circle cx="12" cy="12" r="9" /><path d="M12 7v10M7 12h10" /></>,
    scan: <><path d="M8 3H3v5M16 3h5v5M8 21H3v-5M16 21h5v-5" /><circle cx="12" cy="12" r="3" /></>,
  }

  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      {paths[name]}
    </svg>
  )
}

const stats = [
  { value: '18', label: 'anos de experiência', icon: 'clock' as const },
  { value: '08', label: 'ferramentas principais', icon: 'layers' as const },
  { value: '01', label: 'menção honrosa', icon: 'award' as const },
]

const projects = [
  {
    number: '01',
    category: 'Arquitetura hospitalar',
    title: 'Infraestrutura de saúde',
    description: 'Projetos para UTI adulto, Centro de Imagem e Centro Cirúrgico, da concepção ao executivo, conciliando disciplinas, exigências sanitárias e suporte técnico à obra.',
    meta: 'SEINFRA · 2020—2023',
    image: healthArchitecture,
    alt: 'Imagem conceitual de corredor hospitalar contemporâneo',
  },
  {
    number: '02',
    category: 'Habitação',
    title: 'Interesse social',
    description: 'Análise de viabilidade técnica e gerenciamento da documentação de empreendimentos habitacionais para contratação no estado de São Paulo.',
    meta: 'CDHU · 2024—2025',
    image: housingArchitecture,
    alt: 'Imagem conceitual de conjunto habitacional contemporâneo',
  },
  {
    number: '03',
    category: 'Patrimônio',
    title: 'Fábrica São José',
    description: 'Proposta de requalificação da antiga fábrica para uso habitacional, reconhecida com menção honrosa no concurso nacional Opera Prima.',
    meta: 'Opera Prima · 2008',
    image: heritageArchitecture,
    alt: 'Imagem conceitual de fábrica industrial requalificada',
  },
]

const experiences = [
  ['2023—Atual', 'Autônoma', 'Arquiteta'],
  ['2024—2025', 'CDHU', 'Analista de Projetos'],
  ['2020—2023', 'SEINFRA', 'Analista de Projetos'],
  ['2015—2018', 'Magis Incorporações', 'Analista de Projetos'],
  ['2014—2015', 'JVS Engenharia', 'Coordenadora de Projetos'],
  ['2013—2014', 'JVS Engenharia', 'Analista de Projetos'],
  ['2011—2012', 'Escritório Cézar Fiuza', 'Arquiteta Projetista'],
  ['2007—2011', 'CRD Engenharia', 'Arquiteta Orçamentista'],
]

const heroSlides = [
  { src: heroIntensiveCare, alt: 'Unidade de terapia intensiva com leitos modulares e posto de enfermagem' },
  { src: healthArchitecture, alt: 'Interior hospitalar contemporâneo' },
  { src: heritageArchitecture, alt: 'Edifício industrial requalificado' },
]

function App() {
  const [currentSlide, setCurrentSlide] = useState(0)

  useEffect(() => {
    const timer = window.setInterval(() => {
      setCurrentSlide((slide) => (slide + 1) % heroSlides.length)
    }, 5500)

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add('active')
        })
      },
      { threshold: 0.14 },
    )

    document.querySelectorAll('.reveal').forEach((element) => observer.observe(element))

    return () => {
      window.clearInterval(timer)
      observer.disconnect()
    }
  }, [])

  return (
    <main className="page-shell">
      <div className="grid-guides" aria-hidden="true">
        <span />
        <span />
      </div>

      <header className="site-header">
        <nav aria-label="Navegação principal">
          <a href="#projetos">Trabalhos</a>
          <a href="#trajetoria">Trajetória</a>
        </nav>
        <a className="brand" href="#inicio" aria-label="Juliana Romero, início">
          <Icon name="mark" />
          <span>Juliana.Romero</span>
        </a>
        <nav aria-label="Navegação secundária">
          <a href="#sobre">Sobre</a>
          <a href="#contato">Contato</a>
        </nav>
      </header>

      <section className="hero" id="inicio">
        <div className="hero-media">
          {heroSlides.map((slide, index) => (
            <img
              className={index === currentSlide ? 'active' : ''}
              src={slide.src}
              alt={slide.alt}
              key={slide.src}
            />
          ))}
          <div className="hero-shade" />
          <div className="hero-title">
            <h1>
              <span>Juliana</span>
              <span>Romero</span>
            </h1>
            <div className="hero-badges">
              <span>Arquitetura</span>
              <span>Coordenação</span>
            </div>
          </div>
          <span className="concept-label">Imagens conceituais</span>
        </div>

        <aside className="hero-stats" aria-label="Resumo profissional">
          {stats.map((stat) => (
            <article key={stat.label}>
              <Icon name={stat.icon} />
              <div>
                <strong>{stat.value}</strong>
                <span>{stat.label}</span>
              </div>
            </article>
          ))}
        </aside>
      </section>

      <div className="marquee" aria-hidden="true">
        <div>
          <span>Base em São Paulo</span><i>•</i>
          <span>Arquitetura hospitalar</span><i>•</i>
          <span>Compatibilização de projetos</span><i>•</i>
          <span>Gestão técnica</span><i>•</i>
          <span>Base em São Paulo</span><i>•</i>
          <span>Arquitetura hospitalar</span><i>•</i>
          <span>Compatibilização de projetos</span><i>•</i>
        </div>
      </div>

      <section className="type-banner reveal">
        <div>
          <h2>Arquitetura</h2>
          <a href="#sobre" aria-label="Ir para apresentação">
            <Icon name="arrow" />
          </a>
          <h2>de alta</h2>
        </div>
        <h2>complexidade</h2>
        <Icon name="mark" />
      </section>

      <section className="intro" id="sobre">
        <aside className="skills reveal">
          <Icon name="scan" />
          <div>
            <h2>Competências principais</h2>
            {['Arquitetura hospitalar', 'Compatibilização', 'Gestão de projetos'].map((skill) => (
              <div className="skill-row" key={skill}>
                <span>{skill}</span>
                <Icon name="mark" />
              </div>
            ))}
          </div>
        </aside>

        <div className="bio reveal">
          <h2>
            Transformo complexidade técnica em projetos claros, coordenados e preparados
            para sair do papel. <span>Minha atuação conecta cuidado, viabilidade e precisão
            em todas as etapas do processo.</span>
          </h2>
          <div>
            <a className="primary-button" href="/Curriculo-Juliana-Romero.pdf" download>
              Baixar currículo <Icon name="arrow" />
            </a>
            <a className="text-link" href="#projetos">Ver projetos</a>
          </div>
        </div>
      </section>

      <section className="work" id="projetos">
        <div className="section-title reveal">
          <div>
            <span>01 / Trabalhos selecionados</span>
            <h2>Experiência em foco</h2>
          </div>
          <Icon name="arrow" />
        </div>

        <div className="project-list">
          {projects.map((project) => (
            <article className="project-row" key={project.number}>
              <div className="project-copy reveal">
                <div className="project-category">
                  <span>{project.number}</span>
                  <i />
                  <strong>{project.category}</strong>
                </div>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <small>{project.meta}</small>
              </div>
              <div className="project-image">
                <img src={project.image} alt={project.alt} />
                <span>Imagem conceitual</span>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="career" id="trajetoria">
        <aside className="career-title reveal">
          <div>
            <span>02 / Percurso</span>
            <h2>Trajetória</h2>
          </div>
          <div>
            <Icon name="layers" />
            <span>[2007—Atual]</span>
          </div>
        </aside>

        <div className="career-summary reveal">
          <p>Uma carreira construída entre incorporadoras, construtoras, setor público e projetos autônomos, conectando concepção, documentação, orçamento e acompanhamento de obra.</p>
        </div>

        <div className="experience-list reveal">
          {experiences.map(([period, company, role]) => (
            <article key={`${period}-${company}`}>
              <span>{period}</span>
              <div>
                <strong>{company}</strong>
                <p>{role}</p>
              </div>
              <Icon name="arrow" />
            </article>
          ))}
        </div>
      </section>

      <section className="image-strip" aria-label="Galeria conceitual">
        {[healthArchitecture, heritageArchitecture, heroIntensiveCare, housingArchitecture].map((image, index) => (
          <img src={image} alt="" key={image} style={{ objectPosition: `${40 + index * 10}% center` }} />
        ))}
      </section>

      <section className="credentials">
        <div className="credentials-label reveal">
          <span>Formação &amp; repertório</span>
        </div>
        <div className="credentials-grid">
          <article className="reveal">
            <span>Formação</span>
            <h3>Mestre em Ciências da Cidade</h3>
            <p>UNIFOR · 2018—2019</p>
            <h3>Arquitetura e Urbanismo</h3>
            <p>UNIFOR · 2001—2007</p>
          </article>
          <article className="reveal">
            <span>Formação complementar</span>
            <h3>Arquitetura para a Saúde</h3>
            <p>TAPS · 2022—2023</p>
            <h3>Iluminação e Design de Interiores</h3>
            <p>IPOG · 2011—2015</p>
          </article>
          <article className="reveal">
            <span>Ferramentas</span>
            <h3>Revit · AutoCAD · Navisworks</h3>
            <p>SketchUp · MS Project · AutoDoc</p>
            <h3>Inglês avançado</h3>
            <p>Espanhol básico</p>
          </article>
        </div>
      </section>

      <footer id="contato">
        <div className="footer-cta reveal">
          <h2>Vamos projetar algo<br />relevante juntos.</h2>
          <a href="mailto:julianarquitetura@gmail.com">Iniciar uma conversa</a>
        </div>
        <div className="footer-divider" />
        <div className="footer-grid">
          <div>
            <div className="footer-brand"><Icon name="mark" /> Juliana.Romero</div>
            <p>Arquitetura de alta complexidade com precisão técnica e visão integrada.</p>
          </div>
          <div>
            <span>Contato</span>
            <a href="mailto:julianarquitetura@gmail.com">julianarquitetura@gmail.com</a>
            <a href="tel:+5585999090952">+55 85 99909-0952</a>
          </div>
          <div>
            <span>Localização</span>
            <p>Santo Amaro<br />São Paulo — SP</p>
          </div>
          <div className="copyright">
            <Icon name="mark" />
            <p>© {new Date().getFullYear()} Juliana Romero<br />Todos os direitos reservados.</p>
          </div>
        </div>
        <div className="footer-wordmark">JULIANA.ROMERO</div>
      </footer>
    </main>
  )
}

export default App
