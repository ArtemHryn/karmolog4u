import { useSearchParams } from 'next/navigation';
import { useEffect } from 'react';
import CalculatorHero from '@components/Calculator/CalculatorHero/CalculatorHero';
import SingleDateForm from '@components/Calculator/PersonalMatrix/SingleDateForm/SingleDateForm';

const heroData = {
  links: [
    {
      href: '/calculator',
      name: 'Калькулятор',
    },
    {
      href: '/calculator/sixteen-laws-of-karma-matrix',
      name: 'Розрахувати матрицю "16 законів карми"',
    },
  ],
  about: 'Онлайн-розрахунок',
  title: 'МАТРИЦІ \n"16 ЗАКОНІВ КАРМИ"',
  desc: [
    'Стукаєтесь у всі двері, а результату нуль – можливо не там шукаєте причину.',
    'Все, що відбувається в вашому житті не є випадковим, а лише результат причино-наслідкових історій минулого і сьогодення.',
    'З розрахунком та пропрацюванням Матриці ”16 законів карми”, ви дізнаєтесь повний сценарій власного життя та свою кармічну історію, і як результат, отримаєте можливість перейти в ”нові вібрації Всесвіту”.',
    'Позбавитеся негативного впливу й крокуватимете по життю в нових енергіях — без ”кармічних боргів”.',
  ],
};

const dateRegex = /^\d{2}\.\d{2}\.\d{4}$/;

const SixteenLawsOfKarmaHero = ({ setDate, setIsChecked, setIsShowMatrix, setName, isChecked }) => {
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
        redirectTo={'/calculator/sixteen-laws-of-karma-matrix'}
      />
    </>
  );
};

export default SixteenLawsOfKarmaHero;
