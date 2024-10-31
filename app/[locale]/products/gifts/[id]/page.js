'use client';
import { useParams, usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import Container from '@components/Common/Container/Container';
import { gifts } from '@helper/products/giftsList';
import HeroNav from '@components/Common/HeroNav/HeroNav';
import GiftsDetails from '@components/Products/Gifts/GiftsDetails/GiftsDetails';
import GiftCanBeInteresting from '@components/Common/ProductionCanBeInterestingSlider/GiftCanBeInteresting';

const GiftDetailsPage = ({ params: { locale } }) => {
  const [gift, setGift] = useState(null);
  const [canBeInteresting, setCanBeInteresting] = useState([]);
  const params = useParams();
  const pathname = usePathname();

  useEffect(() => {
    const currentGift = gifts.find(el => `${el.id}` === params.id);
    const giftsCanBeInteresting = gifts.filter(el => el.id !== currentGift.id);
    setGift(currentGift);
    setCanBeInteresting(giftsCanBeInteresting);
  }, [params.id]);

  if (!gift) return null;

  const links = [
    { href: '/products/gifts', name: { uk: 'Подарунки Студії', ru: 'Подарки Студии' } },
    { href: pathname, name: gift.name[locale] },
  ];

  return (
    <Container>
      <HeroNav linkNames={links} />
      <GiftsDetails gift={gift} />
      {/* <GiftCanBeInteresting slides={canBeInteresting} /> */}
    </Container>
  );
};

export default GiftDetailsPage;
