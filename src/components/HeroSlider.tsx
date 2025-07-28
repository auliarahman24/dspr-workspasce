'use client';

import { useState, useEffect } from 'react';

const slides = [
  {
    id: 1,
    image: '/placeholder-slide1.jpg',
    title: 'Membangun Generasi Pemuda Berprestasi',
    description: 'Dinas Pemuda dan Olahraga Sumbar berkomitmen mengembangkan potensi pemuda untuk kemajuan daerah',
  },
  {
    id: 2,
    image: '/placeholder-slide2.jpg',
    title: 'Prestasi Olahraga Sumatera Barat',
    description: 'Mendukung atlet-atlet berbakat untuk meraih prestasi di tingkat nasional dan internasional',
  },
  {
    id: 3,
    image: '/placeholder-slide3.jpg',
    title: 'Event dan Kompetisi Berkualitas',
    description: 'Menyelenggarakan berbagai event dan kompetisi untuk meningkatkan semangat sportivitas',
  },
];

export default function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="relative h-96 md:h-[500px] overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
        >
          {/* Background with gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-green-800/70 to-green-600/50 z-10"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/30 z-10"></div>
          
          {/* Background pattern or color since we don't have actual images */}
          <div className={`absolute inset-0 ${
            index === 0 ? 'bg-gradient-to-br from-green-600 to-green-800' :
            index === 1 ? 'bg-gradient-to-br from-blue-600 to-blue-800' :
            'bg-gradient-to-br from-yellow-600 to-orange-800'
          }`}></div>

          {/* Content */}
          <div className="relative z-20 h-full flex items-center">
            <div className="container mx-auto px-4">
              <div className="max-w-2xl text-white">
                <h1 className="text-3xl md:text-5xl font-bold mb-4 leading-tight">
                  {slide.title}
                </h1>
                <p className="text-lg md:text-xl mb-8 text-gray-100">
                  {slide.description}
                </p>
                <div className="flex space-x-4">
                  <button className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold px-6 py-3 rounded-lg transition-colors">
                    Pelajari Lebih Lanjut
                  </button>
                  <button className="border-2 border-white text-white hover:bg-white hover:text-green-800 font-semibold px-6 py-3 rounded-lg transition-colors">
                    Kontak Kami
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 z-30 bg-black/30 hover:bg-black/50 text-white p-2 rounded-full transition-colors"
      >
        ←
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 z-30 bg-black/30 hover:bg-black/50 text-white p-2 rounded-full transition-colors"
      >
        →
      </button>

      {/* Dots Indicator */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-30 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-colors ${
              index === currentSlide ? 'bg-yellow-400' : 'bg-white/50'
            }`}
          />
        ))}
      </div>
    </div>
  );
}
