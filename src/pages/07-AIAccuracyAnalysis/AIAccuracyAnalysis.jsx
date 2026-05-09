import PageTemplate from '../../components/PageTemplate';
import analysisImage from './nomer 7.png';

const AIAccuracyAnalysis = () => {
  return (
    <PageTemplate sectionId={7}>
      <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 md:p-12 border-2 border-gray-100 dark:border-gray-700 transition-colors">
        <h1 className="text-4xl font-bold text-center mb-8 text-rose-600 dark:text-rose-400">
          Алгоритм перевірки достовірності інформації від ШІ
        </h1>

        <div className="flex justify-center my-8">
          <img 
            src={analysisImage} 
            alt="Аналіз достовірності ШІ" 
            className="rounded-xl shadow-lg max-w-full h-auto border-4 border-rose-200 dark:border-rose-800"
          />
        </div>

        <div className="prose dark:prose-invert max-w-none space-y-8">
          <section className="bg-rose-50 dark:bg-rose-900/20 rounded-xl p-6 border-l-4 border-rose-500 dark:border-rose-400">
            <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-4">
              1. Визначення тверджень
            </h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
              Це перший крок до деконструкції тексту. ШІ часто змішує факти з припущеннями.
            </p>
            <div className="bg-white dark:bg-gray-800 rounded-lg p-4 border border-rose-200 dark:border-rose-700">
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                <span className="font-semibold text-rose-700 dark:text-rose-300">Порада:</span> Розбивайте складні речення на прості тези. Наприклад, якщо ШІ каже: «Сміливий лицар Айвенго переміг Річарда Левове Серце», тут є два твердження: 1) Риса характеру (сміливий), 2) Факт події (переміг короля). Обидва треба перевіряти окремо.
              </p>
            </div>
          </section>

          <section className="bg-white dark:bg-gray-800 rounded-xl p-6 border-l-4 border-rose-500 dark:border-rose-400">
            <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-4">
              2. Пошук першоджерела
            </h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
              Це золоте правило. Для літератури першоджерелом є виключно текст автора (видання, що пройшло редактуру).
            </p>
            <div className="bg-rose-50 dark:bg-rose-900/20 rounded-lg p-4 border border-rose-200 dark:border-rose-700">
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                <span className="font-semibold text-rose-700 dark:text-rose-300">Нюанс:</span> Вікіпедія не є першоджерелом, це лише посередник. Якщо в книзі написано одне, а в статті на випадковому сайті — інше, пріоритет завжди у книги.
              </p>
            </div>
          </section>

          <section className="bg-rose-50 dark:bg-rose-900/20 rounded-xl p-6 border-l-4 border-rose-500 dark:border-rose-400">
            <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-4">
              3. Порівняння інформації
            </h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
              На цьому етапі відбувається власне верифікація.
            </p>
            <div className="bg-white dark:bg-gray-800 rounded-lg p-4 border border-rose-200 dark:border-rose-700">
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                <span className="font-semibold text-rose-700 dark:text-rose-300">Цитати:</span> Це найслабше місце ШІ. Він часто створює «франкенштейнів» — бере початок однієї фрази та приєднує до неї кінець іншої, або взагалі вигадує влучний афоризм і приписує його класику.
              </p>
            </div>
          </section>

          <section className="bg-white dark:bg-gray-800 rounded-xl p-6 border-l-4 border-rose-500 dark:border-rose-400">
            <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-4">
              4. Оцінка джерел
            </h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
              Важливо звертати увагу на авторитетність.
            </p>
            <div className="bg-rose-50 dark:bg-rose-900/20 rounded-lg p-4 border border-rose-200 dark:border-rose-700">
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                <span className="font-semibold text-rose-700 dark:text-rose-300">Ознаки маніпуляції:</span> Якщо освітній ресурс не має посилань на конкретні розділи твору або ім'я філолога-упорядника, інформація там може бути таким самим переказаним «галюцинованим» контентом.
              </p>
            </div>
          </section>

          <section className="bg-rose-50 dark:bg-rose-900/20 rounded-xl p-6 border-l-4 border-rose-500 dark:border-rose-400">
            <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-4">
              5. Висновок
            </h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
              Результат аналізу має бути об'єктивним.
            </p>
            <div className="bg-white dark:bg-gray-800 rounded-lg p-4 border border-rose-200 dark:border-rose-700">
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                Важливо не просто сказати «все неправильно», а вказати, де саме ШІ помилився (наприклад, переплутав хронологію, але влучно описав мотивацію).
              </p>
            </div>
          </section>

          <section className="bg-gradient-to-r from-rose-100 to-red-100 dark:from-rose-900/30 dark:to-red-900/30 rounded-xl p-8 border-2 border-rose-300 dark:border-rose-600">
            <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-4">
              ⚠️ Чому ШІ помиляється?
            </h2>
            <p className="text-gray-800 dark:text-gray-200 leading-relaxed mb-4">
              До вашого переліку ознак недостовірності можна додати ще одну: <span className="font-bold text-rose-700 dark:text-rose-300">«Ефект впевненості»</span>. ШІ ніколи не каже «я не впевнений, але здається...». Він подає вигадку так само авторитетно, як і доведений факт.
            </p>
          </section>

          <section className="bg-white dark:bg-gray-800 rounded-xl p-8 border-2 border-rose-300 dark:border-rose-600">
            <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-6">
              💡 Як ефективно використовувати цей алгоритм
            </h2>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <span className="text-2xl">📋</span>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  <span className="font-semibold">Копіюйте відповідь ШІ в окремий документ.</span>
                </p>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-2xl">🎨</span>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  <span className="font-semibold">Виділяйте кольорами:</span> Зелений — підтверджено текстом, Червоний — вигадка, Жовтий — спірне твердження (наприклад, трактування образу).
                </p>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-2xl">🔍</span>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  <span className="font-semibold">Використовуйте пошук за ключовими словами</span> в електронних бібліотеках для швидкої перевірки цитат.
                </p>
              </div>
            </div>
          </section>

          <section className="bg-rose-50 dark:bg-rose-900/20 rounded-xl p-6 border-l-4 border-rose-500 dark:border-rose-400">
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed italic">
              Ваш приклад із Гамлетом ідеально ілюструє суть: ШІ часто робить помилки в ієрархіях або статусах персонажів, бо ці слова часто стоять поруч у навчальних текстах (Гамлет, принц, король, Данія).
            </p>
          </section>

          <section className="bg-gradient-to-r from-rose-100 to-orange-100 dark:from-rose-900/30 dark:to-orange-900/30 rounded-xl p-8 border-2 border-rose-300 dark:border-rose-600">
            <p className="text-lg font-semibold text-gray-800 dark:text-gray-200 leading-relaxed text-center">
              Цей алгоритм варто застосовувати не лише до літератури, а й до історичних фактів чи технічних інструкцій.
            </p>
          </section>
        </div>
      </div>
    </PageTemplate>
  );
};

export default AIAccuracyAnalysis;
