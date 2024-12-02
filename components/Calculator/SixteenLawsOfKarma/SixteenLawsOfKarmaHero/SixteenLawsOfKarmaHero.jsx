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
      name: {
        uk: 'Розрахувати матрицю "16 законів карми"',
        ru: 'Рассчитать матрицу "16 законов кармы"',
      },
    },
  ],
  about: { uk: 'Онлайн-розрахунок', ru: 'Онлайн-расчет' },
  title: { uk: 'МАТРИЦІ \n"16 ЗАКОНІВ КАРМИ"', ru: 'МАТРИЦЫ \n"16 ЗАКОНОВ КАРМЫ"' },
  desc: {
    uk: [
      'Стукаєте у всі двері, а результату нуль – можливо не там шукаєте причину.',
      'Все, що відбувається в вашому житті не є випадковим, а лише результат причино-наслідкових історій минулого і сьогодення.',
      'З розрахунком та пропрацюванням Матриці ”16 законів карми”, ви дізнаєтесь повний сценарій власного життя та свою кармічну історію, і як результат, отримаєте можливість перейти в ”нові вібрації Всесвіту”.',
      'Позбавитеся негативного впливу й крокуватимете по життю в нових енергіях — без ”кармічних боргів”.',
    ],
    ru: [
      'Стучитесь во все двери, а результата ноль — возможно не там ищете причину.',
      'Все, что происходит в вашей жизни — не случайно, а лишь результат причинно-следственных историй прошлого и настоящего.',
      'С расчетом и проработкой Матрицы "16 законов кармы" -  вы узнаете полный сценарий собственной жизни и свою кармическую историю, и как результат, получите возможность перейти в "новые вибрации Вселенной".',
      'Избавитесь от негативного влияния и сможете шагать по жизни с новыми энергиями — без "кармических долгов".',
    ],
  },
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
