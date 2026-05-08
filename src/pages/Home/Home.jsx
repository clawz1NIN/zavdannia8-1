import Card from '../../components/Card';
import { sections } from '../../data/sections';

const Home = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      {/* Hero Section */}
      <div className="text-center mb-16">
        <h1 className="text-5xl font-bold text-gray-900 mb-6">
          Навчальний проєкт
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
          Вітаємо на навчальному сайті-портфоліо! Тут зібрано 8 різноманітних освітніх матеріалів: 
          від фізики та математики до історії, логіки та творчих робіт. Оберіть розділ для перегляду.
        </p>
      </div>

      {/* Sections Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {sections.map((section) => (
          <Card
            key={section.id}
            title={section.title}
            description={section.description}
            path={section.path}
            icon={section.icon}
            color={section.color}
          />
        ))}
      </div>

      {/* Additional Info */}
      <div className="mt-16 bg-blue-50 rounded-lg p-8 text-center">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
          Про цей проєкт
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Цей сайт створено як демонстрацію різноманітних форматів навчальних матеріалів. 
          Кожен розділ містить унікальний контент, що допомагає в освітньому процесі.
        </p>
      </div>
    </div>
  );
};

export default Home;
