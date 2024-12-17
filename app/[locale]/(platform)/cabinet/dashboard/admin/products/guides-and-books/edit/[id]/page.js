import FormHead from '@components/Cabinet/DashBoard/Admin/FormHead/FormHead';
import AddGuideAndBooks from '@components/Cabinet/DashBoard/Admin/Main/Products/GuideAndBooks/AddGuideAndBooks/AddGuideAndBooks';
import { auth } from '@auth';
import styles from './edit_meditation_page.module.scss';

const editGuideAndBook = async (id, token) => {
  const res = await fetch(`http://localhost:4499/admin/products/guide-and-book/get/${id}`, {
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
  // const [guide_and_book] = await editWebinar(params.id, accessToken);

  return (
    <div className={styles.wrapper}>
      <FormHead title={'Редагувати публікацію'} />
      <AddGuideAndBooks edit={{}} />
    </div>
  );
};

export default EditPage;
