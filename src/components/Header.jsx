import { Link, useLocation } from 'react-router-dom';
import { useState } from 'react';
import { sections } from '../data/sections';
import ThemeToggle from './ThemeToggle';

const Header = () => {
  const [hoveredItem, setHoveredItem] = useState(null);
  const location = useLocation();

  return (
    <header className="bg-white dark:bg-gray-800 shadow-md sticky top-0 z-50 transition-colors">
      <div className="w-full px-4 py-4">
        <div className="flex items-center justify-between w-full gap-4">
          {/* Title - Absolute Far Left */}
          <div className="flex-shrink-0">
            <Link to="/" className="text-lg md:text-xl font-bold text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors whitespace-nowrap">
              Навчальний проєкт
            </Link>
          </div>
          
          {/* Navigation Menu - Center, single row */}
          <nav className="flex items-center justify-center gap-2 flex-1">
            {sections.map((section) => {
              const isActive = location.pathname === section.path;
              const isExpanded = hoveredItem === section.id || isActive;
              
              return (
                <Link
                  key={section.id}
                  to={section.path}
                  className={`
                    flex items-center justify-center gap-2 px-3 py-2 rounded-lg
                    ${isActive 
                      ? 'bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900 dark:to-purple-900' 
                      : 'bg-gradient-to-r from-blue-50 to-purple-50 dark:from-gray-700 dark:to-gray-600'
                    }
                    hover:from-blue-100 hover:to-purple-100 dark:hover:from-gray-600 dark:hover:to-gray-500
                    hover:shadow-lg hover:scale-105
                    flex-shrink-0
                  `}
                  style={{
                    width: isExpanded ? '220px' : '100px',
                    transition: 'all 0.6s cubic-bezier(0.4, 0, 0.2, 1)',
                    zIndex: isExpanded ? 50 : 10
                  }}
                  title={section.title}
                  onMouseEnter={() => setHoveredItem(section.id)}
                  onMouseLeave={() => setHoveredItem(null)}
                >
                  <span className="text-lg flex-shrink-0">{section.icon}</span>
                  <span 
                    className="text-xs font-medium text-gray-700 dark:text-gray-200 whitespace-nowrap overflow-hidden"
                    style={{
                      transition: 'opacity 0.6s cubic-bezier(0.4, 0, 0.2, 1)',
                      maxWidth: isExpanded ? '200px' : '50px'
                    }}
                  >
                    {isExpanded ? section.title : `Пункт ${section.id}`}
                  </span>
                </Link>
              );
            })}
          </nav>

          {/* Theme Toggle - Absolute Far Right */}
          <div className="flex-shrink-0">
            <ThemeToggle />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
