import Image from 'next/image';
import Container from '@components/Common/Container/Container';

import styled from './About.module.scss';
import { unbounded } from '@app/layout';

const text = [
  '✓ Психотерапевт. Магістр психології',
  '✓ Президент Асоціації "Кармотерапії та психології"',
  '✓ Голова ГО "Психологія людської долі""',
  '✓ Член асоціації психосинтезу України',
  '✓ Член Центру українсько-європейського наукового співробітництва',
  '✓ Автор та засновник запатентованого виду психотерапії "Кармотерапія"',
  '✓ Автор наукових публікацій, трансформаційних практик та медитацій',
  '✓ Засновник "Студії трансформації Сергія Скляренка"',
  '✓ Ініційований кармічний діагност, адепт методу "Матриця долі" Наталії Ладіні тощо',
];

const About = () => {
  const years = new Date().getFullYear() - 2015;
  return (
    <Container styled={styled.container} styledSection={styled.section}>
      <div className={styled.spot} />

      <div>
        <h1 className={`${styled.headerText} ${unbounded.className}`}>Я - Сергій Скляренко</h1>
        <p className={styled.additional_title1}>Познайомимось!</p>
        <p className={styled.additional_title2}>
          Мене звати Сергій Скляренко і я відомий, як провідний кармолог України, який має понад{' '}
          {new Date().getMonth() > 4 ? years + ' ' : years - 1 + ' '}
          років практичного досвіду
        </p>
      </div>
      <div className={styled.about_us_header_container}>
        <Image
          src="/assets/images/aboutSergiy.webp"
          alt="Сергій Скляренко"
          width={443}
          height={586}
          className={styled.img}
        />
        <ul className={styled.about_us}>
          {text.map((el, index) => (
            <li key={index}>
              {' '}
              <p>{el}</p>
            </li>
          ))}
        </ul>
      </div>
      <div className={`${styled.about_us_facts_container}`}>
        <div className={`${styled.about_us_fact} ${styled.about_us_fact1}`}>
          <p className={`${styled.about_us_fact_title} ${unbounded.className}`}>
            {new Date().getMonth() > 4 ? years : years - 1} років
          </p>
          <p className={styled.about_us_fact_description}>
            консультантської практики у методі “Матриця долі”
          </p>
        </div>
        <div className={`${styled.about_us_fact} ${styled.about_us_fact2}`}>
          <p className={`${styled.about_us_fact_title} ${unbounded.className}`}>15 000+</p>
          <p className={styled.about_us_fact_description}>особистих консультацій</p>
        </div>
        <div className={`${styled.about_us_fact} ${styled.about_us_fact3}`}>
          <p className={`${styled.about_us_fact_title} ${unbounded.className}`}>600+</p>
          <p className={styled.about_us_fact_description}>
            випускників школи “Студія трансформації Сергія Скляренка”
          </p>
        </div>
        <div className={`${styled.about_us_fact} ${styled.about_us_fact4}`}>
          <p className={styled.about_us_fact_description}>
            Сертифікація школи “Студія трансформації Сергія Скляренка” офіційно підтверджена автором
            методу “Матриця долі” Наталією Ладіні
          </p>
        </div>
      </div>
    </Container>
  );
};

export default About;
