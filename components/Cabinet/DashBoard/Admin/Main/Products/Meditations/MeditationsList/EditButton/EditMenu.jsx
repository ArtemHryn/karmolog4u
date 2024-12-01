import { usePathname, useRouter } from 'next/navigation';
import Delete from './Icons/Delete';
import Edit from './Icons/Edit';
import Hide from './Icons/Hide';

import styles from './EditButton.module.scss';

const EditMenu = ({ setVisibleDialogToHide, setVisibleDialogToDelete, status }) => {
  //   const route = useRouter();
  const pathname = usePathname();

  const onEdit = () => {
    // route.push(`${pathname}/edit?id=${id}`);
    console.log(pathname, id);
  };
  return (
    <ul className={styles.list}>
      <li>
        <button className={styles.button} onClick={() => {}}>
          <Edit />
          Редагувати
        </button>
      </li>
      <li>
        <button
          className={styles.button}
          onClick={() => {
            setVisibleDialogToHide(true);
            document.body.style.overflow = 'hidden';
          }}
        >
          <Hide />
          {status === 'hidden' ? 'Опубліковати' : 'Приховати'}
        </button>
      </li>
      <li className={styles.item}>
        <button
          className={styles.button}
          onClick={() => {
            setVisibleDialogToDelete(true);
            document.body.style.overflow = 'hidden';
          }}
        >
          <Delete />
          Видалити
        </button>
      </li>
    </ul>
  );
};

export default EditMenu;
