import ImageInput from '../../../Meditations/AddMeditation/ClosedPart/ImageInput';
import Price from '../../../Meditations/AddMeditation/ClosedPart/Price/Price';
import GuideAndBookFile from '../GuideAndBookFile/GuideAndBookFile';

const GuidesPart = ({ serverFile }) => {
  return (
    <>
      <ImageInput />
      <GuideAndBookFile serverFile={serverFile} />
      <Price />
    </>
  );
};

export default GuidesPart;
