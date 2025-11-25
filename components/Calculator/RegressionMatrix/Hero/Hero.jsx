import { useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import CalculatorHero from '@/components/Calculator/CalculatorHero/CalculatorHero';
import SingleDateForm from '@/components/Calculator/PersonalMatrix/SingleDateForm/SingleDateForm';

const heroData = {
  links: [
    {
      href: '/calculator',
      name: 'Калькулятор',
    },
    {
      href: '/calculator/regression-matrix',
      name: { uk: 'Розрахувати матрицю регресії', ru: 'Рассчитать матрицу регрессии' },
    },
  ],
  about: { uk: 'Онлайн-розрахунок', ru: 'Онлайн-расчет' },
  title: { uk: 'МАТРИЦЯ РЕГРЕСІЇ', ru: 'МАТРИЦА РЕГРЕССИИ' },
  desc: {
    uk: [
      'Регресія – це не просто подорож у минуле, це глибокий духовний досвід. Вона відкриває доступ до нашого генетичного коду, який ми можемо дослідити та трансформувати за допомогою регресивної матриці.',
      'Ми не повертаємось до минулих подій чи попередніх життів, а виявляємо ті залишки минулого, які досі впливають на нашу свідомість. Завдяки обраному вами каналу та аналізу енергій, ви зможете розкрити глибинні таємниці, які формують ваше сьогодення.',
      'Глибоке усвідомлення своїх внутрішніх процесів – це ключ до гармонії та досягнення бажаних результатів. Не відкладайте можливість дізнатися більше про себе та свій шлях.',
    ],
    ru: [
      'Регрессия — это не просто путешествие в прошлое, это глубокий духовный опыт. Она открывает доступ к нашему генетическому коду, который мы можем исследовать и трансформировать с помощью регрессивной матрицы.',
      'Мы не возвращаемся к прошлым событиям или предыдущим жизням, а находим те остатки прошлого, которые до сих пор влияют на нашу жизнь. Благодаря выбранному вами каналу и анализу энергий, вы сможете раскрыть глубинные тайны, которые формируют ваше настоящее.',
      'Глубокое осознание своих внутренних процессов — это ключ к гармонии и достижению желаемых результатов. Не откладывайте возможность узнать больше о себе и своем пути.',
    ],
  },
};

const dateRegex = /^\d{2}\.\d{2}\.\d{4}$/;

const RegressionHero = ({ setDate, setIsChecked, setIsShowMatrix, setName, isChecked }) => {
  const searchParams = useSearchParams();
  const linkName = searchParams.get('name');
  const linkDate = searchParams.get('date');

  useEffect(() => {
    if (!dateRegex.test(linkDate)) {
      setIsChecked(true);
      return;
    }
    if (linkName) {
      setName(linkName);
    }
    if (linkDate) {
      setDate(linkDate);
      setIsShowMatrix(true);
    }
    setIsChecked(true);
  }, [linkDate, linkName, setDate, setIsChecked, setIsShowMatrix, setName]);

  if (!isChecked) return null;

  return (
    <>
      <CalculatorHero heroData={heroData} />
      <SingleDateForm
        setDate={setDate}
        setName={setName}
        setIsShowMatrix={setIsShowMatrix}
        name={linkName}
        date={dateRegex.test(linkDate) ? linkDate : ''}
        redirectTo={'/calculator/regression-matrix'}
      />
    </>
  );
};

export default RegressionHero;
