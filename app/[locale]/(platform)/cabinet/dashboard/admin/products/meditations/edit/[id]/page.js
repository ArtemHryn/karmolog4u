import FormHead from '@components/Cabinet/DashBoard/Admin/FormHead/FormHead';
import styles from './edit_meditation_page.module.scss';
import MeditationForm from '@components/Cabinet/DashBoard/Admin/Main/Products/Meditations/AddMeditation/AddMeditation';
import { auth } from '@auth';

const editMeditation = async (id, token) => {
  const res = await fetch(`http://localhost:4499/admin/products/meditations/get/${id}`, {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
  });
  if (!res.ok) {
    throw new Error('Failed to fetch meditations');
  }
  return res.json();
};

const EditPage = async ({ params }) => {
  const { accessToken } = await auth();
  const [meditation] = await editMeditation(params.id, accessToken);

  return (
    <div className={styles.wrapper}>
      <FormHead title={'Редагувати публікацію'} />
      <MeditationForm edit={meditation} />
    </div>
  );
};

export default EditPage;
