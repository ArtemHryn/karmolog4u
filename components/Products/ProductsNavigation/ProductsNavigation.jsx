'use client';

import { useParams, useSelectedLayoutSegment, usePathname } from 'next/navigation';
import Container from '@components/Common/Container/Container';
import InternalNavTitle from '@components/Common/InternalNavTitle/InternalNavTitle';
import ProductsNavLinks from './ProductsNavLinks/ProductsNavLinks';

import styles from './ProductsNavLinks/ProductsNavLinks.module.scss';

const linksList = [
  { name: { uk: 'Медитації', ru: 'Медитации' }, href: 'meditations' },
  { name: { uk: 'Вебінари', ru: 'Вебинары' }, href: 'courses' },
  { name: { uk: 'Гайди та книги', ru: 'Гайды и книги' }, href: 'guides-and-books' },
  { name: { uk: 'Подарунки Студії', ru: 'Подарки Студии' }, href: 'gifts' },
];

const ProductsNavigation = () => {
  const params = useParams();
  const segment = useSelectedLayoutSegment();
  const pathname = usePathname();

  if (params.id || pathname.includes('health-map-details')) return null;
  const links = [linksList.find(el => el.href === segment)];

  return (
    <Container styledSection={styles.section}>
      <InternalNavTitle
        links={links}
        title={{ uk: 'АВТОРСЬКІ ПРОДУКТИ', ru: 'АВТОРСКИЕ ПРОДУКТЫ' }}
      />
      <ProductsNavLinks links={linksList} />
    </Container>
  );
};

export default ProductsNavigation;
