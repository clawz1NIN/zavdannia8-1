import PageTemplate from '../../components/PageTemplate';

const SciFiStory = () => {
  return (
    <PageTemplate sectionId={6}>
      <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 md:p-12 border-2 border-gray-100 dark:border-gray-700 transition-colors">
        <div className="bg-indigo-50 dark:bg-indigo-900/20 border-l-4 border-indigo-500 dark:border-indigo-400 p-6 rounded-lg mb-8">
          <div className="flex items-start gap-4">
            <div className="text-3xl">📝</div>
            <div>
              <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-2">
                Контент у розробці
              </h3>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                Тут буде розміщено короткий науково-фантастичний твір. 
                Поринь у світ фантастики та наукових можливостей майбутнього.
              </p>
            </div>
          </div>
        </div>

        <div className="prose dark:prose-invert max-w-none">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-4">Що буде на цій сторінці:</h2>
          <ul className="space-y-3 text-gray-700 dark:text-gray-300">
            <li className="flex items-start gap-3">
              <span className="text-indigo-600 dark:text-indigo-400 font-bold">•</span>
              <span>Оригінальний науково-фантастичний твір</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-indigo-600 dark:text-indigo-400 font-bold">•</span>
              <span>Цікавий сюжет про майбутнє</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-indigo-600 dark:text-indigo-400 font-bold">•</span>
              <span>Наукові концепції в художній формі</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-indigo-600 dark:text-indigo-400 font-bold">•</span>
              <span>Ілюстрації та візуалізації</span>
            </li>
          </ul>
        </div>
      </div>
    </PageTemplate>
  );
};

export default SciFiStory;
