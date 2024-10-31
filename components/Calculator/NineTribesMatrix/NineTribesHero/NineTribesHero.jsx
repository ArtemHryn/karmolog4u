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
      href: '/calculator/nine-tribes-matrix',
      name: { uk: 'Розрахувати матрицю "9 колін Роду"', ru: 'Рассчитать матрицу "9 колен Рода"' },
    },
  ],
  about: { uk: 'Онлайн-розрахунок', ru: 'Онлайн-расчет' },
  title: { uk: 'МАТРИЦІ \n "9 КОЛІН РОДУ"', ru: 'МАТРИЦЫ \n "9 КОЛЕН РОДА"' },
  desc: {
    uk: [
      'Вже давно відомо, що генетика відіграє вагому роль у формуванні особистості. \n А якщо це генетичний код поколінь – тим паче.',
      'Розрахунок "9 колін Роду" — це можливість для кожного переглянути власні уроки й задачі, котрі передає її Рід, й зрозуміти, який потенціал передає кожне коліно роду своєму нащадку та що саме необхідно пропрацьовувати.',
      'В кожному з нас від народження закладена егрегоріальна система роду і кожне (уявляєте собі скільки їх) покоління наших предків впливає на формування нас та нашого життя.',
      'Так, ви дійсно "запрограмовані", адже кожне коліно по лінії роду матері й батька передає певні родові програми, але не переживайте – ми знаємо, що з цим робити й розкажемо вам.',
    ],
    ru: [
      'Давно известно, что генетика играет важную роль в формировании личности.\n А если это генетический код поколений — тем более.',
      'Расчет "9 колен Рода" - это возможность для каждого пересмотреть собственные уроки и задачи, которые передаёт его Род. Он помогает понять, какой потенциал даёт каждое колено рода своему потомку, и что на самом деле необходимо вам прорабатывать.',
      'В любом из нас от рождения заложена эгрегориальная система рода и каждое (представляете себе сколько их) поколение наших предков влияет на формирование нас и нашей жизни.',
      'Да, вы действительно "запрограммированы", ведь каждое колено по линии рода отца и матери передает определенные родовые программы, но не переживайте — мы знаем, что с этим делать и расскажем вам.',
    ],
  },
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
