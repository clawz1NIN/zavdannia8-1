const Home = () => {
  const technologies = [
    { name: 'Vite', icon: '⚡', color: 'text-purple-600 dark:text-purple-400' },
    { name: 'React', icon: '⚛️', color: 'text-blue-600 dark:text-blue-400' },
    { name: 'Tailwind CSS', icon: '🎨', color: 'text-cyan-600 dark:text-cyan-400' },
    { name: 'React Router', icon: '🛣️', color: 'text-orange-600 dark:text-orange-400' },
    { name: 'GitHub', icon: '🐙', color: 'text-gray-800 dark:text-gray-300' },
    { name: 'Cloudflare Pages', icon: '☁️', color: 'text-orange-500 dark:text-orange-400' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 transition-colors">
      {/* Hero Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          {/* Main Title */}
          <div className="mb-8">
            <h1 className="text-6xl md:text-7xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 dark:from-blue-400 dark:via-purple-400 dark:to-pink-400 bg-clip-text text-transparent mb-4">
              Проєкт - завдання 8.1
            </h1>
            <div className="h-1 w-32 bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 mx-auto rounded-full"></div>
          </div>

          {/* Authors */}
          <div className="mb-8">
            <p className="text-gray-600 dark:text-gray-400 text-lg mb-3">Автори проєкту:</p>
            <div className="flex flex-wrap justify-center gap-4">
              <div className="bg-white dark:bg-gray-800 px-6 py-3 rounded-full shadow-md border-2 border-blue-100 dark:border-blue-900 hover:border-blue-300 dark:hover:border-blue-700 transition-all">
                <span className="font-semibold text-gray-800 dark:text-gray-200">👨‍💻 Казанніков Артем</span>
              </div>
              <div className="bg-white dark:bg-gray-800 px-6 py-3 rounded-full shadow-md border-2 border-purple-100 dark:border-purple-900 hover:border-purple-300 dark:hover:border-purple-700 transition-all">
                <span className="font-semibold text-gray-800 dark:text-gray-200">👨‍💻 Компаній Юрій</span>
              </div>
            </div>
          </div>

          {/* Description */}
          <p className="text-xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed mb-8">
            Навчальний сайт-портфоліо з 8 різноманітними освітніми матеріалами: 
            від фізики та математики до історії, логіки та творчих робіт.
          </p>

          {/* GitHub Button */}
          <a
            href="https://github.com/clawz1NIN/zavdannia8-1"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-gray-900 dark:bg-gray-700 text-white px-8 py-4 rounded-full font-semibold hover:bg-gray-800 dark:hover:bg-gray-600 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
            </svg>
            <span>Переглянути на GitHub</span>
          </a>
        </div>

        {/* Technologies Section */}
        <div className="max-w-5xl mx-auto mb-16">
          <h2 className="text-3xl font-bold text-center text-gray-800 dark:text-gray-200 mb-8">
            🛠️ Використані технології
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {technologies.map((tech, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md hover:shadow-xl transition-all transform hover:-translate-y-2 text-center border-2 border-gray-100 dark:border-gray-700 hover:border-gray-200 dark:hover:border-gray-600"
              >
                <div className={`text-4xl mb-2 ${tech.color}`}>{tech.icon}</div>
                <p className="font-semibold text-gray-800 dark:text-gray-200 text-sm">{tech.name}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Info Section */}
        <div className="max-w-4xl mx-auto mt-16">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-700 dark:to-purple-700 rounded-2xl p-8 text-white shadow-2xl">
            <h2 className="text-3xl font-bold mb-4 text-center">
              💡 Про цей проєкт
            </h2>
            <p className="text-lg text-center leading-relaxed opacity-95">
              Цей сайт створено як демонстрацію різноманітних форматів навчальних матеріалів. 
              Кожен розділ містить унікальний контент, що допомагає в освітньому процесі. 
              Проєкт розроблено з використанням сучасних веб-технологій та розміщено на Cloudflare Pages.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
