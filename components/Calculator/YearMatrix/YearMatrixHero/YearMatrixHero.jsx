import CalculatorHero from '@components/Calculator/CalculatorHero/CalculatorHero';
import { useSearchParams } from 'next/navigation';
import { useEffect } from 'react';
import YearMatrixForm from './YearMatrixForm/YearMatrixForm';

const heroData = {
  links: [
    {
      href: '/calculator',
      name: 'Калькулятор',
    },
    {
      href: '/calculator/matrix-of-the-year',
      name: { uk: 'Розрахувати матрицю року', ru: 'Рассчитать матрицу года' },
    },
  ],
  about: { uk: 'Онлайн-розрахунок', ru: 'Онлай-расчет' },
  title: { uk: 'МАТРИЦІ РОКУ', ru: 'МАТРИЦЫ ГОДА' },
  desc: {
    uk: [
      'Ви користуєтесь щоденником, щоб запланувати наступний рік? \nА якщо ми запропонуємо вам власний — з переліком важливих та необхідних кроків, для досягнення максимального результату саме в тій сфері, яка найбільше буде проявлена у вашому новому році.',
      'З розрахунком "Матриця року" ви отримаєте чітке розуміння та інструкції до власного життя й дізнаєтесь, що саме для вас несе цей період, а також отримаєте підказки щодо аспектів, на які слід наразі звертати увагу, щоб обійти "гострі кути" та отримати нові можливості для створення майбутнього. ',
    ],
    ru: [
      'Вы пользуетесь ежедневником, чтобы распланировать следующий год? \nА если мы предложим вам собственный - с перечнем важных и необходимых шагов, для достижения максимального результата именно в той сфере, которая больше всего будет проявлена в Вашем новом году.',
      'С расчетом "Матрицы года" вы получите четкое понимание и инструкцию к собственной жизни. Узнаете, что именно для вас несет этот период, а также услышите подсказки относительно аспектов, на которые следует сейчас обращать внимание, чтобы сгладить "острые углы" и получить новые возможности для создания будущего.',
    ],
  },
};

const dateRegex = /^\d{2}\.\d{2}\.\d{4}$/;

const YearMatrixHero = ({
  setDate,
  setIsChecked,
  setIsShowMatrix,
  setName,
  isChecked,
  setPeriod,
}) => {
  const searchParams = useSearchParams();
  const linkName = searchParams.get('name');
  const linkDate = searchParams.get('date');
  const linkPeriod = searchParams.get('period');
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
    if (linkPeriod) {
      setPeriod(linkPeriod);
    }
    setIsChecked(true);
  }, [linkDate, linkName, linkPeriod, setDate, setIsChecked, setIsShowMatrix, setName, setPeriod]);

  if (!isChecked) return null;
  return (
    <>
      <CalculatorHero heroData={heroData} />
      <YearMatrixForm
        setDate={setDate}
        setName={setName}
        setIsShowMatrix={setIsShowMatrix}
        name={linkName}
        date={dateRegex.test(linkDate) ? linkDate : ''}
        redirectTo={'/calculator/matrix-of-the-year'}
        setPeriod={setPeriod}
        period={linkPeriod}
      />
    </>
  );
};

export default YearMatrixHero;
