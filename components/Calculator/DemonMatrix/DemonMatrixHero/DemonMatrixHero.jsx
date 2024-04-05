import { useSearchParams } from 'next/navigation';
import { useEffect } from 'react';
import CalculatorHero from '@components/Calculator/CalculatorHero/CalculatorHero';
import DemonMatrixForm from './DemonMatrixForm/DemonMatrixForm';

const heroData = {
  links: [
    {
      href: '/calculator',
      name: 'Калькулятор',
    },
    {
      href: '/calculator/demon-matrix',
      name: 'Розрахувати матрицю “Демон жертва”',
    },
  ],
  about: 'Онлайн-розрахунок',
  title: 'МАТРИЦІ \n“ДЕМОН ЖЕРТВА”',
  desc: [
    'Розрахунок, який покаже наявність у кожного досвіду проживання ролі ”жертви”. \nЛюдина сама здатна обирати ті ”ролі”, які вона буде ”грати” протягом життя!',
    'Бути ”жертвою” в різних ситуаціях комусь вигідно, для когось – не можливо інакше, адже таке відчуття формувалось в нашій підсвідомості багато століть поспіль. ”Демон жертва” — це розрахунок, який покаже, що у кожної людини був досвід проживання ролі «жертви», адже це було нормою.',
    'В енергіях старого часу, в Еру Козорога, людині створювали жертовний бойовий фундамент для життя, а в новий час Ери Водолія, роль ”жертви” стала негативним проявом карми, яке не дає можливості людині розвиватись.',
    ' В якій реальності хочете жити ви?',
    '12,13,14,15 — це ключ Демона Жертви й вихід за його межі. \nГоловні задачі: переродження, формування нового світобачення, прийняття істинних законів світу.',
  ],
};

const dateRegex = /^\d{2}\.\d{2}\.\d{4}$/;

const DemonMatrixHero = ({
  setDate,
  setIsChecked,
  setIsShowMatrix,
  setName,
  isChecked,
  setCode,
}) => {
  const searchParams = useSearchParams();
  const linkName = searchParams.get('name');
  const linkDate = searchParams.get('date');
  const linkCode = searchParams.get('code');
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
      setCode(linkCode);
      setIsShowMatrix(true);
    }
    setIsChecked(true);
  }, [linkCode, linkDate, linkName, setCode, setDate, setIsChecked, setIsShowMatrix, setName]);

  if (!isChecked) return null;

  return (
    <>
      <CalculatorHero heroData={heroData} />
      <DemonMatrixForm
        setDate={setDate}
        setName={setName}
        setIsShowMatrix={setIsShowMatrix}
        name={linkName}
        code={linkCode}
        date={dateRegex.test(linkDate) ? linkDate : ''}
        redirectTo={'/calculator/demon-matrix'}
      />
    </>
  );
};

export default DemonMatrixHero;
