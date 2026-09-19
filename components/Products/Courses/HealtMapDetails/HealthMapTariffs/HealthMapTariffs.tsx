import Container from '@/components/Common/Container/Container';
import Card from '@/components/TherapySessions/Pricing/Card';

const info = { title: { uk: 'Вартість курсу', ru: 'Стоимость курса' }, price: '50€' };

const HealthMapTariffs = () => {

  return (
    <Container styled={''} styledSection={''}>
      <Card content={{ ...info, addTitle: false }} />
    </Container>
  );
};

export default HealthMapTariffs;
