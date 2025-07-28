'use client';

import { useState } from 'react';
import Link from 'next/link';

const galleryItems = [
  {
    id: 1,
    title: 'Kejuaraan Sepak Bola Piala Gubernur',
    type: 'photo',
    thumbnail: '/placeholder-gallery1.jpg',
  },
  {
    id: 2,
    title: 'Pembinaan Atlet Muda Sumbar',
    type: 'photo',
    thumbnail: '/placeholder-gallery2.jpg',
  },
  {
    id: 3,
    title: 'Event Pemuda Kreatif 2024',
    type: 'photo',
    thumbnail: '/placeholder-gallery3.jpg',
  },
  {
    id: 4,
    title: 'Highlight PON XXI Aceh-Sumut',
    type: 'video',
    thumbnail: '/placeholder-gallery4.jpg',
  },
  {
    id: 5,
    title: 'Kompetisi Bulu Tangkis',
    type: 'photo',
    thumbnail: '/placeholder-gallery5.jpg',
  },
  {
    id: 6,
    title: 'Workshop Kepemimpinan Pemuda',
    type: 'video',
    thumbnail: '/placeholder-gallery6.jpg',
  },
];

export default function GallerySection() {
  const [activeTab, setActiveTab] = useState('all');

  const filteredItems = galleryItems.filter(item => 
    activeTab === 'all' || item.type === activeTab
  );

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Galeri Foto & Video
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto mb-8">
            Dokumentasi kegiatan dan prestasi Dinas Pemuda dan Olahraga Sumbar
          </p>

          {/* Filter Tabs */}
          <div className="flex justify-center space-x-4 mb-8">
            <button
              onClick={() => setActiveTab('all')}
              className={`px-6 py-2 rounded-full font-semibold transition-colors ${
                activeTab === 'all'
                  ? 'bg-green-600 text-white'
                  : 'bg-white text-gray-600 hover:bg-green-100'
              }`}
            >
              Semua
            </button>
            <button
              onClick={() => setActiveTab('photo')}
              className={`px-6 py-2 rounded-full font-semibold transition-colors ${
                activeTab === 'photo'
                  ? 'bg-green-600 text-white'
                  : 'bg-white text-gray-600 hover:bg-green-100'
              }`}
            >
              Foto
            </button>
            <button
              onClick={() => setActiveTab('video')}
              className={`px-6 py-2 rounded-full font-semibold transition-colors ${
                activeTab === 'video'
                  ? 'bg-green-600 text-white'
                  : 'bg-white text-gray-600 hover:bg-green-100'
              }`}
            >
              Video
            </button>
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
          {filteredItems.map((item) => (
            <div key={item.id} className="group relative overflow-hidden rounded-lg shadow-md hover:shadow-lg transition-shadow">
              {/* Placeholder for image */}
              <div className="aspect-video bg-gradient-to-br from-green-400 to-blue-500 flex items-center justify-center relative">
                <span className="text-white text-4xl">
                  {item.type === 'video' ? '▶️' : '📷'}
                </span>
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors flex items-center justify-center">
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity">
                    <span className="text-white text-2xl">
                      {item.type === 'video' ? '▶️' : '🔍'}
                    </span>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-4 bg-white">
                <h3 className="font-semibold text-gray-800 group-hover:text-green-600 transition-colors">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-500 mt-1">
                  {item.type === 'video' ? 'Video' : 'Foto'}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center">
          <Link 
            href="/galeri"
            className="inline-block bg-green-600 hover:bg-green-700 text-white font-semibold px-8 py-3 rounded-lg transition-colors"
          >
            Lihat Semua Galeri
          </Link>
        </div>
      </div>
    </section>
  );
}
