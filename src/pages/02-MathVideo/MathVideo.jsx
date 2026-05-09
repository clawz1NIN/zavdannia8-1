import PageTemplate from '../../components/PageTemplate';
import videoFile from './Таємниці_теореми_Піфагора.mp4';

const MathVideo = () => {
  return (
    <PageTemplate sectionId={2}>
      <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 md:p-12 border-2 border-gray-100 dark:border-gray-700 transition-colors">
        <h1 className="text-4xl font-bold text-center mb-8 text-purple-600 dark:text-purple-400">
          Таємниці теореми Піфагора
        </h1>

        <div className="bg-purple-50 dark:bg-purple-900/20 border-l-4 border-purple-500 dark:border-purple-400 p-6 rounded-lg mb-8">
          <div className="flex items-start gap-4">
            <div className="text-3xl">🎬</div>
            <div>
              <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-2">
                Навчальне відео з математики
              </h3>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                Відео з поясненням однієї з найвідоміших математичних теорем. Дізнайся про таємниці теореми Піфагора та її застосування.
              </p>
            </div>
          </div>
        </div>

        <div className="w-full bg-gray-100 dark:bg-gray-900 rounded-xl shadow-inner p-4 mb-6">
          <div className="bg-black rounded-lg overflow-hidden shadow-lg border-2 border-purple-200 dark:border-purple-700">
            <video
              controls
              className="w-full h-auto"
              preload="metadata"
              style={{ maxHeight: '600px' }}
            >
              <source src={videoFile} type="video/mp4" />
              Ваш браузер не підтримує відтворення відео.
            </video>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
          <a
            href={videoFile}
            download="Таємниці_теореми_Піфагора.mp4"
            className="inline-flex items-center gap-2 px-6 py-3 bg-purple-600 hover:bg-purple-700 dark:bg-purple-500 dark:hover:bg-purple-600 text-white font-semibold rounded-lg shadow-md transition-colors"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            Завантажити відео
          </a>
        </div>

        <div className="prose dark:prose-invert max-w-none">
          <div className="bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 rounded-xl p-6 border-2 border-purple-200 dark:border-purple-700">
            <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-4">
              📚 Про відео
            </h2>
            <ul className="space-y-3 text-gray-700 dark:text-gray-300">
              <li className="flex items-start gap-3">
                <span className="text-purple-600 dark:text-purple-400 font-bold text-xl">•</span>
                <span>Пояснення теореми Піфагора з прикладами</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-purple-600 dark:text-purple-400 font-bold text-xl">•</span>
                <span>Історія відкриття та застосування теореми</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-purple-600 dark:text-purple-400 font-bold text-xl">•</span>
                <span>Покрокове розв'язання задач</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-purple-600 dark:text-purple-400 font-bold text-xl">•</span>
                <span>Візуалізація математичних концепцій</span>
              </li>
            </ul>
          </div>

          <div className="mt-6 bg-white dark:bg-gray-800 rounded-xl p-6 border-2 border-purple-200 dark:border-purple-700">
            <h3 className="text-xl font-bold text-gray-800 dark:text-gray-200 mb-3">
              🔢 Теорема Піфагора
            </h3>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
              Одна з найвідоміших математичних теорем, яка стверджує, що в прямокутному трикутнику квадрат гіпотенузи дорівнює сумі квадратів катетів:
            </p>
            <div className="bg-purple-50 dark:bg-purple-900/20 rounded-lg p-4 text-center">
              <p className="text-2xl font-bold text-purple-700 dark:text-purple-300">
                a² + b² = c²
              </p>
            </div>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mt-4">
              де <span className="font-semibold">a</span> і <span className="font-semibold">b</span> — катети прямокутного трикутника, а <span className="font-semibold">c</span> — гіпотенуза.
            </p>
          </div>
        </div>
      </div>
    </PageTemplate>
  );
};

export default MathVideo;
