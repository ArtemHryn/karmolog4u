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
      href: '/calculator/matrix-of-soul',
      name: 'Розрахувати матрицю душі',
    },
  ],
  about: 'Онлайн-розрахунок',
  title: 'МАТРИЦІ ДУШІ',
  desc: [
    'Ви закачуєте оновлення для ваших гаджетів? А для себе?',
    'Ми так і думали — саме тому пропонуємо вам активатор вашого внутрішнього потенціалу та власного призначення.',
    'За допомогою “Матриці внутрішньої карми” ви познайомитесь з власними внутрішніми ресурсами, завдяки яким, зможете вийти на новий рівень свідомості та відчути стан розширення.',
    'Це ваш шанс перейти на якісно новий рівень власної нової свідомості.',
  ],
};

const dateRegex = /^\d{2}\.\d{2}\.\d{4}$/;

const SoulMatrixHero = ({ setDate, setIsChecked, setIsShowMatrix, setName, isChecked }) => {
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
        redirectTo={'/calculator/matrix-of-soul'}
      />
    </>
  );
};

export default SoulMatrixHero;
