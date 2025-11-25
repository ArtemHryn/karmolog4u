'use client';
import { useEffect, useState } from 'react';
import { useParams, usePathname } from 'next/navigation';
import Container from '@/components/Common/Container/Container';
import HeroNav from '@/components/Common/HeroNav/HeroNav';
import MeditationsDescriptions from '@/components/Products/Meditations/MeditationDetails/MeditationsDescriptions';
import ProductionCanBeInterestingSlider from '@/components/Common/ProductionCanBeInterestingSlider/ProductionCanBeInterestingSlider';
import list from '@/helper/products/guidesAndBooksList';

const GuideAndBooksDetails = () => {
  const [book, setBook] = useState(null);
  const [canBeInteresting, setCanBeInteresting] = useState([]);

  const params = useParams();
  const pathname = usePathname();

  useEffect(() => {
    const allBooks = [...list.otherGuidesList, ...list.booksList];
    const currentBook = allBooks.find(el => `${el.id}` === params.id);

    const coursesCanBeInteresting = allBooks.filter(
      el => el.category === currentBook.category && el.id !== currentBook.id
    );
    setBook(currentBook);
    setCanBeInteresting(coursesCanBeInteresting);
  }, [params.id]);

  if (!book) return null;

  const links = [
    { href: '/products/guides-and-books', name: 'Гайди та книги' },
    { href: pathname, name: book.name },
  ];
  return (
    <Container>
      <HeroNav linkNames={links} />
      <MeditationsDescriptions meditation={book} />
      <ProductionCanBeInterestingSlider slides={canBeInteresting} />
    </Container>
  );
};

export default GuideAndBooksDetails;
