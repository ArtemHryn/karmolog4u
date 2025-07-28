import { getServerSession } from 'next-auth';
import { authOptions } from '@/app/api/auth/[...nextauth]/route';

import styles from './Greeting.module.scss';
import { unbounded } from '@/app/[locale]/layout';

const Greeting = async () => {
  const { user } = await getServerSession(authOptions);

  return (
    <div className={styles.wrapper}>
      <p className={`${styles.name_text} ${unbounded.className}`}>Привіт, {user.name}</p>
      <p className={`${styles.greeting} ${unbounded.className}`}>
        Ласкаво просимо до особистого кабінету!
      </p>
    </div>
  );
};

export default Greeting;
