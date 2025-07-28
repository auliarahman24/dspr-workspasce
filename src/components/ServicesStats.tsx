const services = [
  {
    icon: '🏃‍♂️',
    title: 'Pembinaan Olahraga',
    description: 'Program pembinaan atlet dan pengembangan prestasi olahraga Sumbar',
  },
  {
    icon: '👥',
    title: 'Pemberdayaan Pemuda',
    description: 'Pengembangan potensi pemuda melalui berbagai program kreatif dan inovatif',
  },
  {
    icon: '🏆',
    title: 'Event & Kompetisi',
    description: 'Penyelenggaraan kompetisi dan event olahraga tingkat daerah hingga nasional',
  },
  {
    icon: '🎓',
    title: 'Beasiswa Atlet',
    description: 'Program beasiswa untuk atlet berprestasi guna melanjutkan pendidikan',
  },
];

const stats = [
  { number: '500+', label: 'Atlet Binaan' },
  { number: '50+', label: 'Cabang Olahraga' },
  { number: '100+', label: 'Event per Tahun' },
  { number: '1000+', label: 'Pemuda Terlibat' },
];

export default function ServicesStats() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        {/* Services Section */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Layanan Kami
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Berbagai program dan layanan untuk mengembangkan potensi pemuda dan prestasi olahraga
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {services.map((service, index) => (
            <div key={index} className="text-center group hover:transform hover:scale-105 transition-all duration-300">
              <div className="bg-green-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-green-200 transition-colors">
                <span className="text-3xl">{service.icon}</span>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="bg-green-800 rounded-2xl p-8 md:p-12">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Pencapaian Kami
            </h2>
            <p className="text-green-200 max-w-2xl mx-auto">
              Prestasi dan pencapaian Dinas Pemuda dan Olahraga Sumbar dalam angka
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-5xl font-bold text-yellow-400 mb-2">
                  {stat.number}
                </div>
                <div className="text-green-200 text-sm md:text-base">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
