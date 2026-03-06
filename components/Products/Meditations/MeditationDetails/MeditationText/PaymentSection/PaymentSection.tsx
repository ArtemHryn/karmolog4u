import { open_Sans_Client } from '@/app/[locale]/clients-fonts';
import styles from './PaymentSection.module.scss';

interface PaymentSectionProps {
  price: number;
  setShowModal: (show: boolean) => void;
  discount?: { discount: number };
}
const PaymentSection = ({ price, setShowModal, discount }: PaymentSectionProps) => {
  const getPriceWithDiscount = () => {
    if (!discount || !price) return '';
    return price - (price * discount.discount) / 100;
  };
  return (
    <div className={styles.wrapper}>
      <div className={styles.price_wrapper}>
        <p className={`${styles.price} ${discount?.discount && styles.discount}`}>{price}€</p>
        {discount && <p className={styles.price}>{getPriceWithDiscount()}€</p>}
      </div>
      <button
        className={`${styles.button} ${open_Sans_Client.className}`}
        onClick={() => setShowModal(true)}
      >
        Придбати
      </button>
    </div>
  );
};

export default PaymentSection;
