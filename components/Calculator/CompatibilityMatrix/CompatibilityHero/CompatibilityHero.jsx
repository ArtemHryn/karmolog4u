'use client';
import CalculatorHero from '@components/Calculator/CalculatorHero/CalculatorHero';
import CompatibilityMatrixForm from '../CompatibilityMatrixForm/CompatibilityMatrixForm';
import { useEffect } from 'react';
import { useSearchParams, useRouter, usePathname } from 'next/navigation';

const heroData = {
  links: [
    {
      href: '/calculator',
      name: 'Калькулятор',
    },
    {
      href: '/compatibility-matrix',
      name: { uk: 'Розрахувати матрицю сумісності', ru: 'Рассчитать матрицу совместимости' },
    },
  ],
  about: { uk: 'Онлайн-розрахунок', ru: 'Онлай-расчет' },
  title: { uk: 'МАТРИЦІ \n СУМІСНОСТІ', ru: 'МАТРИЦЫ \n СОВМЕСТИМОСТИ' },
  desc: {
    uk: [
      'Будувати стосунки, будь то любов, партнерство, сім’я, бізнес, підлеглі — завжди кропітка та витратна за часом й силами робота.',
      'А якщо ми скажемо вам, що є "інструкція" для порозуміння з будь-ким.',
      '"Матриця Сумісності" допоможе зрозуміти ваш взаємозв’язок з партнером, покаже, які задачі проявлені перед вами обома в соціальному та духовному світах. Підкаже, як саме взаємодіяти з іншою стороною, для вибудовування гармонійних, не токсичних та ефективних робочих чи особистих стосунків.',
      'У кожного тандему — є власний ресурс, важливо тільки знайти його та підсилювати — тоді успіх та взаєморозуміння вам гарантовані!',
    ],
    ru: [
      'Строить отношения,  любовь ли это, партнерство, семья, бизнес или подчиненные — всегда кропотливая и затратная по времени и силам работа.',
      'А если мы вам скажем, что есть «инструкция», которая может помочь наладить взаимопонимание с кем-либо.',
      '"Матрица Совместимости" поможет понять вашу взаимосвязь с партнером, покажет, какие задачи проявлены перед вами обоими в социальном и духовном мирах. Подскажет, как именно взаимодействовать с другими, для выстраивания гармоничных, не токсичных и эффективных рабочих или личных отношений.',
      'У каждого тандема — есть собственный ресурс, важно только найти его и усиливать — тогда успех и взаимопонимание вам гарантированы!',
    ],
  },
};

const CompatibilityHero = ({
  setIsChecked,
  setUsersInfo,
  setIsShowMatrix,
  usersInfo,
  isChecked,
}) => {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    try {
      if (!searchParams.get('date1')) {
        setIsChecked(true);
        return;
      }
      const users = [];
      searchParams.forEach((value, key) => {
        const index = key[key.length - 1];

        if (isNaN(parseInt(index))) {
          return;
        }
        if (key.includes('date')) {
          users[index - 1] = { date: value };
        }
        if (key.includes('name')) {
          const info = users[index - 1];
          info.name = value;
          users.splice(index - 1, 1, info);
        }
      });
      if (users.length !== 2) {
        setIsChecked(true);
        return;
      }
      setUsersInfo(users);
      setIsShowMatrix(true);
      setIsChecked(true);
    } catch (error) {
      router.replace(pathname);
    }
  }, [pathname, router, searchParams, setIsChecked, setIsShowMatrix, setUsersInfo]);

  if (!isChecked) return null;
  return (
    <>
      <CalculatorHero heroData={heroData} />
      <CompatibilityMatrixForm
        setUsersInfo={setUsersInfo}
        setIsShowMatrix={setIsShowMatrix}
        usersInfo={usersInfo}
      />
    </>
  );
};

export default CompatibilityHero;
