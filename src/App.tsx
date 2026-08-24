import { useEffect, useState } from 'react'
import heroIntensiveCare from './assets/juliana-hero-uti.webp'
import healthArchitecture from './assets/juliana-project-health.webp'
import heritageArchitecture from './assets/juliana-project-heritage.webp'
import julianaPortrait from './assets/juliana-retrato.webp'
import utiPlan from './assets/projeto-uti-planta-tratada-v2.webp'
import utiPerspective from './assets/projeto-uti-perspectiva.webp'
import utiIsolation from './assets/projeto-uti-isolamento-tratada-v4.webp'
import imagingPlan from './assets/projeto-imagem-planta-aprovada.webp'
import imagingPerspective from './assets/projeto-imagem-perspectiva.webp'
import residenceGJ from './assets/projeto-residencia-gj.webp'
import livingMI from './assets/projeto-sala-mi.webp'
import momaGourmet from './assets/projeto-moma-gourmet.webp'
import momaSite from './assets/projeto-moma-obra.webp'
import momaLounge from './assets/projeto-moma-estar.webp'
import aquarelaAerial from './assets/projeto-aquarela-aerea.webp'
import aquarelaMeeting from './assets/projeto-aquarela-reuniao.webp'
import pracaPlan from './assets/projeto-praca-planta-tratada-v2.webp'
import pracaElevation from './assets/projeto-praca-elevacao.webp'
import libraryProposal from './assets/projeto-biblioteca-proposta-tratada-v2.webp'
import libraryDemolition from './assets/projeto-biblioteca-demolir-tratada-v2.webp'
import libraryFacade from './assets/projeto-biblioteca-fachada.webp'
import './App.css'

type IconName = 'arrow' | 'award' | 'clock' | 'close' | 'layers' | 'mark' | 'scan'

const Icon = ({ name }: { name: IconName }) => {
  const paths = {
    arrow: <path d="M5 12h14m-5-5 5 5-5 5" />,
    award: <><circle cx="12" cy="8" r="5" /><path d="m9 13-1 8 4-2 4 2-1-8" /></>,
    clock: <><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 2" /></>,
    close: <path d="M6 6l12 12M18 6 6 18" />,
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

type Projeto = {
  number: string
  category: string
  title: string
  description: string
  meta: string
  image: string
  alt: string
  imageNote: string
  cover?: string
  coverAlt?: string
  coverNote?: string
  drawing?: boolean
  facts: [string, string][]
  narrative: string[]
  gallery: { src: string, caption: string, drawing?: boolean }[]
  credit: string
}

const projects: Projeto[] = [
  {
    number: '01',
    category: 'Projetos para saúde',
    title: 'UTI 12 leitos',
    description:
      'Unidade de terapia intensiva implantada sobre a estrutura de uma obra inacabada, com dois isolamentos e fluxos definidos pela RDC 50.',
    meta: 'Hospital Eduardo Dias · Aracati — CE · 2020—2023',
    image: utiPerspective,
    alt: 'Planta em perspectiva da unidade de terapia intensiva de doze leitos',
    imageNote: 'Perspectiva · projeto autoral',
    cover: utiPlan,
    coverAlt: 'Planta da unidade de terapia intensiva de doze leitos',
    coverNote: 'Planta · projeto autoral',
    drawing: true,
    facts: [
      ['12', 'leitos'],
      ['02', 'isolamentos com antecâmara'],
      ['RDC 50', 'norma aplicada'],
    ],
    narrative: [
      'A UTI foi proposta para atender os pacientes do Hospital Municipal Eduardo Dias, em Aracati. O espaço escolhido para a implantação aproveitava a laje, os pilares e o piso de uma obra inacabada, que abrigaria o estacionamento de ambulâncias do hospital. Manter esse ponto era imprescindível: ali a unidade fica ao lado do Centro de Imagem e do Centro Cirúrgico.',
      'São doze leitos, dois deles em quartos de isolamento com antecâmara, cuba, equipamento de uso individual e banheiro privativo — um destinado a pacientes imunodeprimidos e outro a doenças respiratórias.',
      'O piso existente era um radier, o que limitava as instalações. A solução foi manter sobre ele apenas os leitos coletivos e criar novos pisos para os banheiros, sem comprometer os fluxos que a unidade exige. Todo o projeto foi desenvolvido em AutoCAD, com estudo das normas, escuta dos funcionários do hospital e visitas a unidades de referência.',
    ],
    gallery: [
      { src: utiIsolation, caption: 'Detalhe dos dois quartos de isolamento com antecâmara', drawing: true },
    ],
    credit: 'Projeto de arquitetura de autoria própria, desenvolvido na Secretaria de Infraestrutura.',
  },
  {
    number: '02',
    category: 'Projetos para saúde',
    title: 'Centro de Imagem',
    description:
      'Reforma do Centro de Imagem em que a leitura da RDC 50 permitiu reaproveitar a sala de comando para o raio-x e reduzir o orçamento.',
    meta: 'Hospital Eduardo Dias · Aracati — CE · 2020—2023',
    image: imagingPerspective,
    alt: 'Planta em perspectiva da reforma do Centro de Imagem',
    imageNote: 'Perspectiva · projeto autoral',
    cover: imagingPlan,
    coverAlt: 'Planta da reforma do Centro de Imagem',
    coverNote: 'Planta · projeto autoral',
    drawing: true,
    facts: [
      ['Reforma', 'primeiro trabalho em hospital'],
      ['RDC 50', 'norma aplicada'],
      ['Economia', 'sem vidro plumbífero'],
    ],
    narrative: [
      'O projeto de reforma do Centro de Imagem no Hospital Eduardo Dias, em Aracati, foi meu primeiro trabalho em unidade hospitalar. Embora já tivesse experiência em trabalhos para saúde, essa era a primeira vez em um hospital.',
      'O primeiro passo foi estudar as normas, o que contribuiu bastante para o partido do projeto. O Centro de Imagem já tinha uma sala de comando, e a RDC 50 permitia que ela atendesse também a sala de raio-x. A proposta evitou a compra de vidro plumbífero e reduziu o orçamento.',
      'Os acabamentos seguiram os requisitos de área crítica e semicrítica: manta vinílica com piso condutivo na sala de tomografia e manta vinílica de alto tráfego na sala de endoscopia.',
    ],
    gallery: [],
    credit: 'Projeto de arquitetura de autoria própria, desenvolvido na Secretaria de Infraestrutura.',
  },
  {
    number: '03',
    category: 'Projeto em Revit',
    title: 'Residência G & J',
    description:
      'Casa de 182,96 m² em condomínio fechado, integralmente modelada em Revit, com quantitativos extraídos para orçamento.',
    meta: 'Projeto autoral · 182,96 m²',
    image: residenceGJ,
    alt: 'Fachada da residência unifamiliar de dois pavimentos',
    imageNote: 'Estudo gerado em RErender',
    facts: [
      ['182,96 m²', 'área construída'],
      ['270,78 m²', 'lote'],
      ['02', 'pavimentos'],
    ],
    narrative: [
      'Residência para um casal com dois filhos, em lote de 270,78 m² de condomínio fechado, com 116,17 m² no térreo e 66,79 m² no pavimento superior. O pedido era um estilo com cara de casa, bem clean, sem excesso de acabamentos.',
      'Foi meu primeiro projeto inteiro em Revit, e o ganho apareceu em duas frentes. A primeira foi tempo: com um desenho de planta eu obtenho cortes, fachadas e modelagem. A segunda foi precisão de custo, porque a extração de quantitativos deixou a conversa sobre gastos de obra muito mais objetiva com o cliente. Desde então o Revit passou a ser minha preferência.',
    ],
    gallery: [],
    credit:
      'Imagem de apresentação gerada no RErender, aplicativo de inteligência artificial, para comunicar o conceito ao cliente antes do detalhamento.',
  },
  {
    number: '04',
    category: 'Projeto de interiores',
    title: 'Sala M & I',
    description:
      'Estudo de sala de estar a partir das preferências do cliente, com executivo em AutoCAD, modelagem em SketchUp e renderização em V-Ray.',
    meta: 'Projeto autoral · Interiores',
    image: livingMI,
    alt: 'Sala de estar com marcenaria escura e lareira',
    imageNote: 'Estudo de interiores',
    facts: [
      ['AutoCAD', 'projeto executivo'],
      ['SketchUp', 'modelagem'],
      ['V-Ray', 'renderização'],
    ],
    narrative: [
      'Minhas propostas de interiores partem do cliente. Na primeira reunião depois do fechamento do contrato, faço um estudo por preferências, referências e necessidades pessoais.',
      'Neste caso o pedido era um ambiente que transmitisse conforto, com cores básicas e móveis escuros. O projeto executivo saiu em AutoCAD, a modelagem em SketchUp e a renderização em V-Ray.',
    ],
    gallery: [],
    credit: 'Estudo e renderização de autoria própria.',
  },
  {
    number: '05',
    category: 'Análise de produto',
    title: 'Cond. Res. MOMA',
    description:
      'Empreendimento de alto padrão com três torres, em que respondi pela fase final: sinalização, ambientação das áreas comuns e compatibilização do paisagismo em obra.',
    meta: 'Magis Incorporações · 2015—2018',
    image: momaGourmet,
    alt: 'Área gourmet das áreas comuns entregue',
    imageNote: 'Foto da área comum entregue',
    facts: [
      ['03', 'torres'],
      ['82 a 111 m²', 'apartamentos'],
      ['04', 'empreendimentos simultâneos'],
    ],
    narrative: [
      'Na análise de produto cada analista respondia por quatro empreendimentos ao mesmo tempo, acompanhando desde a concepção e a viabilidade técnica até o estudo preliminar e o projeto legal. Isso incluía contratar e gerenciar os escritórios terceirizados de arquitetura, interiores, paisagismo, sinalização e acessibilidade.',
      'No MOMA, empreendimento de alto padrão da Magis com três torres e apartamentos de 82 a 111 m², respondi pela fase final: contrato e análise do projeto de sinalização, ambientação das áreas comuns internas e externas, compatibilização do projeto de paisagismo durante a obra e elaboração dos projetos de interiores das áreas comuns.',
      'Também implantei o ponto de venda e o apartamento decorado, acompanhei a execução e respondi pelos contratos das imagens 3D e da maquete física até a entrega, garantindo aderência ao padrão desejado.',
    ],
    gallery: [
      { src: momaSite, caption: 'A mesma área gourmet durante a execução' },
      { src: momaLounge, caption: 'Estar das áreas comuns, ambientado' },
    ],
    credit:
      'Empreendimento da Magis Incorporações. O projeto de paisagismo é de autoria do escritório Benedito Abbud, e a compatibilização em obra esteve sob minha responsabilidade.',
  },
  {
    number: '06',
    category: 'Análise de projeto',
    title: 'Aquarela Clube',
    description:
      'Gerenciamento da compatibilização entre os escritórios de projeto, com apontamentos verificados em DWG e Navisworks e todas as incompatibilidades sanadas no executivo.',
    meta: 'Magis Incorporações · 2015—2018',
    image: aquarelaAerial,
    alt: 'Vista aérea do condomínio residencial clube',
    imageNote: 'Foto do empreendimento entregue',
    facts: [
      ['56 a 75 m²', 'apartamentos'],
      ['04', 'empreendimentos simultâneos'],
      ['100%', 'incompatibilidades sanadas'],
    ],
    narrative: [
      'Na análise de projeto acompanhei empreendimentos da aprovação do projeto legal até a entrega da obra: projeto básico e executivo, compatibilização das multidisciplinas, administração do sistema de revisão de projetos e contratação dos escritórios de hidrossanitário, elétrico, combate a incêndio, SPDA e modelagem BIM, com visitas periódicas à obra.',
      'No Aquarela, condomínio clube com apartamentos de 56,66 a 75,53 m², respondi pelo gerenciamento da compatibilização entre os escritórios envolvidos. Analisava as incompatibilidades em DWG e no Navisworks e preparava um documento com todos os apontamentos, apresentado em reunião com todos os envolvidos para alinhar decisões e ajustes.',
      'Todas as incompatibilidades foram sanadas na entrega do projeto executivo, o que se refletiu direto no andamento da obra. A construtora BSPar depois incorporou o projeto aos seus empreendimentos.',
    ],
    gallery: [
      { src: aquarelaMeeting, caption: 'Reunião de alinhamento com os escritórios de projeto' },
    ],
    credit: 'Empreendimento da Magis Incorporações.',
  },
  {
    number: '07',
    category: 'Espaços públicos',
    title: 'Praça Pet e Família',
    description:
      'Replanejamento de uma área subutilizada em praça arborizada, com espaço pet, playground, pista de cooper e convivência noturna.',
    meta: 'SEINFRA · Aracati — CE · 2020—2023',
    image: pracaPlan,
    alt: 'Planta paisagística da Praça Pet e Espaço Família',
    imageNote: 'Planta · projeto autoral',
    drawing: true,
    facts: [
      ['Pet', 'playground e cooper'],
      ['AutoCAD', 'projeto executivo'],
      ['Orçamento', 'restrito e local'],
    ],
    narrative: [
      'A Praça Pet e o Espaço Família foram concebidos para uma área subutilizada, ocupada por um centro de artesanato com poucas lojas e uma área verde só com areia e poucas árvores. As raízes dessas árvores frequentemente invadiam a rede de esgoto dos banheiros existentes e causavam transtornos.',
      'Foi construído um novo centro de artesanato em um local mais atrativo para as vendas turísticas, e o espaço foi replanejado para uma praça que atendesse melhor os anseios locais: um trecho bem arborizado com espaço para pet, playground, pista de cooper e área de convivência, em que os bares e lanchonetes próximos pudessem colocar mesas e cadeiras à noite.',
      'O projeto foi todo desenvolvido em AutoCAD. O orçamento era bastante restrito, o que limitou as escolhas de piso de modo a atender a região, a manutenção e a verba destinada à demanda.',
    ],
    gallery: [
      { src: pracaElevation, caption: 'Corte da praça, da pista de cooper à praça de alimentação', drawing: true },
    ],
    credit: 'Projeto de arquitetura de autoria própria, desenvolvido na Secretaria de Infraestrutura.',
  },
  {
    number: '08',
    category: 'Espaços públicos',
    title: 'Biblioteca Pública',
    description:
      'Retrofit de um prédio onde funcionava uma UPA, com demolições, adequação de níveis para acessibilidade e preservação das aberturas existentes.',
    meta: 'SEINFRA · Aracati — CE · 2020—2023',
    image: libraryProposal,
    alt: 'Planta da proposta para a biblioteca pública municipal',
    imageNote: 'Planta · projeto autoral',
    drawing: true,
    facts: [
      ['UPA', 'uso anterior do prédio'],
      ['Retrofit', 'natureza da intervenção'],
      ['Acessível', 'níveis de piso adequados'],
    ],
    narrative: [
      'A Biblioteca Pública Municipal é uma proposta de retrofit em um prédio antigo onde funcionava uma UPA.',
      'Para que o edifício atendesse ao programa de necessidades de uma biblioteca, foi preciso demolir e construir paredes, movimentar terra e adequar os níveis de piso para acessibilidade. A proposta preservou as janelas, as portas e o buganvile existente.',
    ],
    gallery: [
      { src: libraryDemolition, caption: 'Planta demolir-construir, que organiza a intervenção', drawing: true },
      { src: libraryFacade, caption: 'Fachada principal proposta', drawing: true },
    ],
    credit: 'Projeto de arquitetura de autoria própria, desenvolvido na Secretaria de Infraestrutura.',
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

const stripImages = [
  { src: residenceGJ, alt: '' },
  { src: momaGourmet, alt: '' },
  { src: pracaPlan, alt: '' },
  { src: momaLounge, alt: '' },
]

function App() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [openProject, setOpenProject] = useState<string | null>(null)

  const active = projects.find((project) => project.number === openProject) ?? null

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

  useEffect(() => {
    if (!active) return

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setOpenProject(null)
    }

    const offset = window.scrollY
    const scrollbar = window.innerWidth - document.documentElement.clientWidth

    document.body.style.position = 'fixed'
    document.body.style.inset = `-${offset}px 0 auto 0`
    document.body.style.paddingRight = `${scrollbar}px`
    window.addEventListener('keydown', onKeyDown)

    return () => {
      document.body.style.position = ''
      document.body.style.inset = ''
      document.body.style.paddingRight = ''
      window.scrollTo({ top: offset, behavior: 'instant' })
      window.removeEventListener('keydown', onKeyDown)
    }
  }, [active])

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
          <span>Reformas e ampliações</span><i>•</i>
          <span>Compatibilização de projetos</span><i>•</i>
          <span>Base em São Paulo</span><i>•</i>
          <span>Arquitetura hospitalar</span><i>•</i>
          <span>Reformas e ampliações</span><i>•</i>
          <span>Compatibilização de projetos</span><i>•</i>
        </div>
      </div>

      <section className="type-banner reveal">
        <div>
          <h2>Arquitetura</h2>
          <a href="#sobre" aria-label="Ir para apresentação">
            <Icon name="arrow" />
          </a>
          <h2>pensada</h2>
        </div>
        <h2>para contextos</h2>
        <h2>complexos</h2>
        <Icon name="mark" />
      </section>

      <section className="intro" id="sobre">
        <aside className="skills reveal">
          <figure className="portrait">
            <img src={julianaPortrait} alt="Retrato de Juliana Romero" />
            <figcaption>Juliana Romero · Arquiteta</figcaption>
          </figure>
          <div>
            <h2>Competências principais</h2>
            {['Arquitetura hospitalar', 'Reformas e ampliações', 'Compatibilização', 'Gestão de projetos'].map((skill) => (
              <div className="skill-row" key={skill}>
                <span>{skill}</span>
                <Icon name="mark" />
              </div>
            ))}
          </div>
        </aside>

        <div className="bio reveal">
          <h2>
            Cada projeto começa pela compreensão de seu uso, contexto e possibilidades
            técnicas. <span>Ao longo da trajetória, diferentes escalas e desafios contribuíram
            para uma experiência que transita pela arquitetura para a saúde, coordenação,
            compatibilização e viabilidade.</span>
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
            <h2>Projetos e atuação</h2>
          </div>
          <Icon name="arrow" />
        </div>

        <div className="project-list">
          {projects.map((project) => (
            <button
              className="project-row"
              key={project.number}
              type="button"
              onClick={() => setOpenProject(project.number)}
              aria-label={`Abrir detalhes de ${project.title}`}
            >
              <div className="project-copy reveal">
                <div className="project-category">
                  <span>{project.number}</span>
                  <i />
                  <strong>{project.category}</strong>
                </div>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <small>{project.meta}</small>
                <span className="project-more">
                  Ver projeto <Icon name="arrow" />
                </span>
              </div>
              <div className={project.drawing ? 'project-image is-drawing' : 'project-image'}>
                <img src={project.cover ?? project.image} alt={project.coverAlt ?? project.alt} />
                <span>{project.coverNote ?? project.imageNote}</span>
              </div>
            </button>
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
          <p>Uma trajetória em diferentes contextos — incorporadoras, construtoras, setor público e projetos autônomos — acompanhando o projeto da concepção ao orçamento e à obra.</p>
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

      <section className="image-strip" aria-label="Galeria de projetos">
        {stripImages.map((image, index) => (
          <img src={image.src} alt={image.alt} key={image.src} style={{ objectPosition: `${40 + index * 10}% center` }} />
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
            <h3>AutoCAD · Revit · Navisworks</h3>
            <p>SketchUp · MS Project · AutoDoc</p>
            <h3>Inglês avançado</h3>
            <p>Espanhol básico</p>
          </article>
        </div>
      </section>

      <footer id="contato">
        <div className="footer-cta reveal">
          <h2>Um projeto começa<br />com uma boa conversa.</h2>
          <a href="mailto:julianarquitetura@gmail.com">Conversar sobre um projeto</a>
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

      {active && (
        <div className="project-panel" role="dialog" aria-modal="true" aria-label={active.title}>
          <button
            className="panel-backdrop"
            type="button"
            onClick={() => setOpenProject(null)}
            aria-label="Fechar detalhes do projeto"
          />
          <article className="panel-body">
            <header>
              <div>
                <span>{active.number} / {active.category}</span>
                <h2>{active.title}</h2>
                <small>{active.meta}</small>
              </div>
              <button type="button" onClick={() => setOpenProject(null)} aria-label="Fechar">
                <Icon name="close" />
              </button>
            </header>

            <dl className="panel-facts">
              {active.facts.map(([value, label]) => (
                <div key={label}>
                  <dt>{value}</dt>
                  <dd>{label}</dd>
                </div>
              ))}
            </dl>

            <div className="panel-text">
              {active.narrative.map((paragraph) => (
                <p key={paragraph.slice(0, 40)}>{paragraph}</p>
              ))}
            </div>

            <figure className={active.drawing ? 'panel-figure is-drawing' : 'panel-figure'}>
              <img src={active.image} alt={active.alt} />
              <figcaption>{active.imageNote}</figcaption>
            </figure>

            {active.gallery.map((item) => (
              <figure
                className={item.drawing ? 'panel-figure is-drawing' : 'panel-figure'}
                key={item.src}
              >
                <img src={item.src} alt={item.caption} />
                <figcaption>{item.caption}</figcaption>
              </figure>
            ))}

            <p className="panel-credit">{active.credit}</p>
          </article>
        </div>
      )}
    </main>
  )
}

export default App
