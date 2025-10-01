import Image from 'next/image';
import { useFormContext } from 'react-hook-form';
import { useSession } from 'next-auth/react';

import { inter } from '@/app/[locale]/layout';
import useCoverUpload from '@/hooks/useCoverUpload';
import styles from './ProfilePhoto.module.scss';
import AccountInfo from '../../../Header/AccountInfo/AccountInfo';

const ProfilePhoto = () => {
  const { register, setValue, watch } = useFormContext();
  const { data: token } = useSession();

  const imageUrl = watch('cover');
  const mutation = useCoverUpload(setValue);

  const handleFileChange = async e => {
    const file = e.target.files?.[0];
    if (!file) return;
    try {
      await mutation.mutateAsync({ file, token: token?.accessToken });
    } catch (error) {
      toast.error(`Помилка: ${error.message}`);
    }
  };

  const isUrl = typeof imageUrl === 'string' && imageUrl.startsWith('http');

  return (
    <div className={styles.wrapper}>
      <p className={styles.title}>1. Фото профілю</p>
      <label className={styles.label}>
        <div>
          {isUrl ? (
            <Image
              src={imageUrl}
              width={80}
              height={80}
              alt="профайл фото"
              className={styles.img}
            />
          ) : (
            <AccountInfo showOnMobile />
          )}
          <input
            type="file"
            accept="image/png, image/wepb, image/jpeg"
            hidden
            {...register('cover', { onChange: handleFileChange })}
          />
        </div>
        <p className={`${styles.text} ${inter.className}`}>
          Хочете оновити вигляд? Завантажте нове фото профілю
        </p>
      </label>
    </div>
  );
};

export default ProfilePhoto;
