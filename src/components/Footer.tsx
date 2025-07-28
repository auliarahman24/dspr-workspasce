import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* About Section */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-yellow-400">Tentang Kami</h3>
            <p className="text-gray-300 mb-4">
              Dinas Pemuda dan Olahraga Pemerintah Provinsi Sumatera Barat berkomitmen 
              mengembangkan potensi pemuda dan prestasi olahraga di Ranah Minang.
            </p>
            <div className="flex space-x-3">
              <Link href="#" className="text-gray-300 hover:text-yellow-400 transition-colors">
                📘
              </Link>
              <Link href="#" className="text-gray-300 hover:text-yellow-400 transition-colors">
                📷
              </Link>
              <Link href="#" className="text-gray-300 hover:text-yellow-400 transition-colors">
                📺
              </Link>
              <Link href="#" className="text-gray-300 hover:text-yellow-400 transition-colors">
                🐦
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-yellow-400">Menu Cepat</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/profil" className="text-gray-300 hover:text-yellow-400 transition-colors">
                  Profil Dinas
                </Link>
              </li>
              <li>
                <Link href="/struktur" className="text-gray-300 hover:text-yellow-400 transition-colors">
                  Struktur Organisasi
                </Link>
              </li>
              <li>
                <Link href="/visi-misi" className="text-gray-300 hover:text-yellow-400 transition-colors">
                  Visi & Misi
                </Link>
              </li>
              <li>
                <Link href="/tupoksi" className="text-gray-300 hover:text-yellow-400 transition-colors">
                  Tupoksi
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-yellow-400">Layanan</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/pemuda" className="text-gray-300 hover:text-yellow-400 transition-colors">
                  Pembinaan Pemuda
                </Link>
              </li>
              <li>
                <Link href="/olahraga" className="text-gray-300 hover:text-yellow-400 transition-colors">
                  Pembinaan Olahraga
                </Link>
              </li>
              <li>
                <Link href="/event" className="text-gray-300 hover:text-yellow-400 transition-colors">
                  Event & Kompetisi
                </Link>
              </li>
              <li>
                <Link href="/beasiswa" className="text-gray-300 hover:text-yellow-400 transition-colors">
                  Beasiswa Atlet
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-yellow-400">Kontak</h3>
            <div className="space-y-3 text-gray-300">
              <div className="flex items-start space-x-2">
                <span>📍</span>
                <span>Jl. Diponegoro No. 10, Padang, Sumatera Barat 25112</span>
              </div>
              <div className="flex items-center space-x-2">
                <span>📞</span>
                <span>(0751) 7051234</span>
              </div>
              <div className="flex items-center space-x-2">
                <span>📠</span>
                <span>(0751) 7051235</span>
              </div>
              <div className="flex items-center space-x-2">
                <span>📧</span>
                <span>dispora@sumbarprov.go.id</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="bg-gray-900 py-4">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2025 Dinas Pemuda dan Olahraga Pemprov Sumbar. All rights reserved.
            </p>
            <div className="flex space-x-4 text-sm text-gray-400 mt-2 md:mt-0">
              <Link href="/privacy" className="hover:text-yellow-400 transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="hover:text-yellow-400 transition-colors">
                Terms of Service
              </Link>
              <Link href="/sitemap" className="hover:text-yellow-400 transition-colors">
                Sitemap
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
