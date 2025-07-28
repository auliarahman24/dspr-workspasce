import Link from 'next/link';

const newsData = [
  {
    id: 1,
    title: 'Pembukaan PON XXI Aceh-Sumut 2024',
    excerpt: 'Kontingen Sumatera Barat siap berlaga dalam Pekan Olahraga Nasional XXI dengan target prestasi terbaik...',
    date: '2025-07-20',
    category: 'Olahraga',
    image: '/placeholder-news1.jpg',
  },
  {
    id: 2,
    title: 'Program Pembinaan Pemuda Kreatif Sumbar',
    excerpt: 'Dinas Pemuda dan Olahraga meluncurkan program pembinaan pemuda kreatif untuk mengembangkan industri kreatif...',
    date: '2025-07-19',
    category: 'Pemuda',
    image: '/placeholder-news2.jpg',
  },
  {
    id: 3,
    title: 'Turnamen Sepak Bola Piala Gubernur',
    excerpt: 'Turnamen sepak bola antar kabupaten/kota se-Sumbar dimulai dengan antusias peserta yang tinggi...',
    date: '2025-07-18',
    category: 'Event',
    image: '/placeholder-news3.jpg',
  },
];

export default function NewsSection() {
  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Berita & Artikel Terkini
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Ikuti perkembangan terbaru seputar dunia pemuda dan olahraga di Sumatera Barat
          </p>
        </div>

        {/* News Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {newsData.map((news) => (
            <article key={news.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
              {/* Image placeholder */}
              <div className="h-48 bg-gradient-to-br from-green-400 to-green-600 flex items-center justify-center">
                <span className="text-white text-6xl">📸</span>
              </div>
              
              <div className="p-6">
                {/* Category and Date */}
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

        {/* View All Button */}
        <div className="text-center mt-10">
          <Link 
            href="/berita"
            className="inline-block bg-green-600 hover:bg-green-700 text-white font-semibold px-8 py-3 rounded-lg transition-colors"
          >
            Lihat Semua Berita
          </Link>
        </div>
      </div>
    </section>
  );
}
