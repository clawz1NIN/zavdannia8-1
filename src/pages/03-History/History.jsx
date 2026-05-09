import PageTemplate from '../../components/PageTemplate';
import adaImage from './nomer 3.png';

const History = () => {
  return (
    <PageTemplate sectionId={3}>
      <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 md:p-12 border-2 border-gray-100 dark:border-gray-700 transition-colors">
        <h1 className="text-4xl font-bold text-center mb-8 text-amber-600 dark:text-amber-400">
          Ада Лавлейс: Перша програмістка в історії
        </h1>

        <div className="flex justify-center my-8">
          <img 
            src={adaImage} 
            alt="Ада Лавлейс" 
            className="rounded-xl shadow-lg max-w-full h-auto border-4 border-amber-200 dark:border-amber-800"
          />
        </div>

        <div className="prose dark:prose-invert max-w-none space-y-8">
          <section className="bg-amber-50 dark:bg-amber-900/20 rounded-xl p-6 border-l-4 border-amber-500 dark:border-amber-400">
            <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-4">
              1. Походження та контекст
            </h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              Ада Лавлейс (1815–1852) була донькою відомого поета лорда Байрона. Проте її мати, бажаючи вберегти доньку від «небезпечного» поетичного темпераменту батька, наполягла на тому, щоб Ада з дитинства вивчала суворі дисципліни: математику та логіку. Це було вкрай нетипово для виховання дівчини в аристократичній родині XIX століття.
            </p>
          </section>

          <section className="bg-white dark:bg-gray-800 rounded-xl p-6 border-l-4 border-amber-500 dark:border-amber-400">
            <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-4">
              2. Зустріч із Чарльзом Беббіджем
            </h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              Ключовий поворот у її житті стався у 1833 році, коли вона познайомилася з математиком Чарльзом Беббіджем. Він продемонстрував їй прототип своєї Різницевої машини. Ада була однією з небагатьох, хто зміг повністю осягнути математичну складність його ідей. Згодом Беббідж почав розробку Аналітичної машини — фактично першого проєкту програмованого комп'ютера.
            </p>
          </section>

          <section className="bg-amber-50 dark:bg-amber-900/20 rounded-xl p-6 border-l-4 border-amber-500 dark:border-amber-400">
            <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-4">
              3. Перша програма в історії
            </h2>
            <div className="text-gray-700 dark:text-gray-300 leading-relaxed space-y-4">
              <p>
                У 1842–1843 роках Лавлейс переклала статтю італійського інженера Луїджі Менабреа про Аналітичну машину. До перекладу вона додала власні коментарі (відомі як «Notes»), які за обсягом утричі перевищували оригінальний текст.
              </p>
              <p>
                У пункті «G» цих нотаток вона описала алгоритм для обчислення чисел Бернуллі за допомогою машини.
              </p>
              <p className="font-semibold text-amber-700 dark:text-amber-300">
                Сьогодні цей алгоритм офіційно вважається першою комп'ютерною програмою, адаптованою для виконання технічним пристроєм.
              </p>
            </div>
          </section>

          <section className="bg-white dark:bg-gray-800 rounded-xl p-6 border-l-4 border-amber-500 dark:border-amber-400">
            <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-4">
              4. Пророче бачення («Поетична наука»)
            </h2>
            <div className="text-gray-700 dark:text-gray-300 leading-relaxed space-y-4">
              <p>
                Найважливіший внесок Ади полягав не лише в обчисленнях. Вона першою зрозуміла, що машина може маніпулювати не тільки цифрами, а й будь-якими символами.
              </p>
              <p>
                Вона передбачила, що якщо музику або графіку можна виразити через математичні формули, комп'ютер зможе створювати музичні твори чи зображення.
              </p>
              <p className="italic">
                Це бачення випереджало свій час на століття, оскільки сам Беббідж бачив у своїй машині лише калькулятор.
              </p>
            </div>
          </section>

          <section className="bg-amber-50 dark:bg-amber-900/20 rounded-xl p-6 border-l-4 border-amber-500 dark:border-amber-400">
            <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-4">
              5. Спадщина
            </h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              Ада Лавлейс померла у віці 36 років, але її праці були «перевідкриті» під час Другої світової війни, коли почали створюватися перші справжні ЕОМ. У 1980 році Міністерство оборони США назвало на її честь високорівневу мову програмування — <span className="font-bold text-amber-700 dark:text-amber-300">Ada</span>.
            </p>
          </section>

          <section className="bg-gradient-to-r from-amber-100 to-orange-100 dark:from-amber-900/30 dark:to-orange-900/30 rounded-xl p-8 border-2 border-amber-300 dark:border-amber-600">
            <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-4">
              📊 Аналіз дослідження
            </h2>
            <p className="text-lg text-gray-800 dark:text-gray-200 leading-relaxed">
              Цей огляд демонструє, як поєднання логічної освіти та творчої уяви дозволило створити концепцію сучасного комп'ютерного світу задовго до появи першої мікросхеми.
            </p>
          </section>
        </div>
      </div>
    </PageTemplate>
  );
};

export default History;
