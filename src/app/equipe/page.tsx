import Link from 'next/link';

const team = [
  {
    name: 'Dr. Ricardo Palin',
    role: 'Socio Fundador - Diretor Juridico',
    bio: 'Advogado com mais de 25 anos de experiencia em direito empresarial. Especialista em M&A e reestruturacao societaria.',
    education: 'Doutor em Direito pela USP',
    linkedin: '#',
  },
  {
    name: 'Dra. Maria Martins',
    role: 'Socia Fundadora - Diretora Contabil',
    bio: 'Contadora com vasta experiencia em planejamento tributario e gestao contabil de grandes empresas.',
    education: 'Mestre em Contabilidade pela FGV',
    linkedin: '#',
  },
  {
    name: 'Dr. Fernando Costa',
    role: 'Diretor de Consultoria',
    bio: 'Consultor empresarial especializado em reestruturacao organizacional e planejamento estrategico.',
    education: 'MBA pela Harvard Business School',
    linkedin: '#',
  },
  {
    name: 'Dra. Ana Lucia Santos',
    role: 'Gerente Juridico - Trabalhista',
    bio: 'Especialista em direito trabalhista empresarial com foco em prevencao de passivos.',
    education: 'Especialista em Direito do Trabalho pela PUC-SP',
    linkedin: '#',
  },
  {
    name: 'Carlos Alberto Mendes',
    role: 'Gerente Contabil',
    bio: 'Contador com expertise em BPO financeiro e implementacao de sistemas de gestao.',
    education: 'Especialista em Controladoria pela FIPECAFI',
    linkedin: '#',
  },
  {
    name: 'Dra. Patricia Oliveira',
    role: 'Gerente Juridico - Tributario',
    bio: 'Advogada tributarista com experiencia em planejamento fiscal e contencioso administrativo.',
    education: 'Mestre em Direito Tributario pela USP',
    linkedin: '#',
  },
];

const areas = [
  { name: 'Direito Empresarial', count: 8 },
  { name: 'Contabilidade', count: 12 },
  { name: 'Consultoria', count: 6 },
  { name: 'Direito Trabalhista', count: 5 },
  { name: 'Direito Tributario', count: 4 },
  { name: 'Administrativo', count: 10 },
];

export default function Equipe() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0a0a0f] via-[#12121a] to-[#0a0a0f]" />
        <div className="absolute inset-0 opacity-20">
          <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-[var(--gold)] rounded-full filter blur-[150px]" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <span className="text-[var(--gold)] text-sm font-semibold tracking-wider uppercase">
              Nossa Equipe
            </span>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mt-4 mb-6">
              Profissionais de{' '}
              <span className="text-gradient-gold">Excelencia</span>
            </h1>
            <p className="text-lg text-[var(--text-muted)]">
              Contamos com uma equipe multidisciplinar de profissionais altamente
              qualificados, comprometidos em oferecer as melhores solucoes para
              nossos clientes.
            </p>
          </div>
        </div>
      </section>

      {/* Team Stats */}
      <section className="py-16 bg-[var(--dark-surface)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {areas.map((area) => (
              <div key={area.name} className="text-center">
                <div className="text-3xl font-bold text-gradient-gold mb-2">
                  {area.count}
                </div>
                <div className="text-sm text-[var(--text-muted)]">{area.name}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Section */}
      <section className="py-24 bg-[var(--background)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-[var(--gold)] text-sm font-semibold tracking-wider uppercase">
              Lideranca
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mt-4">
              Conheca Nossos <span className="text-gradient-gold">Lideres</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {team.map((member) => (
              <div
                key={member.name}
                className="bg-[var(--dark-card)] border border-[var(--dark-border)] rounded-2xl overflow-hidden card-hover group"
              >
                {/* Avatar Placeholder */}
                <div className="aspect-square bg-gradient-to-br from-[var(--dark-surface)] to-[var(--dark-card)] flex items-center justify-center relative overflow-hidden">
                  <div className="w-32 h-32 rounded-full bg-gradient-to-br from-[var(--gold)] to-[var(--gold-dark)] flex items-center justify-center">
                    <span className="text-4xl font-bold text-[#0a0a0f]">
                      {member.name.split(' ').map(n => n[0]).slice(0, 2).join('')}
                    </span>
                  </div>
                  {/* Overlay on hover */}
                  <div className="absolute inset-0 bg-[var(--gold)]/10 opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                  <p className="text-[var(--gold)] text-sm mb-4">{member.role}</p>
                  <p className="text-[var(--text-muted)] text-sm mb-4">{member.bio}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-[var(--text-muted)]">{member.education}</span>
                    <a
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-8 h-8 rounded-full border border-[var(--dark-border)] flex items-center justify-center text-[var(--text-muted)] hover:border-[var(--gold)] hover:text-[var(--gold)] transition-colors"
                    >
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Culture Section */}
      <section className="py-24 bg-[var(--dark-surface)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-[var(--gold)] text-sm font-semibold tracking-wider uppercase">
                Nossa Cultura
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold mt-4 mb-6">
                Um Ambiente de{' '}
                <span className="text-gradient-gold">Crescimento</span>
              </h2>
              <div className="space-y-4 text-[var(--text-muted)]">
                <p>
                  No Grupo Palin & Martins, acreditamos que o sucesso da nossa empresa
                  esta diretamente ligado ao desenvolvimento dos nossos colaboradores.
                </p>
                <p>
                  Investimos continuamente em capacitacao, oferecendo treinamentos,
                  especializacoes e oportunidades de crescimento profissional.
                </p>
                <p>
                  Nosso ambiente de trabalho e colaborativo, incentivando a troca de
                  conhecimentos e o trabalho em equipe para entregar as melhores
                  solucoes aos nossos clientes.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-[var(--dark-card)] border border-[var(--dark-border)] rounded-2xl p-6 text-center">
                <div className="text-4xl font-bold text-gradient-gold mb-2">45+</div>
                <p className="text-sm text-[var(--text-muted)]">Profissionais</p>
              </div>
              <div className="bg-[var(--dark-card)] border border-[var(--dark-border)] rounded-2xl p-6 text-center">
                <div className="text-4xl font-bold text-gradient-gold mb-2">15+</div>
                <p className="text-sm text-[var(--text-muted)]">Anos de Media</p>
              </div>
              <div className="bg-[var(--dark-card)] border border-[var(--dark-border)] rounded-2xl p-6 text-center">
                <div className="text-4xl font-bold text-gradient-gold mb-2">100%</div>
                <p className="text-sm text-[var(--text-muted)]">Qualificados</p>
              </div>
              <div className="bg-[var(--dark-card)] border border-[var(--dark-border)] rounded-2xl p-6 text-center">
                <div className="text-4xl font-bold text-gradient-gold mb-2">6</div>
                <p className="text-sm text-[var(--text-muted)]">Areas de Atuacao</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Join Us Section */}
      <section className="py-24 bg-[var(--background)]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            Quer Fazer Parte do Nosso{' '}
            <span className="text-gradient-gold">Time</span>?
          </h2>
          <p className="text-[var(--text-muted)] mb-8">
            Estamos sempre em busca de talentos que compartilham nossos valores
            e desejam crescer junto conosco.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:carreiras@palinemartins.com.br"
              className="btn-primary inline-flex items-center justify-center"
            >
              Envie seu Curriculo
              <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </a>
            <Link href="/contato" className="btn-secondary">
              Entre em Contato
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
