import React from 'react';

function Header() {
  return (
    <>
      <header className="bg-gradient-to-r from-blue-500 to-green-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 animate-fade-in">
            Виртуальный тур по Конституции РК
          </h1>
          <p className="text-xl opacity-90 max-w-3xl mx-auto mb-8">
            Интерактивное путешествие по основному закону Республики Казахстан
          </p>
          <div className="space-x-4">
            <button className="bg-white text-blue-600 hover:bg-blue-50 px-8 py-3 rounded-full font-semibold transition-all transform hover:scale-105">
              Начать тур
            </button>
            <button className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-3 rounded-full font-semibold transition-all">
              Узнать больше
            </button>
          </div>
        </div>
      </header>
      
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            Изучайте Конституцию в интерактивном формате
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-12">
            Погрузитесь в изучение основного закона страны с помощью современных технологий и удобного интерфейса
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 bg-blue-50 rounded-xl">
              <div className="text-blue-600 text-4xl mb-4">📖</div>
              <h3 className="text-xl font-semibold mb-2">Понятный формат</h3>
              <p className="text-gray-600">Простое и доступное изложение сложных юридических терминов</p>
            </div>
            <div className="p-6 bg-green-50 rounded-xl">
              <div className="text-green-600 text-4xl mb-4">🎯</div>
              <h3 className="text-xl font-semibold mb-2">Интерактивность</h3>
              <p className="text-gray-600">Тесты, викторины и практические задания для лучшего усвоения</p>
            </div>
            <div className="p-6 bg-purple-50 rounded-xl">
              <div className="text-purple-600 text-4xl mb-4">🚀</div>
              <h3 className="text-xl font-semibold mb-2">Актуальность</h3>
              <p className="text-gray-600">Регулярные обновления с учетом последних изменений</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
