import Image from 'next/image';
import { useLocale, useTranslations } from 'next-intl';
import Container from '@components/Common/Container/Container';
import TitleNoStyles from '@components/Common/TitleNoStyles/TitleNoStyles';

import styled from './About.module.scss';

const text = {
  uk: [
    '✓ Психотерапевт. Магістр психології',
    '✓ Президент Асоціації "Кармотерапії та психології"',
    '✓ Голова ГО "Психологія людської долі"',
    '✓ Член асоціації психосинтезу України',
    '✓ Член Центру українсько-європейського наукового співробітництва',
    '✓ Викладач кафедри психології Київський медичний університет.',
    '✓ Автор та засновник запатентованого виду психотерапії "Кармотерапія"',
    '✓ Автор наукових публікацій, трансформаційних практик та медитацій',
    '✓ Засновник "Студії трансформації Сергія Скляренка"',
    '✓ Ініційований кармічний діагност, адепт методу "Матриця долі" Наталії Ладіні тощо',
  ],
  ru: [
    '✓ Психотерапевт. Магистр психологии',
    '✓ Президент Ассоциации "Кармотерапии и психологии"',
    '✓ Председатель ОО "Психология человеческой судьбы"',
    '✓ Член ассоциации психосинтеза Украины',
    '✓ Член Центра украинско-европейского научного сотрудничества',
    '✓ Преподаватель кафедры психологии Киевского медицинского  университета',
    '✓ Автор и основатель запатентованного вида психотерапии "Кармотерапия"',
    '✓ Автор научных публикаций, трансформационных практик и медитаций',
    '✓ Основатель "Студии трансформации Сергея Скляренко"',
    '✓ Инициированный кармический диагност, адепт метода "Матрица судьбы" Натальи Ладини и т.д.',
  ],
};

const About = () => {
  const t = useTranslations('Main.About');
  const locale = useLocale();
  const years = new Date().getFullYear() - 2015;
  return (
    <Container styled={styled.container} styledSection={styled.section}>
      <div className={styled.spot} />

      <div className={styled.greeting_wrapper}>
        <TitleNoStyles variant="p" styled={`${styled.headerText}`}>
          {t('author')}
        </TitleNoStyles>
        <TitleNoStyles variant="h2" styled={styled.additional_title1}>
          {t('introduction')}
        </TitleNoStyles>
        <p className={styled.additional_title2}>
          {t('invite', { years: new Date().getMonth() > 4 ? years + ' ' : years - 1 + ' ' })}
        </p>
      </div>
      <div className={styled.about_us_header_container}>
        <Image
          src="/assets/images/aboutSergiy.webp"
          alt={t('author')}
          width={443}
          height={586}
          className={styled.img}
        />
        <ul className={styled.about_us}>
          {text[locale].map((el, index) => (
            <li key={index}>
              {' '}
              <p className={styled.about_us_text}>{el}</p>
            </li>
          ))}
        </ul>
      </div>
      <div className={`${styled.about_us_facts_container}`}>
        <div className={`${styled.about_us_fact} ${styled.about_us_fact1}`}>
          <TitleNoStyles variant="p" styled={`${styled.about_us_fact_title}`}>
            {new Date().getMonth() > 4 ? years : years - 1} {t('years')}
          </TitleNoStyles>
          <p className={styled.about_us_fact_description}>{t('fact1')}</p>
        </div>
        <div className={`${styled.about_us_fact} ${styled.about_us_fact2}`}>
          <TitleNoStyles variant="p" styled={`${styled.about_us_fact_title}`}>
            1000
          </TitleNoStyles>
          <p className={styled.about_us_fact_description}>{t('fact2')} </p>
        </div>
        <div className={`${styled.about_us_fact} ${styled.about_us_fact3}`}>
          <TitleNoStyles variant="p" styled={`${styled.about_us_fact_title}`}>
            15000+
          </TitleNoStyles>
          <p className={styled.about_us_fact_description}>{t('fact3')}</p>
        </div>
        <div className={`${styled.about_us_fact} ${styled.about_us_fact4}`}>
          <p className={styled.about_us_fact_description}>{t('fact4')}</p>
        </div>
      </div>
    </Container>
  );
};

export default About;
