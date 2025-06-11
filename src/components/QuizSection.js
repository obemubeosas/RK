import React, { useState } from 'react';

function QuizSection() {
  const [answers, setAnswers] = useState({});
  const [showResults, setShowResults] = useState(false);

  const questions = [
    {
      id: 1,
      question: "1. Какое право гарантирует статья 14 Конституции РК?",
      options: [
        "Право на труд",
        "Право на жилище",
        "Право на свободу слова",
        "Право на образование"
      ],
      correctAnswer: 0
    },
    {
      id: 2,
      question: "2. С какого возраста гражданин РК может избирать?",
      options: [
        "С 16 лет",
        "С 18 лет",
        "С 21 года",
        "С 25 лет"
      ],
      correctAnswer: 1
    },
    {
      id: 3,
      question: "3. Какое право не закреплено в Конституции РК?",
      options: [
        "Право на охрану здоровья",
        "Право на свободу творчества",
        "Право на бесплатное высшее образование",
        "Право на получение информации"
      ],
      correctAnswer: 2
    }
  ];

  const handleAnswerSelect = (questionId, answerIndex) => {
    setAnswers(prev => ({
      ...prev,
      [questionId]: answerIndex
    }));
  };

  const handleSubmit = () => {
    setShowResults(true);
  };

  const handleReset = () => {
    setAnswers({});
    setShowResults(false);
  };

  const getAnswerClassName = (questionId, optionIndex) => {
    if (!showResults) {
      return answers[questionId] === optionIndex 
        ? 'bg-blue-100 border-blue-500' 
        : 'hover:bg-gray-50';
    }

    if (optionIndex === questions.find(q => q.id === questionId).correctAnswer) {
      return 'bg-green-100 border-green-500 text-green-800';
    }

    if (answers[questionId] === optionIndex) {
      return 'bg-red-100 border-red-500 text-red-800';
    }

    return 'opacity-50';
  };

  return (
    <div className="bg-gray-50 py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-blue-500 mb-4">
            Права и свободы граждан
          </h2>
          <h3 className="text-2xl font-bold text-gray-900 mb-8">
            Проверьте свои знания о конституционных правах
          </h3>
        </div>

        <div className="space-y-8">
          {questions.map((question) => (            <div key={question.id} className="bg-white rounded-xl shadow-md p-6 mb-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-6">
                {question.question}
              </h3><div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {question.options.map((option, index) => (
                  <button
                    key={index}
                    className={`text-left p-4 rounded-lg border-2 transition-all ${
                      getAnswerClassName(question.id, index)
                    }`}
                    onClick={() => !showResults && handleAnswerSelect(question.id, index)}
                    disabled={showResults}
                  >
                    {option}
                  </button>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 text-center">
          {!showResults ? (            <button
              className="bg-blue-500 text-white px-12 py-3 rounded-full hover:bg-blue-600 transition-colors text-lg font-medium"
              onClick={handleSubmit}
              disabled={Object.keys(answers).length !== questions.length}
            >
              Проверить ответы
            </button>
          ) : (
            <div className="space-y-4">
              <p className="text-lg font-medium text-gray-900">
                Правильных ответов: {
                  questions.filter(q => q.correctAnswer === answers[q.id]).length
                } из {questions.length}
              </p>
              <button
                className="bg-gray-600 text-white px-8 py-3 rounded-lg hover:bg-gray-700 transition-colors"
                onClick={handleReset}
              >
                Попробовать снова
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default QuizSection;
