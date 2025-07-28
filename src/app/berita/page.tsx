import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';

const newsData = [
  {
    id: 1,
    title: 'Pembukaan PON XXI Aceh-Sumut 2024',
    excerpt: 'Kontingen Sumatera Barat siap berlaga dalam Pekan Olahraga Nasional XXI dengan target prestasi terbaik untuk mengharumkan nama daerah...',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    date: '2025-07-20',
    category: 'Olahraga',
    author: 'Admin Dispora',
    views: 1250,
  },
  {
    id: 2,
    title: 'Program Pembinaan Pemuda Kreatif Sumbar',
    excerpt: 'Dinas Pemuda dan Olahraga meluncurkan program pembinaan pemuda kreatif untuk mengembangkan industri kreatif di Sumatera Barat...',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    date: '2025-07-19',
    category: 'Pemuda',
    author: 'Tim Redaksi',
    views: 980,
  },
  {
    id: 3,
    title: 'Turnamen Sepak Bola Piala Gubernur',
    excerpt: 'Turnamen sepak bola antar kabupaten/kota se-Sumbar dimulai dengan antusias peserta yang tinggi dari seluruh daerah...',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    date: '2025-07-18',
    category: 'Event',
    author: 'Reporter Lapangan',
    views: 756,
  },
  {
    id: 4,
    title: 'Workshop Kewirausahaan untuk Pemuda',
    excerpt: 'Pelatihan kewirausahaan untuk pemuda Sumbar guna meningkatkan kemampuan berbisnis dan menciptakan lapangan kerja...',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    date: '2025-07-17',
    category: 'Pemuda',
    author: 'Tim Pembinaan',
    views: 623,
  },
  {
    id: 5,
    title: 'Prestasi Atlet Sumbar di Kejuaraan Nasional',
    excerpt: 'Atlet-atlet Sumatera Barat meraih medali emas dalam kejuaraan nasional cabang olahraga renang dan atletik...',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    date: '2025-07-16',
    category: 'Prestasi',
    author: 'Koordinator Prestasi',
    views: 1456,
  },
  {
    id: 6,
    title: 'Launching Program Beasiswa Atlet',
    excerpt: 'Program beasiswa untuk atlet berprestasi diluncurkan untuk mendukung pendidikan sambil berlatih olahraga...',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    date: '2025-07-15',
    category: 'Program',
    author: 'Sekretaris Dinas',
    views: 892,
  },
];

const categories = ['Semua', 'Olahraga', 'Pemuda', 'Event', 'Prestasi', 'Program'];

export default function BeritaPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-green-600 to-green-800 py-16">
          <div className="container mx-auto px-4 text-center text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Berita & Artikel
            </h1>
            <p className="text-xl text-green-100 max-w-2xl mx-auto">
              Ikuti perkembangan terbaru seputar dunia pemuda dan olahraga di Sumatera Barat
            </p>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            {/* Category Filter */}
            <div className="flex flex-wrap gap-2 mb-8 justify-center">
              {categories.map((category) => (
                <button
                  key={category}
                  className="px-4 py-2 rounded-full bg-gray-100 hover:bg-green-100 text-gray-700 hover:text-green-800 transition-colors"
                >
                  {category}
                </button>
              ))}
            </div>

            {/* News Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {newsData.map((news) => (
                <article key={news.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                  {/* Image placeholder */}
                  <div className="h-48 bg-gradient-to-br from-green-400 to-green-600 flex items-center justify-center">
                    <span className="text-white text-6xl">📰</span>
                  </div>
                  
                  <div className="p-6">
                    {/* Category and Meta */}
                    <div className="flex justify-between items-center mb-3">
                      <span className="bg-green-100 text-green-800 text-xs font-semibold px-2 py-1 rounded">
                        {news.category}
                      </span>
                      <span className="text-gray-500 text-sm">
                        {new Date(news.date).toLocaleDateString('id-ID')}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="text-xl font-bold text-gray-800 mb-3 line-clamp-2">
                      {news.title}
                    </h3>

                    {/* Excerpt */}
                    <p className="text-gray-600 mb-4 line-clamp-3">
                      {news.excerpt}
                    </p>

                    {/* Meta Info */}
                    <div className="flex justify-between items-center text-sm text-gray-500 mb-4">
                      <span>👤 {news.author}</span>
                      <span>👁️ {news.views}</span>
                    </div>

                    {/* Read More Link */}
                    <Link 
                      href={`/berita/${news.id}`}
                      className="inline-flex items-center text-green-600 hover:text-green-800 font-semibold transition-colors"
                    >
                      Baca Selengkapnya
                      <span className="ml-1">→</span>
                    </Link>
                  </div>
                </article>
              ))}
            </div>

            {/* Pagination */}
            <div className="flex justify-center mt-12">
              <div className="flex space-x-2">
                <button className="px-4 py-2 bg-gray-200 text-gray-600 rounded hover:bg-gray-300 transition-colors">
                  ← Sebelumnya
                </button>
                <button className="px-4 py-2 bg-green-600 text-white rounded">1</button>
                <button className="px-4 py-2 bg-gray-200 text-gray-600 rounded hover:bg-gray-300 transition-colors">2</button>
                <button className="px-4 py-2 bg-gray-200 text-gray-600 rounded hover:bg-gray-300 transition-colors">3</button>
                <button className="px-4 py-2 bg-gray-200 text-gray-600 rounded hover:bg-gray-300 transition-colors">
                  Selanjutnya →
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
