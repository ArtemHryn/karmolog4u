import { useRef, useState } from 'react';
import TitleNoStyles from '@/components/Common/TitleNoStyles/TitleNoStyles';
import styles from './ModalPayment.module.scss';
import { useSession } from 'next-auth/react';
import useGetEducationPayment from '@/hooks/useGetEducationPayment';

type PaymentMethod = 'telegram' | 'wayForPay' | 'requisites';

type AllowedPayments = Record<PaymentMethod, boolean>;

interface ModalPaymentProps {
  allowed: AllowedPayments;
  requisitesText: string;
  id: string;
  name: string;
}

type PaymentButton = {
  name: string;
  action: () => void;
  type: PaymentMethod;
};

const ModalPayment = ({ allowed, requisitesText, id, name }: ModalPaymentProps) => {
  const [showReq, setShowReq] = useState(false);
  const ref = useRef<HTMLDivElement | null>(null);
  const { data: token } = useSession();
  const mutation = useGetEducationPayment(token?.accessToken || '');
  const btnList: PaymentButton[] = [
    {
      name: 'Telegram',
      type: 'telegram',
      action: () => {
        const text = `Привіт, хочу дізнатися про курс ${name}`;
        const url = `https://t.me/karmologforyou?text=${encodeURIComponent(text)}`;

        window.open(url, '_blank');
      },
    },
    {
      name: 'WayForPay',
      type: 'wayForPay',
      action: () => mutation.mutate(id),
    },
    {
      name: 'Реквізити',
      type: 'requisites',
      action: () => setShowReq(prev => !prev),
    },
  ];

  const visibleButtons = btnList.filter(btn => allowed[btn.type]);
  return (
    <div className={styles.container}>
      <TitleNoStyles variant="p" styled={styles.title}>
        Виберість спосіб оплати
      </TitleNoStyles>
      <ul className={styles.btn_list}>
        {visibleButtons.map(b => (
          <li key={b.type}>
            <button onClick={b.action} className={styles.btn}>
              {b.name}
            </button>
          </li>
        ))}
      </ul>

      <div
        className={`${styles.requisites_wrapper}`}
        ref={ref}
        style={{
          height: showReq ? `${ref.current?.scrollHeight || 0}px` : '0px',
          opacity: showReq ? 1 : 0,
        }}
      >
        <TitleNoStyles variant="p" styled={styles.requisites_title}>
          Реквізити для оплати
        </TitleNoStyles>
        <p className={styles.requisites_text}>{requisitesText}</p>
      </div>
    </div>
  );
};

export default ModalPayment;
