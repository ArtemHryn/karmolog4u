import CalculatorHero from '@/components/Calculator/CalculatorHero/CalculatorHero';
import SingleDateForm from '../SingleDateForm/SingleDateForm';
import { useSearchParams } from 'next/navigation';
import { useEffect } from 'react';

const heroData = {
  links: [
    {
      href: '/calculator',
      name: 'Калькулятор',
    },
    {
      href: '/calculator/personal-matrix-of-fade',
      name: { uk: 'Розрахувати особисту матрицю', ru: 'Рассчитать личную матрицу' },
    },
  ],
  about: { uk: 'Онлайн-розрахунок', ru: 'Онлайн-расчет' },
  title: { uk: 'ОСОБИСТОЇ \n МАТРИЦІ ДОЛІ', ru: 'ЛИЧНОЙ \n МАТРИЦЫ СУДЬБЫ' },
  desc: {
    ru: [
      '"Судьба у тебя такая" - хоть раз в жизни каждый сталкивался с такой формулировкой относительно неудач в жизни. Хотите перемен, но не знаете в каком направлении двигаться — мы поможем!',
      'Этот расчет познакомит вас с собственной "Матрицей судьбы", подскажет ваше предназначение и задачи на это воплощение, "подсветит" таланты и личные проявления в социуме. А еще — он станет вашим путеводителем в мир здоровья, гармоничных отношений, материальных благ и подскажет, как наилучшим образом, вы можете реализовать себя во всех направлениях вашей "жизни мечты". Ваша судьба - в ваших руках!',
    ],
    uk: [
      '"Така твоя доля" — хоч раз в житті кожен стикався з таким формулюванням щодо невдач у житті. Хочете змін, але не знаєте в якому напрямку рухатись? — ми допоможемо!',
      'Цей розрахунок познайомить вас з власною "Матрицею долі", підкаже ваші призначення та задачі на це втілення, висвітлить таланти й особисті проявлення в соціумі. А ще — він стане вашим путівником у світ здоров’я, гармонійних стосунків та матеріальних благ й підкаже, як найкраще ви можете себе реалізувати у всіх напрямках власного омріяного життя. \n Ваша доля — у ваших руках!',
    ],
  },
};

const dateRegex = /^\d{2}\.\d{2}\.\d{4}$/;

const Header = ({ setDate, setName, setIsChecked, setIsShowMatrix, isChecked }) => {
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
        redirectTo={'/calculator/personal-matrix-of-fade'}
      />
    </>
  );
};

export default Header;
