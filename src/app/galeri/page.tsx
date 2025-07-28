'use client';

import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const galleryItems = [
  { id: 1, title: 'Kejuaraan Sepak Bola Piala Gubernur', type: 'photo', category: 'olahraga' },
  { id: 2, title: 'Pembinaan Atlet Muda Sumbar', type: 'photo', category: 'olahraga' },
  { id: 3, title: 'Event Pemuda Kreatif 2024', type: 'photo', category: 'pemuda' },
  { id: 4, title: 'Highlight PON XXI Aceh-Sumut', type: 'video', category: 'olahraga' },
  { id: 5, title: 'Kompetisi Bulu Tangkis', type: 'photo', category: 'olahraga' },
  { id: 6, title: 'Workshop Kepemimpinan Pemuda', type: 'video', category: 'pemuda' },
  { id: 7, title: 'Turnamen Renang Tingkat Provinsi', type: 'photo', category: 'olahraga' },
  { id: 8, title: 'Festival Seni Budaya Pemuda', type: 'video', category: 'pemuda' },
  { id: 9, title: 'Kejuaraan Atletik Sumbar', type: 'photo', category: 'olahraga' },
  { id: 10, title: 'Pelatihan Wirausaha Muda', type: 'photo', category: 'pemuda' },
  { id: 11, title: 'Kompetisi E-Sport Regional', type: 'video', category: 'olahraga' },
  { id: 12, title: 'Seminar Kewirausahaan', type: 'photo', category: 'pemuda' },
];

export default function GaleriPage() {
  const [activeFilter, setActiveFilter] = useState('all');
  const [activeType, setActiveType] = useState('all');

  const filteredItems = galleryItems.filter(item => {
    const categoryMatch = activeFilter === 'all' || item.category === activeFilter;
    const typeMatch = activeType === 'all' || item.type === activeType;
    return categoryMatch && typeMatch;
  });

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-green-600 to-green-800 py-16">
          <div className="container mx-auto px-4 text-center text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Galeri Foto & Video
            </h1>
            <p className="text-xl text-green-100 max-w-2xl mx-auto">
              Dokumentasi kegiatan dan prestasi Dinas Pemuda dan Olahraga Sumatera Barat
            </p>
          </div>
        </section>

        {/* Filter Section */}
        <section className="py-8 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row gap-6 items-center justify-center">
              {/* Category Filter */}
              <div className="flex flex-wrap gap-2">
                <span className="text-gray-700 font-semibold mr-2">Kategori:</span>
                <button
                  onClick={() => setActiveFilter('all')}
                  className={`px-4 py-2 rounded-full font-semibold transition-colors ${
                    activeFilter === 'all'
                      ? 'bg-green-600 text-white'
                      : 'bg-white text-gray-600 hover:bg-green-100'
                  }`}
                >
                  Semua
                </button>
                <button
                  onClick={() => setActiveFilter('olahraga')}
                  className={`px-4 py-2 rounded-full font-semibold transition-colors ${
                    activeFilter === 'olahraga'
                      ? 'bg-green-600 text-white'
                      : 'bg-white text-gray-600 hover:bg-green-100'
                  }`}
                >
                  Olahraga
                </button>
                <button
                  onClick={() => setActiveFilter('pemuda')}
                  className={`px-4 py-2 rounded-full font-semibold transition-colors ${
                    activeFilter === 'pemuda'
                      ? 'bg-green-600 text-white'
                      : 'bg-white text-gray-600 hover:bg-green-100'
                  }`}
                >
                  Pemuda
                </button>
              </div>

              {/* Type Filter */}
              <div className="flex flex-wrap gap-2">
                <span className="text-gray-700 font-semibold mr-2">Tipe:</span>
                <button
                  onClick={() => setActiveType('all')}
                  className={`px-4 py-2 rounded-full font-semibold transition-colors ${
                    activeType === 'all'
                      ? 'bg-blue-600 text-white'
                      : 'bg-white text-gray-600 hover:bg-blue-100'
                  }`}
                >
                  Semua
                </button>
                <button
                  onClick={() => setActiveType('photo')}
                  className={`px-4 py-2 rounded-full font-semibold transition-colors ${
                    activeType === 'photo'
                      ? 'bg-blue-600 text-white'
                      : 'bg-white text-gray-600 hover:bg-blue-100'
                  }`}
                >
                  Foto
                </button>
                <button
                  onClick={() => setActiveType('video')}
                  className={`px-4 py-2 rounded-full font-semibold transition-colors ${
                    activeType === 'video'
                      ? 'bg-blue-600 text-white'
                      : 'bg-white text-gray-600 hover:bg-blue-100'
                  }`}
                >
                  Video
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Gallery Grid */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            {filteredItems.length === 0 ? (
              <div className="text-center py-12">
                <p className="text-gray-500 text-lg">Tidak ada item yang sesuai dengan filter</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {filteredItems.map((item) => (
                  <div key={item.id} className="group relative overflow-hidden rounded-lg shadow-md hover:shadow-lg transition-shadow cursor-pointer">
                    {/* Image/Video placeholder */}
                    <div className="aspect-video bg-gradient-to-br from-green-400 to-blue-500 flex items-center justify-center relative">
                      <span className="text-white text-4xl">
                        {item.type === 'video' ? '▶️' : '📷'}
                      </span>
                      
                      {/* Overlay */}
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors flex items-center justify-center">
                        <div className="opacity-0 group-hover:opacity-100 transition-opacity">
                          <span className="text-white text-3xl">
                            {item.type === 'video' ? '▶️' : '🔍'}
                          </span>
                        </div>
                      </div>

                      {/* Type Badge */}
                      <div className="absolute top-2 right-2">
                        <span className={`px-2 py-1 text-xs font-semibold rounded ${
                          item.type === 'video' 
                            ? 'bg-red-600 text-white' 
                            : 'bg-green-600 text-white'
                        }`}>
                          {item.type === 'video' ? 'VIDEO' : 'FOTO'}
                        </span>
                      </div>

                      {/* Category Badge */}
                      <div className="absolute top-2 left-2">
                        <span className={`px-2 py-1 text-xs font-semibold rounded ${
                          item.category === 'olahraga' 
                            ? 'bg-blue-600 text-white' 
                            : 'bg-purple-600 text-white'
                        }`}>
                          {item.category.toUpperCase()}
                        </span>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-4 bg-white">
                      <h3 className="font-semibold text-gray-800 group-hover:text-green-600 transition-colors line-clamp-2">
                        {item.title}
                      </h3>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Load More Button */}
            {filteredItems.length > 0 && (
              <div className="text-center mt-12">
                <button className="bg-green-600 hover:bg-green-700 text-white font-semibold px-8 py-3 rounded-lg transition-colors">
                  Muat Lebih Banyak
                </button>
              </div>
            )}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
