import PageTemplate from '../../components/PageTemplate';
import logicImage from './ChatGPT Image.png';

const Logic = () => {
  return (
    <PageTemplate sectionId={4}>
      <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 md:p-12 border-2 border-gray-100 dark:border-gray-700 transition-colors">
        <h1 className="text-4xl font-bold text-center mb-8 text-green-600 dark:text-green-400">
          Логічна задача з алгоритмом
        </h1>

        <div className="bg-green-50 dark:bg-green-900/20 border-l-4 border-green-500 dark:border-green-400 p-6 rounded-lg mb-8">
          <div className="flex items-start gap-4">
            <div className="text-3xl">🧩</div>
            <div>
              <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-2">
                Алгоритм розв'язання логічної задачі
              </h3>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                Візуалізація блок-схеми алгоритму для розв'язання логічної задачі. Навчіться розв'язувати задачі покроково.
              </p>
            </div>
          </div>
        </div>

        <div className="flex justify-center my-8">
          <img 
            src={logicImage} 
            alt="Блок-схема логічного алгоритму" 
            className="rounded-xl shadow-lg max-w-full h-auto border-4 border-green-200 dark:border-green-800"
          />
        </div>

        <div className="prose dark:prose-invert max-w-none">
          <div className="bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 rounded-xl p-6 border-2 border-green-200 dark:border-green-700">
            <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-4">
              📊 Про блок-схему
            </h2>
            <ul className="space-y-3 text-gray-700 dark:text-gray-300">
              <li className="flex items-start gap-3">
                <span className="text-green-600 dark:text-green-400 font-bold text-xl">•</span>
                <span>Візуалізація алгоритму розв'язання логічної задачі</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-green-600 dark:text-green-400 font-bold text-xl">•</span>
                <span>Покрокове представлення логіки рішення</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-green-600 dark:text-green-400 font-bold text-xl">•</span>
                <span>Структурований підхід до вирішення проблеми</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-green-600 dark:text-green-400 font-bold text-xl">•</span>
                <span>Наочне представлення алгоритмічного мислення</span>
              </li>
            </ul>
          </div>

          <div className="mt-6 bg-white dark:bg-gray-800 rounded-xl p-6 border-2 border-green-200 dark:border-green-700">
            <h3 className="text-xl font-bold text-gray-800 dark:text-gray-200 mb-3">
              🎯 Основні елементи блок-схеми
            </h3>
            <div className="space-y-4 text-gray-700 dark:text-gray-300">
              <div className="flex items-start gap-3">
                <span className="text-2xl">⬭</span>
                <div>
                  <p className="font-semibold">Початок/Кінець</p>
                  <p className="text-sm">Овальні блоки позначають початок та завершення алгоритму</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-2xl">▭</span>
                <div>
                  <p className="font-semibold">Процес</p>
                  <p className="text-sm">Прямокутні блоки представляють дії або операції</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-2xl">◇</span>
                <div>
                  <p className="font-semibold">Умова</p>
                  <p className="text-sm">Ромбовидні блоки показують точки прийняття рішень</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-2xl">→</span>
                <div>
                  <p className="font-semibold">Стрілки</p>
                  <p className="text-sm">Вказують напрямок виконання алгоритму</p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-6 bg-green-50 dark:bg-green-900/20 rounded-xl p-6 border-2 border-green-200 dark:border-green-700">
            <h3 className="text-xl font-bold text-gray-800 dark:text-gray-200 mb-3">
              💡 Переваги використання блок-схем
            </h3>
            <ul className="space-y-2 text-gray-700 dark:text-gray-300">
              <li className="flex items-start gap-2">
                <span className="text-green-600 dark:text-green-400">✓</span>
                <span>Полегшують розуміння складних алгоритмів</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-600 dark:text-green-400">✓</span>
                <span>Допомагають виявити помилки в логіці</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-600 dark:text-green-400">✓</span>
                <span>Спрощують комунікацію між розробниками</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-600 dark:text-green-400">✓</span>
                <span>Служать документацією для програмного коду</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </PageTemplate>
  );
};

export default Logic;
