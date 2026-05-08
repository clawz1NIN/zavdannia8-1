import PageTemplate from '../../components/PageTemplate';

const Logic = () => {
  return (
    <PageTemplate sectionId={4}>
      <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 md:p-12 border-2 border-gray-100 dark:border-gray-700 transition-colors">
        <div className="bg-green-50 dark:bg-green-900/20 border-l-4 border-green-500 dark:border-green-400 p-6 rounded-lg mb-8">
          <div className="flex items-start gap-4">
            <div className="text-3xl">📝</div>
            <div>
              <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-2">
                Контент у розробці
              </h3>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                Тут буде розміщено алгоритм для логічної задачі з візуалізацією блок-схеми. 
                Навчіться розв'язувати логічні задачі покроково.
              </p>
            </div>
          </div>
        </div>

        <div className="prose dark:prose-invert max-w-none">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-4">Що буде на цій сторінці:</h2>
          <ul className="space-y-3 text-gray-700 dark:text-gray-300">
            <li className="flex items-start gap-3">
              <span className="text-green-600 dark:text-green-400 font-bold">•</span>
              <span>Логічна задача з поясненням</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-green-600 dark:text-green-400 font-bold">•</span>
              <span>Візуалізація блок-схеми алгоритму</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-green-600 dark:text-green-400 font-bold">•</span>
              <span>Покрокове розв'язання</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-green-600 dark:text-green-400 font-bold">•</span>
              <span>Інтерактивна демонстрація</span>
            </li>
          </ul>
        </div>
      </div>
    </PageTemplate>
  );
};

export default Logic;
