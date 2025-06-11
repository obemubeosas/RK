import React from 'react';
import Navbar from './components/Navbar';
import Header from './components/Header';
import ImageCarousel from './components/ImageCarousel';
import ConstitutionSection from './components/ConstitutionSection';
import Timeline from './components/Timeline';
import SearchSection from './components/SearchSection';
import QuizSection from './components/QuizSection';
import Footer from './components/Footer';

function App() {
  const sections = [
    {
      title: 'Раздел I',
      description: 'Общие положения',
      articles: [
        'Статья 1. Демократическое, светское, правовое и социальное государство',
        'Статья 2. Унитарное государство, президентская форма правления',
        'Статья 3. Государственная власть',
        'Статья 4. Действующее право'
      ],
      image: '/images/section1.jpg'
    },
    {
      title: 'Права и свободы',
      description: 'Основные права и свободы граждан',
      articles: [
        'Право на жизнь и личную свободу',
        'Право на неприкосновенность частной жизни',
        'Право на свободу слова и творчества',
        'Право на образование и здравоохранение'
      ],
      image: '/images/rights.jpg'
    },
    {
      title: 'Раздел II',
      description: 'Человек и гражданин',
      articles: [
        'Статья 10. Гражданство Республики Казахстан',
        'Статья 12. Права и свободы человека',
        'Статья 15. Право на жизнь',
        'Статья 20. Свобода слова'
      ],
      image: '/images/section2.jpg'
    },
    {
      title: 'Раздел III',
      description: 'Президент Республики Казахстан',
      articles: [
        'Статья 40. Статус Президента РК',
        'Статья 41. Избрание Президента РК',
        'Статья 44. Полномочия Президента',
        'Статья 45. Право законодательной инициативы'
      ],
      image: '/images/section3.jpg'
    },
    {
      title: 'Раздел IV',
      description: 'Парламент',
      articles: [
        'Статья 49. Парламент РК',
        'Статья 50. Состав Парламента',
        'Статья 54. Совместные заседания Палат',
        'Статья 55. Полномочия Сената'
      ],
      image: '/images/section4.jpg'
    },
    {
      title: 'Раздел V',
      description: 'Правительство',
      articles: [
        'Статья 64. Статус Правительства',
        'Статья 65. Полномочия Правительства',
        'Статья 66. Премьер-Министр РК',
        'Статья 67. Организация деятельности Правительства'
      ],
      image: '/images/section5.jpg'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      <Header />
      <ImageCarousel />
      <SearchSection />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
          Разделы Конституции
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {sections.map((section, index) => (
            <ConstitutionSection
              key={index}
              title={section.title}
              description={section.description}
              articles={section.articles}
              image={section.image}
            />
          ))}
        </div>
      </main>
      <QuizSection />
      <Timeline />
      <Footer />
    </div>
  );
}

export default App;
