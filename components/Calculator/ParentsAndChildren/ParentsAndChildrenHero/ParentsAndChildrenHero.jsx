import CalculatorHero from '@components/Calculator/CalculatorHero/CalculatorHero';
import SingleDateForm from '@components/Calculator/PersonalMatrix/SingleDateForm/SingleDateForm';
import { useSearchParams } from 'next/navigation';
import { useEffect } from 'react';

const heroData = {
  links: [
    {
      href: '/calculator',
      name: 'Калькулятор',
    },
    {
      href: '/calculator/parents-and-children-matrix',
      name: {
        uk: 'Розрахувати матрицю "Батьки та діти"',
        ru: 'Рассчитать матрицу "Родители и дети"',
      },
    },
  ],
  about: { uk: 'Онлайн-розрахунок', ru: 'Онлайн-расчет' },
  title: { uk: 'МАТРИЦІ \n"БАТЬКИ ТА ДІТИ"', ru: 'МАТРИЦЫ \n"РОДИТЕЛИ И ДЕТИ"' },
  desc: {
    uk: [
      'Ніколи не замислювались, чому мати й дитя поєднані пуповиною, і чому так важливо, як фізично, так й психологічно, вчасно її обрізати.',
      " Зв'язок дитини з батьками має надважливе значення, адже не розв'язавши цього питання, ви точно не зможете побудувати гармонійне, успішне та реалізоване власне життя.",
      "В перші роки життя дитини, саме батьки є тими, хто вкладає у її свідомість переконання про структуру світу та формують установки пов'язані з проявленням в цьому світі — чи може за себе постояти, чи кохана вона тощо.",
      'Взаємодія з батьками має вагомий вплив, не лише на процес становлення особистості в процесі дорослішання, але й на подальше доросле життя загалом.',
      'Розрахунок Матриці "Батьки та діти" познайомить вас з енергіями, якими наділяють батьки в період виношування малюка, а також покаже, що саме батьки мають дати дитині для її гармонійного життя. \nТак, ви знайомі з народження, але ви ще так багато не знаєте один про одного.',
      'Батьки та діти — то вічна історія!',
    ],
    ru: [
      'Никогда не задумывались, почему мать и дитя соединены пуповиной, и так важно, как физически, так и психологически, вовремя ее обрезать.',
      'Связь ребенка с родителями имеет важнейшее значение, ведь не решив этот вопрос, вы точно не сможете построить гармоничную, успешную и реализованную собственную жизнь.',
      'В первые годы жизни ребенка, именно родители являются теми, кто вкладывает в его сознание убеждения о структуре мира и формируют установки связанные с проявлением в этом мире — может ли за себя постоять, любимый ли он и тому подобное.',
      'Взаимодействие с родителями имеет весомое влияние, не только на становление личности в процессе взросления, но и на дальнейшую взрослую жизнь в целом.',
      'Расчет Матрицы "Родители и дети" познакомит вас с энергиями, которыми наделяют родители в период вынашивания малыша, а также покажет, что именно родители должны дать ребенку для его гармоничной жизни. \nДа, вы знакомы с рождения, но вы еще так много не знаете друг о друге.',
      'Родители и дети — это вечная история!',
    ],
  },
};

const dateRegex = /^\d{2}\.\d{2}\.\d{4}$/;

const ParentsAndChildrenHero = ({ setDate, setIsChecked, setIsShowMatrix, setName, isChecked }) => {
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
        redirectTo={'/calculator/parents-and-children-matrix'}
      />
    </>
  );
};

export default ParentsAndChildrenHero;
