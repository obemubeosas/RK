import React, { useState } from 'react';

function ImageCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = [
    {
      src: '/images/carousel/image1.jpg',
      alt: 'Конституционные права',
      title: 'Виртуальный тур по Конституции'
    },
    {
      src: '/images/carousel/image2.jpg',
      alt: 'Права граждан',
      title: 'Основные права и свободы'
    },
    {
      src: '/images/carousel/image3.jpg',
      alt: 'Государственное устройство',
      title: 'Структура государственной власти'
    },
    {
      src: '/images/carousel/image4.jpg',
      alt: 'Законодательство',
      title: 'Правовая система РК'
    }
  ];

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className="relative w-full max-w-5xl mx-auto mb-12 mt-8">
      <div className="relative aspect-video rounded-2xl overflow-hidden shadow-xl">
        <img
          src={images[currentIndex].src}
          alt={images[currentIndex].alt}
          className="w-full h-full object-cover"
        />
        
        {/* Overlay с затемнением */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>

        {/* Заголовок */}
        <h2 className="absolute bottom-8 left-8 text-white text-3xl font-bold">
          {images[currentIndex].title}
        </h2>

        {/* Кнопки навигации */}
        <div className="absolute bottom-8 right-8 flex space-x-2">
          <button
            onClick={prevSlide}
            className="w-10 h-10 rounded-full bg-white/20 hover:bg-white/30 backdrop-blur-sm flex items-center justify-center text-white transition-all"
            aria-label="Предыдущий слайд"
          >
            ←
          </button>
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-10 h-10 rounded-full backdrop-blur-sm flex items-center justify-center transition-all ${
                currentIndex === index
                  ? 'bg-white text-blue-600'
                  : 'bg-white/20 hover:bg-white/30 text-white'
              }`}
            >
              {index === currentIndex ? '•' : '-'}
            </button>
          ))}
          <button
            onClick={nextSlide}
            className="w-10 h-10 rounded-full bg-white/20 hover:bg-white/30 backdrop-blur-sm flex items-center justify-center text-white transition-all"
            aria-label="Следующий слайд"
          >
            →
          </button>
        </div>
      </div>

      {/* Кнопки действий */}
      <div className="flex justify-center space-x-4 mt-8">
        <button className="px-8 py-3 bg-blue-500 text-white rounded-full font-medium hover:bg-blue-600 transition-colors">
          Читать Конституцию
        </button>
        <button className="px-8 py-3 bg-white text-blue-500 rounded-full font-medium border-2 border-blue-500 hover:bg-blue-50 transition-colors">
          Дополнительные материалы
        </button>
      </div>
    </div>
  );
}

export default ImageCarousel;
