'use client';

const clientLogos = [
  'agraria-DRr6a38r.jpg',
  'agritech-BjslqcB5.png',
  'agrivalle-0mEQyngZ.png',
  'agrivitta-logo-BEDzlXnN.png',
  'albaugh-EPwkYKE7.png',
  'bbm-D6RQl8Rz.png',
  'beatrice-peanuts-B0eupGCA.png',
  'bip-BiHXQxtu.png',
  'boimix-C8r7iZuU.png',
  'capal-Dn2wKeKm.png',
  'cimo-agro-YUfw5quN.jpg',
  'coimma-3hk6IQXl.png',
  'crv-B_vEus1X.png',
  'ferpex-DsYeO_oz.png',
  'fmcopling-CTMfiwW8.png',
  'fricarne-DW9uxMOA.jpg',
  'gonzalez-Bkjc69r1.png',
  'h_n-jZv3lMIy.png',
  'helm-BzNRqxlH.png',
  'hy_line_do_brasil-Dh2qn8mO.png',
  'kento-rn1d-tcV.png',
  'lavoro2-CRdsaYg-.png',
  'logo-agrofertil-DwmuOTMt.png',
  'logo-pacaembu2-BIqs4iYM.png',
  'logoAmazonAgro2022-CB0VK6Xr.png',
  'logo_ype_3d-BLQNMZc6.png',
  'lohmann-BVHCrTY_.png',
  'm-cassab-BeSS-63u.png',
  'new-company-Cb3ujo7A.png',
  'nuttria-CSSUJgD1.png',
  'palini-alves-D-K-LyPN.jpg',
  'panzeri-_WV9VGBR.png',
  'piccin-B4vIpYVE.png',
  'planalto-postura-DDCcrFFz.jpg',
  'ramassol-DIPntFYn.jpeg',
  'stara-BWuTVUX-.png',
  'stefani-x6YhrdKk.png',
  'sumitomo-CKKe9LiT.png',
  'tempo-energia-AwLn2RRD.png',
  'terra-forte-BS3DYDb-.png',
  'terraverde-Dkl0BQH_.png',
  'tracbel-Bzdv8oWd.png',
  'tracbel-agro-MVP5SJUX.jpg',
  'tratorag-duraface-DTWQmXR8.png',
  'unimaq_logo-D_qq1ADn.jpg',
];

export default function ClientsCarousel() {
  return (
    <section className="py-16 bg-[var(--dark-surface)] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <div className="text-center">
          <span className="inline-block px-4 py-2 rounded-full bg-[var(--gold)]/10 text-[var(--gold)] text-sm font-semibold tracking-wider uppercase mb-4">
            Nossos Clientes
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
            Empresas que{' '}
            <span className="text-gradient-gold">Confiam</span>
            {' '}em Nós
          </h2>
        </div>
      </div>

      {/* Infinite Scroll Container */}
      <div className="relative">
        {/* Gradient Overlays */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[var(--dark-surface)] to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[var(--dark-surface)] to-transparent z-10" />

        {/* Scrolling Track */}
        <div className="flex animate-scroll">
          {/* First set of logos */}
          {clientLogos.map((logo, index) => (
            <div
              key={`first-${index}`}
              className="flex-shrink-0 mx-6 w-32 h-20 flex items-center justify-center bg-white/5 rounded-lg p-4 hover:bg-white/10 transition-colors"
            >
              <img
                src={`/clientes/${logo}`}
                alt="Cliente"
                className="max-w-full max-h-full object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
              />
            </div>
          ))}
          {/* Duplicate set for seamless loop */}
          {clientLogos.map((logo, index) => (
            <div
              key={`second-${index}`}
              className="flex-shrink-0 mx-6 w-32 h-20 flex items-center justify-center bg-white/5 rounded-lg p-4 hover:bg-white/10 transition-colors"
            >
              <img
                src={`/clientes/${logo}`}
                alt="Cliente"
                className="max-w-full max-h-full object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
