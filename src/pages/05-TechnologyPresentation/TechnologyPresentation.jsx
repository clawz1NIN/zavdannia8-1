import PageTemplate from '../../components/PageTemplate';
import presentationPdf from './Architecting_Digital_Inevitability.pdf';

const TechnologyPresentation = () => {
  return (
    <PageTemplate sectionId={5}>
      <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 md:p-12 border-2 border-gray-100 dark:border-gray-700 transition-colors">
        <h1 className="text-4xl font-bold text-center mb-8 text-cyan-600 dark:text-cyan-400">
          Презентація: Вплив технологій на суспільство
        </h1>

        <div className="bg-cyan-50 dark:bg-cyan-900/20 border-l-4 border-cyan-500 dark:border-cyan-400 p-6 rounded-lg mb-8">
          <div className="flex items-start gap-4">
            <div className="text-3xl">📊</div>
            <div>
              <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-2">
                Architecting Digital Inevitability
              </h3>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                Дізнайтеся, як сучасні технології змінюють наше життя та формують майбутнє суспільства.
              </p>
            </div>
          </div>
        </div>

        <div className="w-full bg-gray-100 dark:bg-gray-900 rounded-xl shadow-inner p-4 mb-6">
          <div className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg border-2 border-cyan-200 dark:border-cyan-700">
            <iframe
              src={presentationPdf}
              className="w-full h-[600px] md:h-[700px] lg:h-[800px]"
              title="Technology Presentation"
              style={{ border: 'none' }}
            />
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a
            href={presentationPdf}
            download="Architecting_Digital_Inevitability.pdf"
            className="inline-flex items-center gap-2 px-6 py-3 bg-cyan-600 hover:bg-cyan-700 dark:bg-cyan-500 dark:hover:bg-cyan-600 text-white font-semibold rounded-lg shadow-md transition-colors"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            Завантажити презентацію
          </a>
          
          <a
            href={presentationPdf}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-gray-600 hover:bg-gray-700 dark:bg-gray-500 dark:hover:bg-gray-600 text-white font-semibold rounded-lg shadow-md transition-colors"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
            Відкрити в новій вкладці
          </a>
        </div>

        <div className="mt-8 prose dark:prose-invert max-w-none">
          <div className="bg-gradient-to-r from-cyan-50 to-blue-50 dark:from-cyan-900/20 dark:to-blue-900/20 rounded-xl p-6 border-2 border-cyan-200 dark:border-cyan-700">
            <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-4">
              💡 Про презентацію
            </h2>
            <ul className="space-y-3 text-gray-700 dark:text-gray-300">
              <li className="flex items-start gap-3">
                <span className="text-cyan-600 dark:text-cyan-400 font-bold text-xl">•</span>
                <span>Аналіз впливу технологій на сучасне суспільство</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-cyan-600 dark:text-cyan-400 font-bold text-xl">•</span>
                <span>Приклади цифрової трансформації</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-cyan-600 dark:text-cyan-400 font-bold text-xl">•</span>
                <span>Позитивні та негативні аспекти технологічного прогресу</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-cyan-600 dark:text-cyan-400 font-bold text-xl">•</span>
                <span>Прогнози та тенденції майбутнього</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </PageTemplate>
  );
};

export default TechnologyPresentation;
