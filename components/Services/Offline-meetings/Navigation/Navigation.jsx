import Container from '@components/Common/Container/Container';
import NavLinks from './NavLinks';
import InternalNavTitle from '@components/Common/InternalNavTitle/InternalNavTitle';

const links = [
  { href: '/offline-meetings', name: { uk: 'Офлайн-зустрічі', ru: 'Офлайн-встречи' } },
];

const Navigation = () => {
  return (
    <Container>
      <InternalNavTitle links={links} title={{ uk: 'ОФЛАЙН-ЗУСТРІЧІ', ru: 'ОФЛАЙН-ВСТРЕЧИ' }} />
      <NavLinks />
    </Container>
  );
};

export default Navigation;
