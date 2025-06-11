import React from 'react';

function ConstitutionSection({ title, description, image, articles }) {
  return (    <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1 flex flex-col h-full">
      <div 
        className="h-48 bg-cover bg-center" 
        style={{ 
          backgroundImage: `url(${image || '/images/constitution-bg.jpg'})`,
          backgroundColor: '#f3f4f6' 
        }}
      />
      <div className="p-6 flex-1 flex flex-col">
        <h2 className="text-2xl font-bold text-gray-900 mb-3">{title}</h2>
        <p className="text-gray-600 mb-4">{description}</p>
        {articles && (
          <div className="mb-4 flex-1">
            <h3 className="text-sm font-semibold text-gray-500 mb-2">
              Статьи в разделе:
            </h3>
            <div className="space-y-1">
              {articles.map((article, index) => (
                <p key={index} className="text-sm text-gray-600">
                  • {article}
                </p>
              ))}
            </div>
          </div>
        )}
        <div className="flex space-x-3 mt-4">
          <button className="flex-1 bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors">
            Читать раздел
          </button>
          <button className="flex items-center justify-center w-10 h-10 rounded-lg border border-gray-200 hover:border-blue-600 hover:text-blue-600 transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}

export default ConstitutionSection;
