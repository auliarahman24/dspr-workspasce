import Header from '@/components/Header';
import Footer from '@/components/Footer';

const leadership = [
  {
    name: 'Drs. H. Irwan Prayitno, M.Sc',
    position: 'Gubernur Sumatera Barat',
    image: '/placeholder-governor.jpg',
  },
  {
    name: 'Dr. H. Audy Joinaldy, S.IP., M.Si',
    position: 'Wakil Gubernur Sumatera Barat',
    image: '/placeholder-vice-governor.jpg',
  },
  {
    name: 'Drs. H. Zulkarnain, M.Si',
    position: 'Kepala Dinas Pemuda dan Olahraga',
    image: '/placeholder-head.jpg',
  },
];

export default function ProfilPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-green-600 to-green-800 py-16">
          <div className="container mx-auto px-4 text-center text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Profil Dinas
            </h1>
            <p className="text-xl text-green-100 max-w-2xl mx-auto">
              Mengenal lebih dekat Dinas Pemuda dan Olahraga Pemerintah Provinsi Sumatera Barat
            </p>
          </div>
        </section>

        {/* About Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-gray-800 mb-6">
                  Tentang Kami
                </h2>
                <p className="text-gray-600 mb-4">
                  Dinas Pemuda dan Olahraga Pemerintah Provinsi Sumatera Barat merupakan unsur pelaksana 
                  Pemerintah Provinsi yang dipimpin oleh seorang Kepala Dinas yang berkedudukan di bawah 
                  dan bertanggung jawab kepada Gubernur melalui Sekretaris Daerah.
                </p>
                <p className="text-gray-600 mb-4">
                  Kami berkomitmen untuk mengembangkan potensi pemuda dan prestasi olahraga di Ranah Minang 
                  melalui berbagai program pembinaan, pelatihan, dan kompetisi yang berkelanjutan.
                </p>
                <p className="text-gray-600">
                  Dengan dukungan sumber daya manusia yang kompeten dan fasilitas yang memadai, 
                  kami berupaya mewujudkan pemuda Sumbar yang berprestasi, berkarakter, dan berdaya saing.
                </p>
              </div>
              <div className="bg-gradient-to-br from-green-400 to-green-600 rounded-lg p-8 flex items-center justify-center">
                <span className="text-white text-9xl">🏛️</span>
              </div>
            </div>
          </div>
        </section>

        {/* Vision Mission Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {/* Vision */}
              <div className="bg-white p-8 rounded-lg shadow-md">
                <div className="flex items-center mb-6">
                  <div className="bg-green-100 p-3 rounded-full mr-4">
                    <span className="text-2xl">🎯</span>
                  </div>
                  <h2 className="text-2xl font-bold text-gray-800">Visi</h2>
                </div>
                <p className="text-gray-600 text-lg leading-relaxed">
                  &ldquo;Terwujudnya pemuda dan olahraga Sumatera Barat yang berprestasi, 
                  berkarakter, dan berdaya saing pada tahun 2026&rdquo;
                </p>
              </div>

              {/* Mission */}
              <div className="bg-white p-8 rounded-lg shadow-md">
                <div className="flex items-center mb-6">
                  <div className="bg-green-100 p-3 rounded-full mr-4">
                    <span className="text-2xl">🚀</span>
                  </div>
                  <h2 className="text-2xl font-bold text-gray-800">Misi</h2>
                </div>
                <ul className="text-gray-600 space-y-3">
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">•</span>
                    Mengembangkan potensi dan bakat pemuda yang kreatif dan inovatif
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">•</span>
                    Meningkatkan prestasi olahraga melalui pembinaan berkelanjutan
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">•</span>
                    Memfasilitasi pengembangan organisasi kepemudaan dan olahraga
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">•</span>
                    Meningkatkan sarana dan prasarana pemuda dan olahraga
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Leadership Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                Pimpinan
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Para pemimpin yang mengarahkan visi dan misi Dinas Pemuda dan Olahraga Sumbar
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {leadership.map((leader, index) => (
                <div key={index} className="text-center">
                  {/* Image placeholder */}
                  <div className="w-48 h-48 mx-auto mb-6 rounded-full bg-gradient-to-br from-green-400 to-green-600 flex items-center justify-center">
                    <span className="text-white text-6xl">👤</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">
                    {leader.name}
                  </h3>
                  <p className="text-green-600 font-semibold">
                    {leader.position}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-16 bg-green-800">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Nilai-Nilai Kami
              </h2>
              <p className="text-green-200 max-w-2xl mx-auto">
                Nilai-nilai yang menjadi pedoman dalam melaksanakan tugas dan fungsi
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center text-white">
                <div className="bg-yellow-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🤝</span>
                </div>
                <h3 className="text-xl font-bold mb-2">Integritas</h3>
                <p className="text-green-200">Berkomitmen pada kejujuran dan transparansi</p>
              </div>
              <div className="text-center text-white">
                <div className="bg-yellow-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">⚡</span>
                </div>
                <h3 className="text-xl font-bold mb-2">Inovasi</h3>
                <p className="text-green-200">Mengembangkan ide kreatif dan solusi baru</p>
              </div>
              <div className="text-center text-white">
                <div className="bg-yellow-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🏆</span>
                </div>
                <h3 className="text-xl font-bold mb-2">Prestasi</h3>
                <p className="text-green-200">Berorientasi pada pencapaian hasil terbaik</p>
              </div>
              <div className="text-center text-white">
                <div className="bg-yellow-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">❤️</span>
                </div>
                <h3 className="text-xl font-bold mb-2">Pelayanan</h3>
                <p className="text-green-200">Mengutamakan kepuasan masyarakat</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
