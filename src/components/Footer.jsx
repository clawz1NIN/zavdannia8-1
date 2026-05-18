const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-800 dark:bg-gray-900 text-white mt-auto transition-colors">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-3">Про проєкт</h3>
            <p className="text-gray-400 dark:text-gray-500 text-sm">
              Навчальний проєкт для демонстрації різноманітних освітніх матеріалів.
              Цей сайт створено як демонстрацію різноманітних форматів навчальних матеріалів.
              Кожен розділ містить унікальний контент, що допомагає в освітньому процесі.
              Проєкт розроблено з використанням сучасних веб-технологій.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-3">Технології</h3>
            <p className="text-gray-400 dark:text-gray-500 text-sm">
              React • Vite • Tailwind CSS
            </p>
          </div>
        </div>
        
        <div className="border-t border-gray-700 dark:border-gray-800 mt-8 pt-6 text-center text-gray-400 dark:text-gray-500 text-sm">
          © {currentYear} Навчальний проєкт. Всі права захищені.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
