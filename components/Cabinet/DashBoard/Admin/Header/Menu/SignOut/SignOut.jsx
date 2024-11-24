'use client'

import SignOutIcon from './SignOutIcon';

import styles from './SignOut.module.scss';
import { signOut } from 'next-auth/react';

const SignOut = () => {
  return (
    <div className={styles.wrapper}>
      <button className={styles.button} onClick={async () => await signOut()}>
        <SignOutIcon />
        Вийти з акаунту
      </button>
    </div>
  );
};

export default SignOut;
