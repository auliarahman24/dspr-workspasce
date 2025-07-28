import Header from '@/components/Header';
import Footer from '@/components/Footer';
import HeroSlider from '@/components/HeroSlider';
import NewsSection from '@/components/NewsSection';
import ServicesStats from '@/components/ServicesStats';
import GallerySection from '@/components/GallerySection';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <HeroSlider />

        {/* Quick Info Section */}
        <section className="py-12 bg-gradient-to-r from-green-600 to-green-800">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-white text-center">
              <div>
                <h3 className="text-2xl font-bold mb-2">Visi</h3>
                <p className="text-green-100">
                  Terwujudnya pemuda dan olahraga Sumbar yang berprestasi, berkarakter, dan berdaya saing
                </p>
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-2">Misi</h3>
                <p className="text-green-100">
                  Mengembangkan potensi pemuda dan prestasi olahraga melalui pembinaan yang berkelanjutan
                </p>
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-2">Komitmen</h3>
                <p className="text-green-100">
                  Memberikan pelayanan terbaik untuk kemajuan pemuda dan olahraga di Ranah Minang
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Services and Stats */}
        <ServicesStats />

        {/* News Section */}
        <NewsSection />

        {/* Gallery Section */}
        <GallerySection />

        {/* Call to Action Section */}
        <section className="py-16 bg-gradient-to-r from-yellow-400 to-orange-500">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Bergabunglah dengan Kami
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Mari bersama-sama membangun generasi pemuda Sumbar yang berprestasi dan berkarakter
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-orange-600 hover:bg-gray-100 font-semibold px-8 py-3 rounded-lg transition-colors">
                Daftar Program
              </button>
              <button className="border-2 border-white text-white hover:bg-white hover:text-orange-600 font-semibold px-8 py-3 rounded-lg transition-colors">
                Hubungi Kami
              </button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
