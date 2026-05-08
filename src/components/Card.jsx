import { Link } from 'react-router-dom';

const Card = ({ title, description, path, icon, color }) => {
  return (
    <Link to={path} className="block group">
      <div className="bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 overflow-hidden h-full">
        <div className={`${color} h-2`}></div>
        <div className="p-6">
          <div className="text-4xl mb-4">{icon}</div>
          <h3 className="text-xl font-semibold mb-3 text-gray-800 group-hover:text-blue-600 transition-colors">
            {title}
          </h3>
          <p className="text-gray-600 text-sm leading-relaxed">
            {description}
          </p>
          <div className="mt-4 flex items-center text-blue-600 font-medium text-sm">
            Переглянути
            <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Card;
