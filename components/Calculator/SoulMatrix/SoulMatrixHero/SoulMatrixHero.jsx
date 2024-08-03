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
      name: { uk: 'Розрахувати матрицю душі', ru: 'Рассчитать матрицу души' },
    },
  ],
  about: { uk: 'Онлайн-розрахунок', ru: 'Онлай-расчет' },
  title: { uk: 'МАТРИЦІ ДУШІ', ru: 'МАТРИЦЫ ДУШИ' },
  desc: {
    uk: [
      'Відчути душею, як душа радить - чули поради, але й гадки не мали  як її почути - не засмучуйтесь!',
      'Розрахунок "Матриця душі" і є той "перекладач", який допоможе зрозуміти й відчути свою душу, віднайти найкоротший шлях до неї та   підкаже енергії, які в цьому допоможуть. \nЗнати себе - то перший крок до успішного життя, а  глибинне усвідомлення  та пізнання своїх внутрішніх процесів - це новий етап наближення бажаного. \nДуша - невіддільна частина кожного з нас, проте не кожному трапляється можливість - відчути, доторкнутися, пізнати, зрозуміти і нарешті, навчитися взаємодіяти з нею за допомогою енергій, які вона випромінює. \nНу ж бо - ваша душа чекає, а розрахунок матриці душі  допоможе у цьому!',
    ],
    ru: [
      'Почувствовать душой, как душа скажет — получали советы, но понятия не имели как ее услышать — не расстраивайтесь!',
      'Расчет "Матрица души" и есть тот "переводчик", который поможет понять и почувствовать свою душу, найти кратчайший путь к ней. И точно подскажет энергии, которые в этом помогут. \nЗнать себя — это первый шаг к успешной жизни, а глубинное осознание и познание своих внутренних процессов — это новый этап приближения желаемого. \nДуша — неотъемлемая часть каждого из нас, однако не каждому предоставляется возможность — почувствовать, прикоснуться, познать, понять и наконец, научиться взаимодействовать с ней с помощью энергий, которые она излучает. \nНу же — ваша душа ждет, а расчет матрицы души поможет в этом!',
    ],
  },
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
