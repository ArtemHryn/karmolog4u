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
      name: 'Розрахувати матрицю внутрішньої карми',
    },
  ],
  about: 'Онлайн-розрахунок',
  title: 'МАТРИЦІ ВНУТРІШНЬОЇ КАРМИ',
  desc: [
    'Ви колись бачили як працює механізм у дорогих механічних годинниках? Це настільки налагоджений та ювелірний механізм, що він, майже як "вічний двигун", проте є одна умова — кожна з детальок має працювати, підходити сусіднім та взаємодіяти з іншими, інакше — діла не буде.',
    'Розрахунок "Матриці цілісної сили" поєднує в собі ключ розширення зовнішньої й внутрішньої карми, де зовнішня — віддає енергію в зовнішній світ та у взаємодію з соціумом. А внутрішня — впливає на внутрішні процеси, направлені на сферу стосунків з сім’єю, творчістю, фінансами. \nГармонія та баланс між силами — завжди роблять людину сильнішою та дають багато потенціалу для росту у всіх напрямках життя.',
  ],
};

const dateRegex = /^\d{2}\.\d{2}\.\d{4}$/;

const HolisticPowerHero = ({ setDate, setIsChecked, setIsShowMatrix, setName, isChecked }) => {
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
        redirectTo={'/calculator/holistic-power-matrix'}
      />
    </>
  );
};

export default HolisticPowerHero;
