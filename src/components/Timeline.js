import React from 'react';

function Timeline() {
  const events = [
    {
      year: '1995',
      title: 'Принятие действующей Конституции',
      description: 'На республиканском референдуме была принята ныне действующая Конституция РК'
    },
    {
      year: '1998',
      title: 'Первые изменения',
      description: 'Внесены изменения в 19 статей Конституции'
    },
    {
      year: '2007',
      title: 'Конституционная реформа',
      description: 'Переход к пропорциональной избирательной системе'
    },
    {
      year: '2017',
      title: 'Перераспределение полномочий',
      description: 'Усиление роли Парламента и передача части президентских полномочий'
    },
    {
      year: '2022',
      title: 'Новый Казахстан',
      description: 'Конституционная реформа, направленная на демократизацию'
    }
  ];

  return (
    <div className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
          История Конституции РК
        </h2>
        <div className="relative">
          {/* Вертикальная линия */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-blue-600"/>
          
          <div className="space-y-12">
            {events.map((event, index) => (
              <div key={index} className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                <div className="w-1/2"/>
                <div className="absolute left-1/2 transform -translate-x-1/2 flex items-center justify-center">
                  <div className="w-8 h-8 rounded-full bg-blue-600 border-4 border-white shadow"/>
                </div>
                <div className={`w-1/2 p-6 bg-white rounded-xl shadow-lg transform transition-all hover:-translate-y-1 hover:shadow-xl ${
                  index % 2 === 0 ? 'text-right mr-8' : 'text-left ml-8'
                }`}>
                  <span className="inline-block px-4 py-1 rounded-full text-sm font-semibold bg-blue-100 text-blue-600 mb-2">
                    {event.year}
                  </span>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {event.title}
                  </h3>
                  <p className="text-gray-600">
                    {event.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Timeline;
