import PageTemplate from '../../components/PageTemplate';
import scene1 from './scene 1.png';
import scene2 from './scene 2.png';
import scene3 from './scane 3.png';
import scene4 from './scane 4.png';

const SmartDevicesTale = () => {
  return (
    <PageTemplate sectionId={8}>
      <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 md:p-12 border-2 border-gray-100 dark:border-gray-700 transition-colors">
        <h1 className="text-4xl font-bold text-center mb-8 text-pink-600 dark:text-pink-400">
          Казка про розумні помічники
        </h1>

        <div className="prose dark:prose-invert max-w-none space-y-8">
          <div className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
            <p>
              У місті Сонячному живуть добрі розумні пристрої. Вони не втомлюються, допомагають людям і роблять життя зручнішим. Ранок у родині Марка починається з розумного будильника, який лагідно будить хлопчика веселою мелодією.
            </p>
          </div>

          <div className="flex justify-center my-8">
            <img 
              src={scene1} 
              alt="Ранок у родині Марка" 
              className="rounded-xl shadow-lg max-w-full h-auto border-4 border-pink-200 dark:border-pink-800"
            />
          </div>

          <div className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
            <p>
              Мама готує сніданок, а розумна пічка підказує, що каша вже готова. Розумний пилосос тихо прибирає підлогу, а розумна лампа вмикає м'яке світло. Усе працює дружно, наче велика команда помічників.
            </p>
          </div>

          <div className="flex justify-center my-8">
            <img 
              src={scene2} 
              alt="Розумні помічники в домі" 
              className="rounded-xl shadow-lg max-w-full h-auto border-4 border-pink-200 dark:border-pink-800"
            />
          </div>

          <div className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
            <p>
              Після школи Марко сідає за стіл і відкриває планшет. Там є ШІ-помічник, який допомагає йому вчити вірші, розв'язувати цікаві завдання та знаходити нові слова. Марко радіє: навчатися стало цікаво, бо поруч — розумний друг.
            </p>
          </div>

          <div className="flex justify-center my-8">
            <img 
              src={scene3} 
              alt="Марко навчається з ШІ-помічником" 
              className="rounded-xl shadow-lg max-w-full h-auto border-4 border-pink-200 dark:border-pink-800"
            />
          </div>

          <div className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
            <p>
              Увечері родина виходить на прогулянку. Розумні ліхтарі світять доріжкою, а телефон нагадує, що вже час повертатися додому. Марко дивиться на місто й усміхається: коли пристрої працюють розумно, людям стає легше й безпечніше жити.
            </p>
          </div>

          <div className="flex justify-center my-8">
            <img 
              src={scene4} 
              alt="Вечірня прогулянка містом" 
              className="rounded-xl shadow-lg max-w-full h-auto border-4 border-pink-200 dark:border-pink-800"
            />
          </div>

          <div className="bg-gradient-to-r from-pink-50 to-purple-50 dark:from-pink-900/20 dark:to-purple-900/20 rounded-xl p-8 mt-8 border-2 border-pink-200 dark:border-pink-700">
            <p className="text-lg leading-relaxed text-gray-800 dark:text-gray-200 mb-4">
              А вдома Марко сказав:
            </p>
            <blockquote className="text-xl font-semibold text-pink-700 dark:text-pink-300 italic border-l-4 border-pink-500 pl-6 my-4">
              — Розумні пристрої — це не чарівники. Вони добрі помічники, якщо люди користуються ними мудро.
            </blockquote>
            <p className="text-lg leading-relaxed text-gray-800 dark:text-gray-200">
              І всі погодилися, що найважливіше — це доброта, знання і вміння дружити з технікою.
            </p>
          </div>
        </div>
      </div>
    </PageTemplate>
  );
};

export default SmartDevicesTale;
