import PageTemplate from '../../components/PageTemplate';

const History = () => {
  return (
    <PageTemplate sectionId={3}>
      <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 md:p-12 border-2 border-gray-100 dark:border-gray-700 transition-colors">
        <div className="bg-amber-50 dark:bg-amber-900/20 border-l-4 border-amber-500 dark:border-amber-400 p-6 rounded-lg mb-8">
          <div className="flex items-start gap-4">
            <div className="text-3xl">📝</div>
            <div>
              <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-2">
                Контент у розробці
              </h3>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                Тут буде розміщено короткий історичний огляд події або постаті. 
                Дізнайтеся про важливі історичні факти та персоналії.
              </p>
            </div>
          </div>
        </div>

        <div className="prose dark:prose-invert max-w-none">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-4">Що буде на цій сторінці:</h2>
          <ul className="space-y-3 text-gray-700 dark:text-gray-300">
            <li className="flex items-start gap-3">
              <span className="text-amber-600 dark:text-amber-400 font-bold">•</span>
              <span>Огляд історичної події або постаті</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-amber-600 dark:text-amber-400 font-bold">•</span>
              <span>Важливі факти та дати</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-amber-600 dark:text-amber-400 font-bold">•</span>
              <span>Контекст та значення події</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-amber-600 dark:text-amber-400 font-bold">•</span>
              <span>Ілюстрації та додаткові матеріали</span>
            </li>
          </ul>
        </div>
      </div>
    </PageTemplate>
  );
};

export default History;
