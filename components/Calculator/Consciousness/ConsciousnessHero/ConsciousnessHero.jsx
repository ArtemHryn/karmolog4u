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
      href: '/calculator/matrix-of-consciousness',
      name: 'Розрахувати матрицю свідомості',
    },
  ],
  about: 'Онлайн-розрахунок',
  title: 'МАТРИЦІ СВІДОМОСТІ',
  desc: [
    'Ви щось чули про можливості зміни свідомості? \nНе переживайте, якщо ні — ви точно не один, чи не одна такі.',
    'Про свідоме та підсвідоме, де і до чого тільки не кажуть, а от як змінювати свідомість і до чого, це може призвести, а точніше у чому допомогти, намагаються промовчати, а дарма.',
    'Регламентований закон "Матриці свідомості" міститься в енергіях 9-18-9,18-18-9, 9-9-18 – і ні, це не просто набір цифр, це як код від сейфа, тільки тут, замість лише коштовностей, ви відкриваєте суттєво нові можливості розвитку приголомшливого життя, попри "гріхи" минулого.',
    'Такий розрахунок ще називають Матриця чудотворення — її енергії вільні від впливу кармічного навантаження, тобто дозволяють вийти за межі внутрішньої й зовнішньої карми.',
  ],
};

const dateRegex = /^\d{2}\.\d{2}\.\d{4}$/;

const ConsciousnessHero = ({ setDate, setIsChecked, setIsShowMatrix, setName, isChecked }) => {
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
        redirectTo={'/calculator/matrix-of-consciousness'}
      />
    </>
  );
};

export default ConsciousnessHero;
