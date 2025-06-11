import React, { useState } from 'react';

function SearchSection() {
  const [searchQuery, setSearchQuery] = useState('');
  const [isSearchFocused, setIsSearchFocused] = useState(false);

  return (
    <div className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Поиск по Конституции
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Быстрый поиск статей, терминов и положений в тексте Конституции РК
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className={`relative transition-all duration-300 ${
            isSearchFocused ? 'transform -translate-y-2' : ''
          }`}>
            <div className="relative">
              <input
                type="text"
                className="w-full px-6 py-4 text-lg rounded-full border-2 border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all outline-none"
                placeholder="Введите ключевое слово или номер статьи..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onFocus={() => setIsSearchFocused(true)}
                onBlur={() => setIsSearchFocused(false)}
              />
              <button className="absolute right-3 top-1/2 transform -translate-y-1/2 bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition-colors">
                Найти
              </button>
            </div>
            
            <div className="absolute w-full bg-white mt-2 rounded-2xl shadow-xl p-4 space-y-3">
              <div className="text-sm text-gray-500 font-medium">
                Популярные запросы:
              </div>
              <div className="flex flex-wrap gap-2">
                <button className="px-3 py-1 bg-gray-100 hover:bg-gray-200 rounded-full text-sm text-gray-600 transition-colors">
                  Права человека
                </button>
                <button className="px-3 py-1 bg-gray-100 hover:bg-gray-200 rounded-full text-sm text-gray-600 transition-colors">
                  Гражданство
                </button>
                <button className="px-3 py-1 bg-gray-100 hover:bg-gray-200 rounded-full text-sm text-gray-600 transition-colors">
                  Выборы
                </button>
                <button className="px-3 py-1 bg-gray-100 hover:bg-gray-200 rounded-full text-sm text-gray-600 transition-colors">
                  Правительство
                </button>
              </div>
            </div>
          </div>

          <div className="mt-8 text-center">
            <p className="text-sm text-gray-500">
              Например: "права граждан", "статья 1", "полномочия президента"
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SearchSection;
