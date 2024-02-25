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
      href: '/nine-tribes-matrix',
      name: 'Розрахувати матрицю "9 колін роду"',
    },
  ],
  about: 'Онлайн-розрахунок',
  title: 'МАТРИЦІ \n "9 КОЛІН РОДУ"',
  desc: [
    'Вже давно відомо, що генетика відіграє вагому роль у формуванні особистості. \n А якщо це генетичний код поколінь – тим паче.',
    'Розрахунок "9 колін Роду" — це можливість для кожного переглянути власні уроки й задачі, котрі передає її Рід, й зрозуміти, який потенціал передає кожне коліно роду своєму нащадку та що саме необхідно припрацьовувати.',
    'В кожному з нас від народження закладена егрегоріальна система роду і кожне (уявляєте собі скільки їх) покоління наших предків впливає на формування нас та нашого життя.',
    'Так, ви дійсно "запрограмовані", адже кожне коліно по лінії роду матері й батька передає певні родові програми, але, не переживайте – ми знаємо, що з цим робити й розкажемо вам.',
  ],
};

const dateRegex = /^\d{2}\.\d{2}\.\d{4}$/;

const NineTribesHero = ({ setDate, setIsChecked, setIsShowMatrix, setName, isChecked }) => {
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
        redirectTo={'/calculator/nine-tribes-matrix'}
      />
    </>
  );
};

export default NineTribesHero;
