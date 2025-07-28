'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      {/* Top Bar */}
      <div className="bg-green-700 text-white py-2">
        <div className="container mx-auto px-4 flex justify-between items-center text-sm">
          <div className="flex space-x-4">
            <span>📧 dispora@sumbarprov.go.id</span>
            <span>📞 (0751) 7051234</span>
          </div>
          <div className="flex space-x-2">
            <Link href="#" className="hover:text-yellow-300 transition-colors">
              <span className="sr-only">Facebook</span>
              📘
            </Link>
            <Link href="#" className="hover:text-yellow-300 transition-colors">
              <span className="sr-only">Instagram</span>
              📷
            </Link>
            <Link href="#" className="hover:text-yellow-300 transition-colors">
              <span className="sr-only">YouTube</span>
              📺
            </Link>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo and Title */}
          <div className="flex items-center space-x-4">
            <Image
              src="/aset/favicon.png"
              alt="Logo Sumbar"
              width={80}
              height={80}
              className="w-16 h-16 md:w-20 md:h-20"
            />
            <div>
              <h1 className="text-xl md:text-2xl font-bold text-green-800">
                DINAS PEMUDA DAN OLAHRAGA
              </h1>
              <p className="text-lg text-gray-600">PEMERINTAH PROVINSI SUMATERA BARAT</p>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden bg-green-700 text-white p-2 rounded"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            ☰
          </button>
        </div>
      </div>

      {/* Navigation */}
      <nav className={`bg-green-800 ${isMenuOpen ? 'block' : 'hidden'} md:block`}>
        <div className="container mx-auto px-4">
          <ul className="flex flex-col md:flex-row md:space-x-8 py-4">
            <li>
              <Link href="/" className="block py-2 px-4 text-white hover:bg-green-700 rounded transition-colors">
                Beranda
              </Link>
            </li>
            <li>
              <Link href="/profil" className="block py-2 px-4 text-white hover:bg-green-700 rounded transition-colors">
                Profil
              </Link>
            </li>
            <li>
              <Link href="/berita" className="block py-2 px-4 text-white hover:bg-green-700 rounded transition-colors">
                Berita
              </Link>
            </li>
            <li>
              <Link href="/program" className="block py-2 px-4 text-white hover:bg-green-700 rounded transition-colors">
                Program
              </Link>
            </li>
            <li>
              <Link href="/prestasi" className="block py-2 px-4 text-white hover:bg-green-700 rounded transition-colors">
                Prestasi
              </Link>
            </li>
            <li>
              <Link href="/galeri" className="block py-2 px-4 text-white hover:bg-green-700 rounded transition-colors">
                Galeri
              </Link>
            </li>
            <li>
              <Link href="/kontak" className="block py-2 px-4 text-white hover:bg-green-700 rounded transition-colors">
                Kontak
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}
