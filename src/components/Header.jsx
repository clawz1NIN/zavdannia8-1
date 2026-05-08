import { Link } from 'react-router-dom';
import { sections } from '../data/sections';

const Header = () => {
  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="text-2xl font-bold text-blue-600 hover:text-blue-700 transition-colors">
            Навчальний проєкт
          </Link>
          
          <nav className="hidden md:flex space-x-6">
            <Link to="/" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">
              Головна
            </Link>
            {sections.slice(0, 3).map((section) => (
              <Link
                key={section.id}
                to={section.path}
                className="text-gray-700 hover:text-blue-600 transition-colors font-medium"
              >
                {section.icon}
              </Link>
            ))}
          </nav>

          <button className="md:hidden text-gray-700 hover:text-blue-600">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
