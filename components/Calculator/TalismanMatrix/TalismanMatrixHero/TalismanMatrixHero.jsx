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
      href: '/calculator/talisman-of-the-star-of-prosperity',
      name: {
        uk: 'Розрахувати талісман зірки процвітання',
        ru: 'Рассчитать талисман звезды процветания',
      },
    },
  ],
  about: { uk: 'Онлайн-розрахунок', ru: 'Онлайн-расчет' },
  title: { uk: 'Талісман зірки процвітання', ru: 'Талисман звезды процветания' },
  desc: {
    uk: [
      'Ваша доля може бути змінена на краще, адже ви можете отримати "ключ" до всіх дверей успіху.',
      'Це ваш особистий "талісман", який допомагатиме протягом усього життя, немов вірний провідник до жаданих звершень. Його магічні енергії прокладають шлях до реалізації, слави, багатства та міцного здоровʼя. Завдяки цьому унікальному розрахунку та його глибокому пропрацюванню, ви відкриєте двері до всіх дарів Всесвіту, які були призначені вам від народження.',
      'Дозвольте собі розкрити власний потенціал та отримати всі "скарби" всесвіту, які чекають на вас.',
    ],
    ru: [
      'Ваша судьба может измениться к лучшему — ведь вы можете получить "ключ" ко всем дверям успеха.',
      'Это ваш личный "талисман", который будет помогать на протяжении всей жизни, словно верный проводник к желаемым свершениям. Его магические энергии прокладывают путь к реализации, славе, богатству и крепкому здоровью. Благодаря этому уникальному расчету и его глубокой проработке, вы откроете двери ко всем дарам Вселенной, которые предназначены вам от рождения.',
      'Позвольте себе раскрыть собственный потенциал и получить все "сокровища" вселенной, которые вас ждут.',
    ],
  },
};

const dateRegex = /^\d{2}\.\d{2}\.\d{4}$/;

const TalismanMatrixHero = ({ setDate, setIsChecked, setIsShowMatrix, setName, isChecked }) => {
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
        redirectTo={'/calculator/talisman-of-the-star-of-prosperity'}
      />
    </>
  );
};

export default TalismanMatrixHero;
