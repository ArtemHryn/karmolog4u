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
      name: { uk: 'Розрахувати матрицю цілісної сили', ru: 'Рассчитать матрицу целестной силы' },
    },
  ],
  about: { uk: 'Онлайн-розрахунок', ru: 'Онлай-расчет' },
  title: { uk: 'МАТРИЦІ \nЦІЛІСНОЇ СИЛИ', ru: 'МАТРИЦЫ \nЦЕЛОСТНОЙ СИЛЫ' },
  desc: {
    uk: [
      'Ви колись бачили як працює механізм у дорогих механічних годинниках? Це настільки налагоджений та ювелірний механізм, що він, майже як "вічний двигун", проте є одна умова — кожна з детальок має працювати, підходити сусіднім та взаємодіяти з іншими, інакше — діла не буде.',
      'Розрахунок "Матриці цілісної сили" поєднує в собі ключ розширення зовнішньої й внутрішньої карми, де зовнішня — віддає енергію в зовнішній світ та у взаємодію з соціумом. А внутрішня — впливає на внутрішні процеси, направлені на сферу стосунків з сім’єю, творчістю, фінансами. \nГармонія та баланс між силами — завжди роблять людину сильнішою та дають багато потенціалу для росту у всіх напрямках життя.',
    ],
    ru: [
      'Вы когда-нибудь видели как работает механизм в дорогих механических часах? Это настолько отлаженный и ювелирный процесс, что он, почти как «вечный двигатель», однако есть одно условие — каждая из деталей должна работать, подходить соседним и взаимодействовать с другими, иначе — дела не будет.',
      'Расчет "Матрицы целостной силы" объединяет в себе ключи расширения внешней и внутренней кармы, где внешняя — отдает энергию во внешний мир и во взаимодействие с социумом. А внутренняя — влияет на внутренние процессы, направленные на сферу отношений с семьей, творчеством, финансами. \nГармония и баланс между процессами — всегда делают человека сильнее и дают много потенциала для роста во всех направлениях.',
    ],
  },
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
