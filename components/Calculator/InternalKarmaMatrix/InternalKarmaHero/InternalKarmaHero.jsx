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
      href: '/calculator/internal-karma-matrix',
      name: {
        uk: 'Розрахувати матрицю внутрішньої карми',
        ru: 'Рассчитать матрицу внутренней кармы',
      },
    },
  ],
  about: { uk: 'Онлайн-розрахунок', ru: 'Онлай-расчет' },
  title: { uk: 'МАТРИЦІ ВНУТРІШНЬОЇ КАРМИ', ru: 'МАТРИЦЫ ВНУТРЕННЕЙ КАРМЫ' },
  desc: {
    uk: [
      'Ви закачуєте оновлення для ваших гаджетів? А для себе?',
      'Ми так і думали — саме тому пропонуємо вам активатор вашого внутрішнього потенціалу та власного призначення.',
      'За допомогою "Матриці внутрішньої карми" ви познайомитесь з власними внутрішніми ресурсами, завдяки яким, зможете вийти на новий рівень свідомості та відчути стан розширення.',
      'Це ваш шанс перейти на якісно новий рівень власної нової свідомості.',
    ],
    ru: [
      'Вы закачиваете обновления для ваших гаджетов? А для себя?',
      'Мы так и думали — именно поэтому предлагаем вам активатор вашего внутреннего потенциала и собственного предназначения.',
      'С помощью "Матрицы внутренней кармы" вы познакомитесь с персональными внутренними ресурсами, благодаря которым, сможете выйти на новый уровень сознания и почувствовать состояние расширения.',
      'Это ваш шанс перейти на качественно новый уровень нового сознания.',
    ],
  },
};

const dateRegex = /^\d{2}\.\d{2}\.\d{4}$/;

const InternalKarmaHero = ({ setDate, setIsChecked, setIsShowMatrix, setName, isChecked }) => {
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
        redirectTo={'/calculator/internal-karma-matrix'}
      />
    </>
  );
};

export default InternalKarmaHero;
