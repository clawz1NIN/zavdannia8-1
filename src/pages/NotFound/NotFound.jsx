import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-2xl mx-auto text-center">
        <div className="text-9xl mb-8">🔍</div>
        <h1 className="text-6xl font-bold text-gray-900 mb-4">404</h1>
        <h2 className="text-3xl font-semibold text-gray-700 mb-6">
          Сторінку не знайдено
        </h2>
        <p className="text-xl text-gray-600 mb-8">
          На жаль, сторінка, яку ви шукаєте, не існує або була переміщена.
        </p>
        <Link
          to="/"
          className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors shadow-md hover:shadow-lg"
        >
          Повернутися на головну
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
