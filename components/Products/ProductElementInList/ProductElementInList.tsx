import { useState } from 'react';
import Cover from './Cover/Cover';
import Info from './Info/Info';
import { ProductCardProps } from '@/types/products';
import ModalBuyForm from '@/components/Products/ModalBuyForm/ModalBuyForm';
import SimpleModalContainer from '@/components/Common/SimpleModalContainer/SimpleModalContainer';

interface ProductElementInListProps {
  card: ProductCardProps;
}

const ProductElementInList = ({ card }: ProductElementInListProps) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <Cover card={card} />
      <Info card={card} setShowModal={setShowModal} />
      {showModal && (
        <SimpleModalContainer setShowModal={setShowModal}>
          <ModalBuyForm card={card} />
        </SimpleModalContainer>
      )}
    </>
  );
};

export default ProductElementInList;
