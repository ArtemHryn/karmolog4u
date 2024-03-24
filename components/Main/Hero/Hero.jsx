import Image from 'next/image';
import Marquees from './Marquees/Marquees';
import VideoButton from './VideoButton/VideoButton';
import Container from '@components/Common/Container/Container';

import styled from './Hero.module.scss';
import { unbounded } from '@/app/layout';

const Hero = () => {
  return (
    <Container styledSection={styled.styled_section}>
      <p className={styled.text}>Ваш провідник в щасливе та гармонійне життя</p>
      <h1 className={`${styled.author} ${unbounded.className}`}>СЕРГІЙ СКЛЯРЕНКО</h1>
      <div className={styled.description_container}>
        <div>
          <h1 className={`${styled.author2} ${unbounded.className}`}>СЕРГІЙ СКЛЯРЕНКО</h1>
          <div className={styled.text_wrapper}>
            <p className={`${styled.text_description} ${styled.additional_text_description}`}>
              Саме тут ви знайдете створене для вас унікальне середовище — простір енергетичної
              сили, спроєктований для вашої користі. А також, потужні інструменти — для кожного, хто
              прагне глобальних трансформацій на шляху до свідомого, забезпеченого, гармонійного та
              щасливого життя.
            </p>
            <p className={`${styled.text_description} ${styled.additional_text_description}`}>
              Моя мета  — допомогти вам відкрити нові можливості й знайти власний шлях до омріяного
              буття.
            </p>
            <p className={`${styled.text_description}`}>
              {' '}
              З любов&apos;ю та готовністю допомагати!
            </p>
            <VideoButton />
          </div>
        </div>
        <picture className={styled.hero_img}>
          <source srcSet={'/assets/images/SergiyHeroDesk.webp'} media="(min-width: 1280px)" />
          <Image
            src="/assets/images/SergiyHero.webp"
            width={360}
            height={680}
            alt="Сергій Скляренко"
            className={styled.hero_img}
            priority={true}
          />
        </picture>
      </div>
      <Marquees />
    </Container>
  );
};

export default Hero;
