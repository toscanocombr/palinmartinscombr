import Link from 'next/link';

const values = [
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    title: 'Integridade',
    description: 'Agimos com etica e transparencia em todas as nossas relacoes.',
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    title: 'Excelencia',
    description: 'Buscamos a qualidade maxima em todos os servicos prestados.',
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
    title: 'Parceria',
    description: 'Construimos relacionamentos solidos e duradouros com nossos clientes.',
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
    title: 'Inovacao',
    description: 'Investimos constantemente em tecnologia e atualizacao profissional.',
  },
];

const timeline = [
  {
    year: '2004',
    title: 'Fundacao',
    description: 'Inicio das atividades com foco em assessoria juridica empresarial.',
  },
  {
    year: '2008',
    title: 'Expansao Contabil',
    description: 'Incorporacao dos servicos de contabilidade ao portfolio.',
  },
  {
    year: '2012',
    title: 'Consultoria',
    description: 'Lancamento da area de consultoria empresarial estrategica.',
  },
  {
    year: '2016',
    title: 'Nova Sede',
    description: 'Inauguracao da sede propria na Av. Paulista.',
  },
  {
    year: '2020',
    title: 'Transformacao Digital',
    description: 'Implementacao de plataformas digitais para atendimento remoto.',
  },
  {
    year: '2024',
    title: 'Grupo Palin & Martins',
    description: 'Consolidacao como grupo empresarial integrado.',
  },
];

export default function Sobre() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0a0a0f] via-[#12121a] to-[#0a0a0f]" />
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-[var(--gold)] rounded-full filter blur-[150px]" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="text-[var(--gold)] text-sm font-semibold tracking-wider uppercase">
              Sobre Nos
            </span>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mt-4 mb-6">
              Construindo{' '}
              <span className="text-gradient-gold">Relacoes</span>
              <br />
              de Confianca
            </h1>
            <p className="text-lg text-[var(--text-muted)]">
              Ha mais de duas decadas, o Grupo Palin & Martins tem sido sinonimo de
              excelencia em assessoria empresarial, construindo parcerias duradouras
              baseadas em confianca, competencia e resultados.
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-24 bg-[var(--dark-surface)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold mb-6">
                Nossa <span className="text-gradient-gold">Historia</span>
              </h2>
              <div className="space-y-4 text-[var(--text-muted)]">
                <p>
                  O Grupo Palin & Martins nasceu em 2004 da visao compartilhada de dois
                  profissionais apaixonados por fazer a diferenca no mundo empresarial:
                  Dr. Ricardo Palin e Dra. Maria Martins.
                </p>
                <p>
                  O que comecou como um pequeno escritorio de advocacia empresarial
                  rapidamente se expandiu para atender as demandas crescentes de nossos
                  clientes, incorporando servicos de contabilidade e consultoria.
                </p>
                <p>
                  Hoje, somos reconhecidos como um dos grupos mais respeitados no mercado,
                  atendendo empresas de todos os portes com a mesma dedicacao e qualidade
                  que marcaram nossa trajetoria desde o inicio.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-video bg-gradient-to-br from-[var(--dark-card)] to-[var(--dark-surface)] rounded-2xl border border-[var(--dark-border)] flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="text-6xl font-bold text-gradient-gold mb-4">20+</div>
                  <p className="text-xl text-[var(--foreground)]">Anos de Historia</p>
                  <p className="text-[var(--text-muted)] mt-2">Construindo o futuro dos nossos clientes</p>
                </div>
              </div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 border-2 border-[var(--gold)]/30 rounded-2xl" />
            </div>
          </div>
        </div>
      </section>

      {/* Mission, Vision Section */}
      <section className="py-24 bg-[var(--background)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-[var(--dark-card)] border border-[var(--dark-border)] rounded-2xl p-8">
              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-[var(--gold)] to-[var(--gold-dark)] flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-[#0a0a0f]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4">Missao</h3>
              <p className="text-[var(--text-muted)]">
                Oferecer solucoes integradas de assessoria juridica, contabil e empresarial,
                contribuindo para o crescimento sustentavel e a seguranca dos negocios
                de nossos clientes, com etica, competencia e inovacao.
              </p>
            </div>
            <div className="bg-[var(--dark-card)] border border-[var(--dark-border)] rounded-2xl p-8">
              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-[var(--gold)] to-[var(--gold-dark)] flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-[#0a0a0f]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4">Visao</h3>
              <p className="text-[var(--text-muted)]">
                Ser reconhecido como referencia nacional em assessoria empresarial integrada,
                destacando-se pela excelencia no atendimento, pela inovacao constante e
                pelo impacto positivo nos resultados de nossos clientes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 bg-[var(--dark-surface)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-[var(--gold)] text-sm font-semibold tracking-wider uppercase">
              Nossos Valores
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mt-4">
              O Que Nos <span className="text-gradient-gold">Guia</span>
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value) => (
              <div
                key={value.title}
                className="bg-[var(--dark-card)] border border-[var(--dark-border)] rounded-2xl p-6 text-center card-hover"
              >
                <div className="w-16 h-16 mx-auto rounded-xl bg-gradient-to-br from-[var(--gold)] to-[var(--gold-dark)] flex items-center justify-center text-[#0a0a0f] mb-4">
                  {value.icon}
                </div>
                <h3 className="text-lg font-semibold mb-2">{value.title}</h3>
                <p className="text-[var(--text-muted)] text-sm">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-24 bg-[var(--background)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-[var(--gold)] text-sm font-semibold tracking-wider uppercase">
              Nossa Trajetoria
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mt-4">
              Marcos da Nossa <span className="text-gradient-gold">Historia</span>
            </h2>
          </div>
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-px h-full bg-gradient-to-b from-[var(--gold)] to-[var(--gold-dark)] hidden md:block" />

            <div className="space-y-12">
              {timeline.map((item, index) => (
                <div
                  key={item.year}
                  className={`relative flex flex-col md:flex-row items-center ${
                    index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                >
                  <div className={`w-full md:w-1/2 ${index % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12'}`}>
                    <div className="bg-[var(--dark-card)] border border-[var(--dark-border)] rounded-2xl p-6 card-hover">
                      <span className="text-3xl font-bold text-gradient-gold">{item.year}</span>
                      <h3 className="text-xl font-semibold mt-2 mb-2">{item.title}</h3>
                      <p className="text-[var(--text-muted)]">{item.description}</p>
                    </div>
                  </div>
                  {/* Timeline dot */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-[var(--gold)] hidden md:block" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-[var(--dark-surface)]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            Faca Parte da Nossa <span className="text-gradient-gold">Historia</span>
          </h2>
          <p className="text-[var(--text-muted)] mb-8">
            Entre em contato e descubra como podemos ajudar sua empresa a alcancar
            novos patamares de sucesso.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contato" className="btn-primary">
              Entre em Contato
            </Link>
            <Link href="/equipe" className="btn-secondary">
              Conheca Nossa Equipe
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
