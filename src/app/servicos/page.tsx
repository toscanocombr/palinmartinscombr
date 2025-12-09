import Link from 'next/link';

const services = [
  {
    id: 'juridico',
    icon: (
      <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
      </svg>
    ),
    title: 'Assessoria Juridica',
    description: 'Solucoes juridicas completas para proteger e impulsionar seu negocio.',
    features: [
      'Direito Empresarial e Societario',
      'Contratos e Negociacoes',
      'Direito Trabalhista Empresarial',
      'Direito Tributario',
      'Recuperacao de Creditos',
      'Due Diligence e M&A',
      'Compliance e LGPD',
      'Contencioso Estrategico',
    ],
    benefits: [
      'Prevencao de riscos juridicos',
      'Seguranca nas operacoes empresariais',
      'Reducao de custos com litigios',
      'Apoio em decisoes estrategicas',
    ],
  },
  {
    id: 'contabilidade',
    icon: (
      <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
      </svg>
    ),
    title: 'Contabilidade',
    description: 'Gestao contabil e fiscal de alta performance para sua empresa.',
    features: [
      'Contabilidade Gerencial',
      'Escrituracao Fiscal e Contabil',
      'Planejamento Tributario',
      'Gestao de Folha de Pagamento',
      'Balanco e Demonstracoes Financeiras',
      'Obrigacoes Acessorias',
      'BPO Financeiro',
      'Auditoria Contabil',
    ],
    benefits: [
      'Reducao da carga tributaria legal',
      'Informacoes precisas para tomada de decisao',
      'Conformidade com obrigacoes fiscais',
      'Otimizacao dos processos financeiros',
    ],
  },
  {
    id: 'consultoria',
    icon: (
      <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
      </svg>
    ),
    title: 'Consultoria Empresarial',
    description: 'Estrategias sob medida para acelerar o crescimento do seu negocio.',
    features: [
      'Planejamento Estrategico',
      'Reestruturacao Organizacional',
      'Gestao de Processos',
      'Analise de Viabilidade',
      'Gestao de Projetos',
      'Mentoria Empresarial',
      'Governanca Corporativa',
      'Sucessao Empresarial',
    ],
    benefits: [
      'Aumento da eficiencia operacional',
      'Melhoria nos resultados financeiros',
      'Visao estrategica do negocio',
      'Preparacao para crescimento sustentavel',
    ],
  },
];

const process = [
  {
    step: '01',
    title: 'Diagnostico',
    description: 'Analise profunda da situacao atual da sua empresa e identificacao de necessidades.',
  },
  {
    step: '02',
    title: 'Proposta',
    description: 'Elaboracao de um plano personalizado com solucoes adequadas ao seu negocio.',
  },
  {
    step: '03',
    title: 'Implementacao',
    description: 'Execucao das acoes planejadas com acompanhamento continuo.',
  },
  {
    step: '04',
    title: 'Acompanhamento',
    description: 'Monitoramento dos resultados e ajustes para otimizacao continua.',
  },
];

export default function Servicos() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0a0a0f] via-[#12121a] to-[#0a0a0f]" />
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-[var(--gold)] rounded-full filter blur-[150px]" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <span className="text-[var(--gold)] text-sm font-semibold tracking-wider uppercase">
              Nossos Servicos
            </span>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mt-4 mb-6">
              Solucoes <span className="text-gradient-gold">Integradas</span>
              <br />
              para Sua Empresa
            </h1>
            <p className="text-lg text-[var(--text-muted)]">
              Oferecemos um ecossistema completo de servicos para atender todas as
              necessidades do seu negocio, com excelencia e resultados comprovados.
            </p>
          </div>
        </div>
      </section>

      {/* Services Detail Section */}
      {services.map((service, index) => (
        <section
          key={service.id}
          id={service.id}
          className={`py-24 ${index % 2 === 0 ? 'bg-[var(--dark-surface)]' : 'bg-[var(--background)]'}`}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-start">
              <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-[var(--gold)] to-[var(--gold-dark)] flex items-center justify-center text-[#0a0a0f] mb-8">
                  {service.icon}
                </div>
                <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                  {service.title}
                </h2>
                <p className="text-lg text-[var(--text-muted)] mb-8">
                  {service.description}
                </p>

                {/* Benefits */}
                <div className="mb-8">
                  <h3 className="text-xl font-semibold mb-4">Beneficios</h3>
                  <ul className="space-y-3">
                    {service.benefits.map((benefit) => (
                      <li key={benefit} className="flex items-start gap-3">
                        <svg className="w-5 h-5 text-[var(--gold)] mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-[var(--text-muted)]">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <Link href="/contato" className="btn-primary inline-flex items-center">
                  Solicitar Proposta
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>

              <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                <div className="bg-[var(--dark-card)] border border-[var(--dark-border)] rounded-2xl p-8">
                  <h3 className="text-xl font-semibold mb-6">Servicos Inclusos</h3>
                  <div className="grid sm:grid-cols-2 gap-4">
                    {service.features.map((feature) => (
                      <div
                        key={feature}
                        className="flex items-center gap-3 p-3 rounded-lg bg-[var(--dark-surface)]"
                      >
                        <div className="w-2 h-2 rounded-full bg-[var(--gold)]" />
                        <span className="text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* Process Section */}
      <section className="py-24 bg-[var(--dark-surface)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-[var(--gold)] text-sm font-semibold tracking-wider uppercase">
              Como Trabalhamos
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mt-4">
              Nosso <span className="text-gradient-gold">Processo</span>
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((item, index) => (
              <div key={item.step} className="relative">
                <div className="bg-[var(--dark-card)] border border-[var(--dark-border)] rounded-2xl p-6 card-hover h-full">
                  <span className="text-5xl font-bold text-gradient-gold opacity-50">
                    {item.step}
                  </span>
                  <h3 className="text-xl font-semibold mt-4 mb-2">{item.title}</h3>
                  <p className="text-[var(--text-muted)] text-sm">{item.description}</p>
                </div>
                {index < process.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                    <svg className="w-8 h-8 text-[var(--gold)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-[var(--gold-dark)] to-[var(--gold)]" />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#0a0a0f] mb-6">
            Pronto para Comecar?
          </h2>
          <p className="text-xl text-[#0a0a0f]/80 mb-10">
            Entre em contato e solicite uma proposta personalizada para sua empresa.
          </p>
          <Link
            href="/contato"
            className="bg-[#0a0a0f] text-[var(--gold)] font-semibold px-8 py-4 rounded-lg hover:bg-[#1a1a24] transition-colors inline-block"
          >
            Solicitar Proposta Gratuita
          </Link>
        </div>
      </section>
    </>
  );
}
