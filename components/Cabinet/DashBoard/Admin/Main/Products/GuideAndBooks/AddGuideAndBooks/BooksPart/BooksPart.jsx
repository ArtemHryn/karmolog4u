import React from 'react';
import ImageInput from '../../../Meditations/AddMeditation/ClosedPart/ImageInput';
import Price from '../../../Meditations/AddMeditation/ClosedPart/Price/Price';
import Description from '../../../Meditations/AddMeditation/ClosedPart/Description';
import GuideAndBookFile from '../GuideAndBookFile/GuideAndBookFile';

const BooksPart = ({ serverFile }) => {
  return (
    <>
      <ImageInput />
      <GuideAndBookFile serverFile={serverFile} />
      <Price />
      <Description />
    </>
  );
};

export default BooksPart;
