import { Link } from 'react-router-dom';
import { sections } from '../data/sections';

const PageTemplate = ({ 
  sectionId, 
  children, 
  showNavigation = true 
}) => {
  const currentSection = sections.find(s => s.id === sectionId);
  const otherSections = sections.filter(s => s.id !== sectionId);

  if (!currentSection) return null;

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 transition-colors">
      <div className="container mx-auto px-4 py-12">
        {/* Breadcrumb */}
        <nav className="mb-8">
          <Link 
            to="/" 
            className="inline-flex items-center text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors font-medium"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Повернутися на головну
          </Link>
        </nav>

        {/* Page Header */}
        <div className="max-w-5xl mx-auto mb-12">
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden border-2 border-gray-100 dark:border-gray-700 transition-colors">
            <div className={`${currentSection.color} h-2`}></div>
            <div className="p-8 md:p-12">
              <div className="flex items-start gap-6 mb-6">
                <div className="text-7xl">{currentSection.icon}</div>
                <div className="flex-1">
                  <div className={`inline-block px-4 py-1 ${currentSection.color} text-white text-sm font-semibold rounded-full mb-3`}>
                    Пункт {currentSection.id} з 8
                  </div>
                  <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-gray-100 mb-4">
                    {currentSection.title}
                  </h1>
                  <p className="text-xl text-gray-600 dark:text-gray-400 leading-relaxed">
                    {currentSection.description}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Content Area */}
        <div className="max-w-5xl mx-auto mb-12">
          {children}
        </div>

        {/* Navigation to Other Sections */}
        {showNavigation && (
          <div className="max-w-5xl mx-auto">
            <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-6 text-center">
              📚 Інші розділи проєкту
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {otherSections.map((section) => (
                <Link
                  key={section.id}
                  to={section.path}
                  className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md hover:shadow-xl transition-all transform hover:-translate-y-1 border-2 border-gray-100 dark:border-gray-700 hover:border-gray-200 dark:hover:border-gray-600"
                >
                  <div className={`${section.color} h-1 w-12 rounded-full mb-3`}></div>
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-3xl">{section.icon}</span>
                    <span className="text-sm font-semibold text-gray-500 dark:text-gray-400">Пункт {section.id}</span>
                  </div>
                  <h3 className="font-semibold text-gray-800 dark:text-gray-200 text-sm leading-tight">
                    {section.title}
                  </h3>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default PageTemplate;
