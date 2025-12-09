'use client';

import { useState } from 'react';

const contactInfo = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    title: 'Endereco',
    content: 'Av. Paulista, 1000, Sala 1001',
    subcontent: 'Bela Vista, Sao Paulo - SP, 01310-100',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
      </svg>
    ),
    title: 'Telefone',
    content: '(11) 3000-0000',
    subcontent: '(11) 99999-9999 (WhatsApp)',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    title: 'E-mail',
    content: 'contato@palinemartins.com.br',
    subcontent: 'atendimento@palinemartins.com.br',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: 'Horario',
    content: 'Segunda a Sexta: 9h as 18h',
    subcontent: 'Sabado: 9h as 13h (Agendamento)',
  },
];

const services = [
  'Assessoria Juridica',
  'Contabilidade',
  'Consultoria Empresarial',
  'Planejamento Tributario',
  'Outro',
];

export default function Contato() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log(formData);
    alert('Mensagem enviada com sucesso! Entraremos em contato em breve.');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0a0a0f] via-[#12121a] to-[#0a0a0f]" />
        <div className="absolute inset-0 opacity-20">
          <div className="absolute bottom-1/3 left-1/4 w-96 h-96 bg-[var(--gold)] rounded-full filter blur-[150px]" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <span className="text-[var(--gold)] text-sm font-semibold tracking-wider uppercase">
              Contato
            </span>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mt-4 mb-6">
              Vamos <span className="text-gradient-gold">Conversar</span>
            </h1>
            <p className="text-lg text-[var(--text-muted)]">
              Entre em contato conosco e descubra como podemos ajudar sua empresa
              a alcancar novos patamares de sucesso.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-16 bg-[var(--dark-surface)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map((info) => (
              <div
                key={info.title}
                className="bg-[var(--dark-card)] border border-[var(--dark-border)] rounded-2xl p-6 card-hover"
              >
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-[var(--gold)] to-[var(--gold-dark)] flex items-center justify-center text-[#0a0a0f] mb-4">
                  {info.icon}
                </div>
                <h3 className="font-semibold mb-2">{info.title}</h3>
                <p className="text-[var(--foreground)]">{info.content}</p>
                <p className="text-[var(--text-muted)] text-sm">{info.subcontent}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Form and Map Section */}
      <section className="py-24 bg-[var(--background)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Form */}
            <div>
              <h2 className="text-3xl font-bold mb-2">
                Envie sua <span className="text-gradient-gold">Mensagem</span>
              </h2>
              <p className="text-[var(--text-muted)] mb-8">
                Preencha o formulario abaixo e nossa equipe entrara em contato o mais breve possivel.
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">
                      Nome Completo *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg bg-[var(--dark-card)] border border-[var(--dark-border)] text-[var(--foreground)] placeholder-[var(--text-muted)] focus:outline-none focus:border-[var(--gold)] transition-colors"
                      placeholder="Seu nome"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">
                      E-mail *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg bg-[var(--dark-card)] border border-[var(--dark-border)] text-[var(--foreground)] placeholder-[var(--text-muted)] focus:outline-none focus:border-[var(--gold)] transition-colors"
                      placeholder="seu@email.com"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium mb-2">
                      Telefone *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg bg-[var(--dark-card)] border border-[var(--dark-border)] text-[var(--foreground)] placeholder-[var(--text-muted)] focus:outline-none focus:border-[var(--gold)] transition-colors"
                      placeholder="(11) 99999-9999"
                    />
                  </div>
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium mb-2">
                      Empresa
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg bg-[var(--dark-card)] border border-[var(--dark-border)] text-[var(--foreground)] placeholder-[var(--text-muted)] focus:outline-none focus:border-[var(--gold)] transition-colors"
                      placeholder="Nome da empresa"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="service" className="block text-sm font-medium mb-2">
                    Servico de Interesse *
                  </label>
                  <select
                    id="service"
                    name="service"
                    required
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg bg-[var(--dark-card)] border border-[var(--dark-border)] text-[var(--foreground)] focus:outline-none focus:border-[var(--gold)] transition-colors"
                  >
                    <option value="">Selecione um servico</option>
                    {services.map((service) => (
                      <option key={service} value={service}>
                        {service}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Mensagem *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg bg-[var(--dark-card)] border border-[var(--dark-border)] text-[var(--foreground)] placeholder-[var(--text-muted)] focus:outline-none focus:border-[var(--gold)] transition-colors resize-none"
                    placeholder="Conte-nos mais sobre sua necessidade..."
                  />
                </div>

                <button type="submit" className="btn-primary w-full sm:w-auto">
                  Enviar Mensagem
                </button>
              </form>
            </div>

            {/* Map / Info */}
            <div>
              <div className="bg-[var(--dark-card)] border border-[var(--dark-border)] rounded-2xl overflow-hidden h-full min-h-[400px]">
                {/* Map Placeholder */}
                <div className="aspect-video bg-gradient-to-br from-[var(--dark-surface)] to-[var(--dark-card)] flex items-center justify-center">
                  <div className="text-center p-8">
                    <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-[var(--gold)] to-[var(--gold-dark)] flex items-center justify-center">
                      <svg className="w-8 h-8 text-[#0a0a0f]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <p className="text-lg font-semibold">Nossa Localizacao</p>
                    <p className="text-[var(--text-muted)]">Av. Paulista, 1000</p>
                  </div>
                </div>

                {/* Quick Contact Options */}
                <div className="p-6 space-y-4">
                  <h3 className="font-semibold mb-4">Atendimento Rapido</h3>
                  <a
                    href="https://wa.me/5511999999999"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-4 rounded-lg bg-[var(--dark-surface)] hover:bg-[var(--gold)]/10 transition-colors group"
                  >
                    <div className="w-10 h-10 rounded-full bg-green-500/20 flex items-center justify-center">
                      <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-medium group-hover:text-[var(--gold)] transition-colors">WhatsApp</p>
                      <p className="text-sm text-[var(--text-muted)]">Resposta rapida</p>
                    </div>
                  </a>
                  <a
                    href="tel:+551130000000"
                    className="flex items-center gap-4 p-4 rounded-lg bg-[var(--dark-surface)] hover:bg-[var(--gold)]/10 transition-colors group"
                  >
                    <div className="w-10 h-10 rounded-full bg-[var(--gold)]/20 flex items-center justify-center">
                      <svg className="w-5 h-5 text-[var(--gold)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-medium group-hover:text-[var(--gold)] transition-colors">Ligar Agora</p>
                      <p className="text-sm text-[var(--text-muted)]">(11) 3000-0000</p>
                    </div>
                  </a>
                  <a
                    href="mailto:contato@palinemartins.com.br"
                    className="flex items-center gap-4 p-4 rounded-lg bg-[var(--dark-surface)] hover:bg-[var(--gold)]/10 transition-colors group"
                  >
                    <div className="w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center">
                      <svg className="w-5 h-5 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-medium group-hover:text-[var(--gold)] transition-colors">E-mail</p>
                      <p className="text-sm text-[var(--text-muted)]">contato@palinemartins.com.br</p>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-[var(--dark-surface)]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold">
              Perguntas <span className="text-gradient-gold">Frequentes</span>
            </h2>
          </div>
          <div className="space-y-4">
            {[
              {
                q: 'Como funciona a primeira consulta?',
                a: 'A primeira consulta e gratuita e serve para conhecermos sua empresa e suas necessidades. Apos essa analise inicial, apresentamos uma proposta personalizada.',
              },
              {
                q: 'Atendem empresas de qual porte?',
                a: 'Atendemos empresas de todos os portes, desde startups ate grandes corporacoes. Nossas solucoes sao adaptadas a realidade de cada cliente.',
              },
              {
                q: 'E possivel contratar apenas um servico?',
                a: 'Sim, voce pode contratar apenas o servico que precisa. Porem, oferecemos condicoes especiais para clientes que optam por solucoes integradas.',
              },
              {
                q: 'Qual o prazo para retorno apos o contato?',
                a: 'Nossa equipe retorna em ate 24 horas uteis apos o recebimento da sua mensagem.',
              },
            ].map((faq, index) => (
              <div
                key={index}
                className="bg-[var(--dark-card)] border border-[var(--dark-border)] rounded-xl p-6"
              >
                <h3 className="font-semibold mb-2">{faq.q}</h3>
                <p className="text-[var(--text-muted)]">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
