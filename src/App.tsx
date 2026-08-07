import './App.css'

type IconName = 'arrow' | 'download' | 'phone' | 'pin'

const Icon = ({ name }: { name: IconName }) => {
  const paths = {
    arrow: <path d="M5 12h14m-5-5 5 5-5 5" />,
    download: <path d="M12 3v12m0 0 4-4m-4 4-4-4M5 20h14" />,
    phone: <path d="M7.5 3.5 10 8 7.8 9.7a15 15 0 0 0 6.5 6.5L16 14l4.5 2.5v3a2 2 0 0 1-2 2C9.7 21.5 2.5 14.3 2.5 5.5a2 2 0 0 1 2-2h3Z" />,
    pin: <><path d="M20 10c0 5-8 12-8 12S4 15 4 10a8 8 0 1 1 16 0Z" /><circle cx="12" cy="10" r="2.5" /></>,
  }

  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      {paths[name]}
    </svg>
  )
}

const Blueprint = () => (
  <svg className="blueprint" viewBox="0 0 720 760" aria-hidden="true">
    <defs>
      <pattern id="grid" width="24" height="24" patternUnits="userSpaceOnUse">
        <path d="M24 0H0V24" fill="none" stroke="currentColor" strokeWidth=".55" />
      </pattern>
      <linearGradient id="fade" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0" stopColor="white" stopOpacity=".95" />
        <stop offset=".7" stopColor="white" stopOpacity=".45" />
        <stop offset="1" stopColor="white" stopOpacity=".08" />
      </linearGradient>
      <mask id="blueprintFade">
        <rect width="720" height="760" fill="url(#fade)" />
      </mask>
    </defs>
    <g mask="url(#blueprintFade)">
      <rect width="720" height="760" fill="url(#grid)" opacity=".32" />
      <g fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M76 648V212l194-112 374 216v330L451 758Z" />
        <path d="m76 212 375 217 193-113M451 429v329M451 429 270 535v-435M270 535 76 648" />
        <path d="M122 295 269 210l329 190v164l-147 86-329-190Z" />
        <path d="m122 460 329-190 147 85M451 270v380M269 210l-147-85M598 400l65 38M181 426v-81l88-51M511 398v-74l66 38v74Z" />
        <path d="M304 553v-89l86-50 1 88M187 508v-54l48-28v54M491 586v-58l56-32v58" />
        <path d="m270 100 193-111 374 216M644 316l193-111v329l-193 112" opacity=".45" />
      </g>
      <g fill="currentColor">
        <circle cx="76" cy="212" r="5" />
        <circle cx="270" cy="100" r="5" />
        <circle cx="451" cy="429" r="5" />
        <circle cx="644" cy="316" r="5" />
      </g>
      <g fontSize="15" fontFamily="monospace" fill="currentColor">
        <text x="86" y="198">EIXO 01</text>
        <text x="462" y="418">EIXO 06</text>
        <text x="573" y="300">+6.20</text>
        <text x="281" y="83">NÍVEL 02</text>
      </g>
    </g>
  </svg>
)

const ProjectGraphic = ({ variant }: { variant: 'health' | 'housing' | 'heritage' }) => {
  if (variant === 'health') {
    return (
      <svg viewBox="0 0 620 420" aria-hidden="true">
        <rect x="55" y="65" width="510" height="290" rx="145" fill="none" />
        <path d="M174 65v290M310 65v290M446 65v290M55 210h510" />
        <circle cx="310" cy="210" r="56" />
        <path d="M310 181v58M281 210h58" />
      </svg>
    )
  }

  if (variant === 'housing') {
    return (
      <svg viewBox="0 0 620 420" aria-hidden="true">
        <path d="m80 230 125-95 125 95v125H80ZM290 210l125-95 125 95v145H290Z" />
        <path d="M125 355v-76h55v76M350 355v-85h72v85M460 258h42v42h-42ZM118 242h46v35h-46Z" />
      </svg>
    )
  }

  return (
    <svg viewBox="0 0 620 420" aria-hidden="true">
      <path d="M62 352h496M95 352V173h430v179M70 173h480L310 64Z" />
      <path d="M135 173v179M205 173v179M275 173v179M345 173v179M415 173v179M485 173v179" />
      <path d="M78 150h464M118 128h384M160 106h300" />
    </svg>
  )
}

const expertise = [
  {
    number: '01',
    title: 'Arquitetura hospitalar',
    text: 'Projetos multidisciplinares para ambientes de saúde, da concepção ao executivo, com atenção aos fluxos, normas e experiência de uso.',
  },
  {
    number: '02',
    title: 'Compatibilização',
    text: 'Coordenação integrada entre arquitetura, estrutura e instalações para antecipar conflitos e dar clareza à execução.',
  },
  {
    number: '03',
    title: 'Gestão de projetos',
    text: 'Viabilidade, documentação, cronograma, orçamento e acompanhamento técnico com visão completa do processo.',
  },
]

const experiences = [
  {
    period: '2024 — 2025',
    role: 'Arquiteta Pleno',
    company: 'CDHU',
    detail: 'Viabilidade técnica e gestão da documentação de empreendimentos habitacionais de interesse social.',
  },
  {
    period: '2020 — 2023',
    role: 'Arquiteta Pleno',
    company: 'SEINFRA Aracati',
    detail: 'Coordenação de projetos multidisciplinares de saúde, cultura, educação e espaço público.',
  },
  {
    period: '2015 — 2018',
    role: 'Arquiteta Pleno',
    company: 'Magis Incorporações',
    detail: 'Compatibilização e desenvolvimento de empreendimentos residenciais e comerciais de médio e alto padrão.',
  },
  {
    period: '2014 — 2015',
    role: 'Coordenadora de Projetos',
    company: 'JV Engenharia',
    detail: 'Coordenação técnica, contratos, processos e entregas de projetos residenciais.',
  },
]

function App() {
  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#inicio" aria-label="Juliana Romero, início">
          <span>JR</span>
          <span>Arquitetura</span>
        </a>
        <nav aria-label="Navegação principal">
          <a href="#especialidades">Especialidades</a>
          <a href="#projetos">Projetos</a>
          <a href="#trajetoria">Trajetória</a>
        </nav>
        <a className="header-contact" href="#contato">
          Vamos conversar <Icon name="arrow" />
        </a>
      </header>

      <section className="hero-section" id="inicio">
        <div className="hero-copy">
          <div className="eyebrow">
            <span className="pulse" />
            Arquiteta &amp; coordenadora de projetos
          </div>
          <h1>
            Arquitetura que alinha técnica, <em>cuidado</em> e execução.
          </h1>
          <p className="hero-intro">
            Há 18 anos transformando complexidade em projetos claros, coordenados e
            preparados para sair do papel — com especialidade em arquitetura hospitalar.
          </p>
          <div className="hero-actions">
            <a className="button button-primary" href="#projetos">
              Conheça meu trabalho <Icon name="arrow" />
            </a>
            <a
              className="button button-ghost"
              href="mailto:julianarquiteta@gmail.com?subject=Solicitação%20de%20currículo"
            >
              Solicitar currículo <Icon name="download" />
            </a>
          </div>
        </div>
        <div className="hero-visual">
          <Blueprint />
          <div className="hero-stat">
            <strong>18+</strong>
            <span>anos de experiência</span>
          </div>
          <div className="hero-location">
            <span>Base</span>
            <strong>São Paulo — SP</strong>
          </div>
          <div className="hero-caption">Precisão técnica. Visão integrada.</div>
        </div>
      </section>

      <div className="ticker" aria-hidden="true">
        <div>
          <span>Arquitetura hospitalar</span><i />
          <span>Compatibilização de projetos</span><i />
          <span>Gestão técnica</span><i />
          <span>Revit &amp; BIM</span><i />
          <span>Arquitetura hospitalar</span><i />
          <span>Compatibilização de projetos</span><i />
        </div>
      </div>

      <section className="section expertise-section" id="especialidades">
        <div className="section-heading">
          <span className="section-index">01 / Especialidades</span>
          <h2>
            Visão ampla.<br />
            Atuação <em>especializada.</em>
          </h2>
          <p>
            Reúno repertório de diferentes escalas e tipologias para tomar decisões
            mais consistentes em projetos de alta complexidade.
          </p>
        </div>
        <div className="expertise-grid">
          {expertise.map((item) => (
            <article className="expertise-card" key={item.number}>
              <span>{item.number}</span>
              <div className="card-line" />
              <h3>{item.title}</h3>
              <p>{item.text}</p>
              <div className={`expertise-symbol symbol-${item.number}`}>
                <span />
                <span />
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="projects-section" id="projetos">
        <div className="projects-heading">
          <span className="section-index">02 / Projetos em foco</span>
          <h2>Experiência que atravessa escalas e transforma contextos.</h2>
        </div>

        <article className="project project-health">
          <div className="project-visual">
            <ProjectGraphic variant="health" />
            <span className="project-code">SAÚDE / 01</span>
          </div>
          <div className="project-copy">
            <span>SEINFRA Aracati · 2020—2023</span>
            <h3>Infraestrutura de saúde</h3>
            <p>
              Desenvolvimento e coordenação de projetos para UTI adulto, Centro de
              Imagem e Centro Cirúrgico, conciliando disciplinas, exigências sanitárias
              e suporte à obra.
            </p>
            <ul>
              <li>Arquitetura hospitalar</li>
              <li>Coordenação multidisciplinar</li>
              <li>Projeto básico e executivo</li>
            </ul>
          </div>
        </article>

        <article className="project project-reverse">
          <div className="project-visual">
            <ProjectGraphic variant="housing" />
            <span className="project-code">HABITAÇÃO / 02</span>
          </div>
          <div className="project-copy">
            <span>CDHU · 2024—2025</span>
            <h3>Habitação de interesse social</h3>
            <p>
              Análise de viabilidade técnica e gerenciamento da documentação apresentada
              por incorporadores para contratação de empreendimentos habitacionais no
              estado de São Paulo.
            </p>
            <ul>
              <li>Viabilidade técnica</li>
              <li>Gestão documental</li>
              <li>Interface com incorporadores</li>
            </ul>
          </div>
        </article>

        <article className="project project-heritage">
          <div className="project-visual">
            <ProjectGraphic variant="heritage" />
            <span className="project-code">PATRIMÔNIO / 03</span>
          </div>
          <div className="project-copy">
            <span>Opera Prima · Menção honrosa · 2008</span>
            <h3>Antiga Fábrica São José</h3>
            <p>
              Proposta de requalificação da antiga fábrica para uso habitacional,
              reconhecida no concurso nacional Opera Prima.
            </p>
            <ul>
              <li>Requalificação</li>
              <li>Habitação</li>
              <li>Patrimônio industrial</li>
            </ul>
          </div>
        </article>
      </section>

      <section className="section journey-section" id="trajetoria">
        <div className="journey-intro">
          <span className="section-index">03 / Trajetória</span>
          <h2>Da concepção ao acompanhamento.</h2>
          <p>
            Uma carreira construída entre incorporadoras, construtoras e setor público,
            conectando intenção de projeto, precisão documental e viabilidade real.
          </p>
          <div className="tool-cloud" aria-label="Principais ferramentas">
            {['Revit', 'AutoCAD', 'SketchUp', 'Navisworks', 'V-Ray', 'MS Project', 'Autodoc', 'Informacon'].map((tool) => (
              <span key={tool}>{tool}</span>
            ))}
          </div>
        </div>
        <div className="timeline">
          {experiences.map((experience) => (
            <article key={`${experience.company}-${experience.period}`}>
              <span className="timeline-period">{experience.period}</span>
              <div>
                <h3>{experience.role}</h3>
                <strong>{experience.company}</strong>
                <p>{experience.detail}</p>
              </div>
            </article>
          ))}
          <div className="earlier-work">
            <span>2007 — 2014</span>
            <p>JV Engenharia · Cézar Fiuza · CRD Engenharia</p>
          </div>
        </div>
      </section>

      <section className="credentials-section">
        <div>
          <span className="section-index">Formação</span>
          <h3>Mestre em Ciências da Cidade</h3>
          <p>UNIFOR · 2018—2019</p>
          <h3>Arquitetura e Urbanismo</h3>
          <p>UNIFOR · 2001—2007</p>
        </div>
        <div>
          <span className="section-index">Especialização</span>
          <h3>Pós-graduação em Iluminação e Design de Interiores</h3>
          <p>IPOG · 2011—2015</p>
          <h3>Arquitetura para a Saúde</h3>
          <p>TAPS · 2022—2023</p>
        </div>
        <div>
          <span className="section-index">Idiomas &amp; tecnologia</span>
          <h3>Inglês fluente · Espanhol básico</h3>
          <p>Comunicação e repertório internacional</p>
          <h3>Revit profissional</h3>
          <p>Formação continuada · 2023—2024</p>
        </div>
      </section>

      <section className="contact-section" id="contato">
        <span className="section-index">04 / Contato</span>
        <h2>
          Vamos transformar complexidade em um projeto <em>bem resolvido?</em>
        </h2>
        <a className="contact-email" href="mailto:julianarquiteta@gmail.com">
          julianarquiteta@gmail.com <Icon name="arrow" />
        </a>
        <div className="contact-details">
          <a href="tel:+5585999090952"><Icon name="phone" /> +55 85 99909-0952</a>
          <span><Icon name="pin" /> Santo Amaro, São Paulo — SP</span>
        </div>
      </section>

      <footer>
        <span>© {new Date().getFullYear()} Juliana Romero</span>
        <span>Arquitetura com propósito e precisão.</span>
        <a href="#inicio">Voltar ao topo ↑</a>
      </footer>
    </main>
  )
}

export default App
