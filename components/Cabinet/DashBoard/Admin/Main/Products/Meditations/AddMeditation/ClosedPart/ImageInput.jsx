import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { useFormContext } from 'react-hook-form';
import { toast } from 'react-toastify';
import styles from './ClosedPart.module.scss';

const MAX_FILE_SIZE = 10 * 1024 * 1024;

const ImageInput = () => {
  const [previewImage, setPreviewImage] = useState(null);
  const fileInputRef = useRef(null);
  const { register, setValue, getValues } = useFormContext();

  useEffect(() => {
    const cover = getValues('cover');

    if (cover && typeof cover === 'string' && cover.startsWith('http')) {
      setPreviewImage(cover); // Якщо в `cover` посилання, використовуємо його як URL
    }
  }, [getValues]);

  const handleFileChange = e => {
    const file = e.target.files?.[0];
    if (file) {
      if (file.size > MAX_FILE_SIZE) {
        toast.error('Розмір зображення не повинен перевищувати 10 MB');
        e.target.value = '';
        return;
      }

      setPreviewImage(URL.createObjectURL(file));
      setValue('cover', file);
    }
  };

  return (
    <label className={styles.img_label}>
      Обкладинка
      {previewImage ? (
        <div className={`${styles.image_wrapper}`}>
          <Image width={140} height={140} alt="cover" src={previewImage} className={styles.image} />
        </div>
      ) : (
        <div className={`${styles.image_wrapper} ${styles.no_image}`}>
          <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M13 11V6H11V11H6V13H11V18H13V13H18V11H13Z" fill="#2961E0" />
          </svg>
          <p className={styles.add_image_text}>Додати</p>
        </div>
      )}
      <input
        type="file"
        ref={fileInputRef}
        accept="image/png, image/webp, image/jpeg"
        hidden
        {...register('cover', { onChange: handleFileChange })}
      />
    </label>
  );
};

export default ImageInput;
