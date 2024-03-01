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
      href: '/matrix-of-the-year',
      name: 'Розрахувати матрицю року',
    },
  ],
  about: 'Онлайн-розрахунок',
  title: 'МАТРИЦІ РОКУ',
  desc: [
    'Ви користуєтесь щоденником, щоб запланувати наступний рік? \nА якщо ми запропонуємо вам власний — з переліком важливих та необхідних кроків, для досягнення максимального результату саме в тій сфері, яка найбільше буде проявлена у вашому новому році.',
    'З розрахунком "Матриця року" ви отримаєте чітке розуміння та інструкції до власного життя й дізнаєтесь, що саме для вас несе цей період, а також отримаєте підказки щодо аспектів, на які слід наразі звертати увагу, щоб обійти "гострі кути" та отримати нові можливості для створення майбутнього. ',
  ],
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
