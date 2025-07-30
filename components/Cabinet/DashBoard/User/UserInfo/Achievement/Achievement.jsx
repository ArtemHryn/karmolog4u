import Certificates from './Certificates/Certificates';
import Title from './Title/Title';

const Achievement = () => {
  return (
    <>
      <Title title={'Мої досягнення'} />
      <div>
        <Certificates />
      </div>
    </>
  );
};

export default Achievement;
