import PageTemplate from '../../components/PageTemplate';
import atomImage from './atom.png';

const Physics = () => {
  return (
    <PageTemplate sectionId={1}>
      <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 md:p-12 border-2 border-gray-100 dark:border-gray-700 transition-colors">
        <h1 className="text-4xl font-bold text-center mb-8 text-blue-600 dark:text-blue-400">
          Фізика: Будова атома
        </h1>

        <div className="flex justify-center my-8">
          <img 
            src={atomImage} 
            alt="Будова атома" 
            className="rounded-xl shadow-lg max-w-full h-auto border-4 border-blue-200 dark:border-blue-800"
          />
        </div>

        <div className="prose dark:prose-invert max-w-none mt-8">
          <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 dark:border-blue-400 p-6 rounded-lg">
            <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-2">
              Інфографіка фізичного явища
            </h3>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              Візуалізація допомагає краще зрозуміти складні фізичні процеси та будову атома.
            </p>
          </div>
        </div>
      </div>
    </PageTemplate>
  );
};

export default Physics;
