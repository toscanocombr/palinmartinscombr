import Link from 'next/link';
import HeroCarousel from '@/components/HeroCarousel';
import ClientsCarousel from '@/components/ClientsCarousel';

const services = [
  {
    icon: (
      <img src="/images/superfiscal.png" alt="Super Fiscal" className="w-full h-full object-cover rounded-xl" />
    ),
    title: 'Super Fiscal',
    description: 'A nova geração de automação tributária focada em ICMS.',
    href: '/servicos#superfiscal',
    features: ['Automação Tributária', 'ICMS', 'Gestão Fiscal'],
    isImage: true,
  },
  {
    icon: (
      <img src="/images/integramente.png" alt="Integramente" className="w-full h-full object-cover rounded-xl" />
    ),
    title: 'IntegraMente',
    description: 'O IntegraMente revela o que o currículo não mostra. Testes psicológicos validados que ajudam a posicionar cada colaborador no lugar certo, com consciência, desempenho e alinhamento à cultura da empresa.',
    href: 'https://integramentegpm.com.br/',
    features: ['Testes Psicológicos', 'Cultura Organizacional', 'RH Estratégico'],
    isImage: true,
    external: true,
  },
  {
    icon: (
      <img src="/images/stream.png" alt="Stream" className="w-full h-full object-cover rounded-xl" />
    ),
    title: 'Stream',
    description: 'Aprenda com os melhores especialistas em contabilidade. Plataforma de educação do Palin & Martins.',
    href: 'http://143.198.75.253',
    features: ['Cursos Online', 'Especialistas', 'Certificados'],
    isImage: true,
    external: true,
  },
];

const stats = [
  { value: '20+', label: 'Anos de Experiência' },
  { value: '500+', label: 'Empresas Atendidas' },
  { value: 'R$595M+', label: 'Recuperados em ICMS' },
  { value: '98%', label: 'Taxa de Sucesso' },
];

const benefits = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: 'Especialistas em ICMS',
    description: 'Expertise em recuperação de créditos tributários há mais de 20 anos.',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    title: 'Resultado Rápido',
    description: 'Análise gratuita em até 48h e recuperação em tempo recorde.',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
    title: 'Sem Risco',
    description: 'Você só paga se recuperarmos valores para sua empresa.',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
      </svg>
    ),
    title: '100% Legal e Seguro',
    description: 'Processos dentro da legislação com total segurança jurídica.',
  },
];

const faqs = [
  {
    question: 'Como funciona a recuperação de ICMS?',
    answer: 'Analisamos os últimos 5 anos de operações fiscais da sua empresa para identificar créditos de ICMS pagos indevidamente ou não aproveitados. Encontrando valores, cuidamos de todo o processo de recuperação junto aos órgãos competentes.',
  },
  {
    question: 'Quanto tempo leva para recuperar os valores?',
    answer: 'O prazo varia conforme o estado e a complexidade do caso. Em média, a análise inicial leva 48h e o processo completo de recuperação pode levar de 60 a 180 dias, dependendo da via escolhida (administrativa ou judicial).',
  },
  {
    question: 'Qual o custo do serviço?',
    answer: 'Trabalhamos com modelo de sucesso: você só paga se recuperarmos valores para sua empresa. A análise inicial é gratuita e sem compromisso. Os honorários são um percentual sobre o valor efetivamente recuperado.',
  },
  {
    question: 'Quais empresas podem recuperar ICMS?',
    answer: 'Empresas dos regimes Lucro Real e Lucro Presumido que realizam operações de compra e venda de mercadorias, especialmente indústrias, distribuidoras, atacadistas e importadoras. Fazemos uma análise prévia para verificar o potencial de recuperação.',
  },
];

export default function Home() {
  return (
    <>
      {/* Hero Carousel */}
      <HeroCarousel />

      {/* Stats Section */}
      <section className="py-16 bg-[var(--dark-surface)] relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 left-1/4 w-64 h-64 bg-[var(--gold)] rounded-full filter blur-[100px]" />
          <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-[var(--gold)] rounded-full filter blur-[100px]" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-gradient-gold mb-2">
                  {stat.value}
                </div>
                <div className="text-[var(--text-muted)]">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="servicos" className="py-24 bg-[var(--background)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 rounded-full bg-[var(--gold)]/10 text-[var(--gold)] text-sm font-semibold tracking-wider uppercase mb-4">
              Nossos Serviços
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
              Soluções Completas para{' '}
              <span className="text-gradient-gold">Sua Empresa</span>
            </h2>
            <p className="text-[var(--text-muted)] max-w-2xl mx-auto text-lg">
              Além de especialistas em recuperação de ICMS, oferecemos
              serviços e aplicativos que facilitam a vida da sua empresa.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => {
              const CardWrapper = service.external ? 'a' : Link;
              const cardProps = service.external
                ? { href: service.href, target: '_blank', rel: 'noopener noreferrer' }
                : { href: service.href };
              return (
              <CardWrapper
                key={service.title}
                {...cardProps}
                className="group bg-[var(--dark-card)] border border-[var(--dark-border)] rounded-2xl p-8 card-hover relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[var(--gold)]/10 to-transparent rounded-bl-full" />
                <div className="relative">
                  {service.isImage ? (
                    <div className="w-24 h-24 mb-6 group-hover:scale-110 transition-transform">
                      {service.icon}
                    </div>
                  ) : (
                    <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-[var(--gold)] to-[var(--gold-dark)] flex items-center justify-center text-[#0a0a0f] mb-6 group-hover:scale-110 transition-transform">
                      {service.icon}
                    </div>
                  )}
                  <h3 className="text-xl font-semibold mb-4 group-hover:text-[var(--gold)] transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-[var(--text-muted)] mb-6">
                    {service.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {service.features.map((feature) => (
                      <span
                        key={feature}
                        className="px-3 py-1 text-sm bg-[var(--dark-surface)] rounded-full text-[var(--text-muted)]"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                  <span className="inline-flex items-center text-[var(--gold)] font-medium">
                    Saiba mais
                    <svg className="w-4 h-4 ml-2 group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </span>
                </div>
              </CardWrapper>
            );
            })}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 bg-[var(--dark-surface)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="inline-block px-4 py-2 rounded-full bg-[var(--gold)]/10 text-[var(--gold)] text-sm font-semibold tracking-wider uppercase mb-4">
                Por Que Nos Escolher
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
                Especialistas em{' '}
                <span className="text-gradient-gold">Recuperação</span>
                <br />
                de ICMS
              </h2>
              <p className="text-[var(--text-muted)] text-lg mb-8">
                Mais de R$595 milhões recuperados para nossos clientes.
                Somos referência em recuperação de créditos tributários
                com uma equipe jurídica e contábil especializada.
              </p>
              <div className="grid sm:grid-cols-2 gap-6">
                {benefits.map((benefit) => (
                  <div key={benefit.title} className="flex gap-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-[var(--gold)]/10 flex items-center justify-center text-[var(--gold)]">
                      {benefit.icon}
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">{benefit.title}</h3>
                      <p className="text-[var(--text-muted)] text-sm">{benefit.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden">
                <img
                  src="/images/heitor.jpg"
                  alt="Altair Heitor"
                  className="w-full h-[500px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-8">
                  <p className="text-2xl font-bold text-white mb-2">Altair Heitor</p>
                  <p className="text-[var(--gold)] italic text-lg mb-2">
                    &quot;Transformo tributos em inteligência tributária lucrativa.&quot;
                  </p>
                  <p className="text-white/80">+ de 22 anos no mercado tributário</p>
                </div>
              </div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-gradient-to-br from-[var(--gold)] to-[var(--gold-dark)] rounded-2xl -z-10" />
              <div className="absolute -top-6 -left-6 w-24 h-24 border-2 border-[var(--gold)] rounded-2xl -z-10" />
            </div>
          </div>
        </div>
      </section>

      {/* Jessica Palin Section */}
      <section className="py-24 bg-[var(--background)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative order-2 lg:order-1">
              <div className="relative rounded-2xl overflow-hidden">
                <img
                  src="/images/jessica.jpg"
                  alt="Jessica Palin"
                  className="w-full h-[500px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-8">
                  <p className="text-2xl font-bold text-white mb-2">Jessica Palin</p>
                  <p className="text-[var(--gold)] italic text-lg mb-2">
                    &quot;Transformamos equipes em sucesso e propósito!&quot;
                  </p>
                  <p className="text-white/80">Psicóloga Empresarial</p>
                </div>
              </div>
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-gradient-to-br from-[var(--gold)] to-[var(--gold-dark)] rounded-2xl -z-10" />
              <div className="absolute -top-6 -right-6 w-24 h-24 border-2 border-[var(--gold)] rounded-2xl -z-10" />
            </div>
            <div className="order-1 lg:order-2">
              <span className="inline-block px-4 py-2 rounded-full bg-[var(--gold)]/10 text-[var(--gold)] text-sm font-semibold tracking-wider uppercase mb-4">
                Nossa Especialista
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
                Psicologia{' '}
                <span className="text-gradient-gold">Empresarial</span>
              </h2>
              <p className="text-[var(--text-muted)] text-lg mb-8">
                Desenvolvimento humano e organizacional para empresas que valorizam suas equipes e buscam resultados sustentáveis.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-[var(--gold)]" />
                  <p className="text-[var(--foreground)]">Graduação em Direito (UNIP)</p>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-[var(--gold)]" />
                  <p className="text-[var(--foreground)]">Especialista em Direito Tributário (IBET/SP)</p>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-[var(--gold)]" />
                  <p className="text-[var(--foreground)]">Graduação em Psicologia (UNORP)</p>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-[var(--gold)]" />
                  <p className="text-[var(--foreground)]">Especialista em Intervenção Familiar (FAMERP)</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Clients Carousel */}
      <ClientsCarousel />

      {/* FAQ Section */}
      <section className="py-24 bg-[var(--dark-surface)]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 rounded-full bg-[var(--gold)]/10 text-[var(--gold)] text-sm font-semibold tracking-wider uppercase mb-4">
              Dúvidas Frequentes
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
              Perguntas{' '}
              <span className="text-gradient-gold">Frequentes</span>
            </h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <details
                key={index}
                className="group bg-[var(--dark-card)] border border-[var(--dark-border)] rounded-xl overflow-hidden"
              >
                <summary className="flex items-center justify-between p-6 cursor-pointer">
                  <span className="font-semibold text-lg pr-4">{faq.question}</span>
                  <svg
                    className="w-5 h-5 text-[var(--gold)] flex-shrink-0 transition-transform group-open:rotate-180"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <div className="px-6 pb-6 text-[var(--text-muted)]">
                  {faq.answer}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-[var(--background)] relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[var(--gold)] rounded-full filter blur-[200px] opacity-10" />
        </div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
              Pronto para{' '}
              <span className="text-gradient-gold">Recuperar</span>
              <br />
              Seus Créditos?
            </h2>
            <p className="text-[var(--text-muted)] text-lg mb-8 max-w-2xl mx-auto">
              Entre em contato agora e descubra quanto sua empresa pode recuperar em créditos de ICMS. Análise gratuita e sem compromisso.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://wa.me/5511999999999"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary inline-flex items-center justify-center gap-2 text-lg"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
                </svg>
                Falar com Especialista
              </a>
              <Link href="/contato" className="btn-secondary text-lg">
                Solicitar Análise Gratuita
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
