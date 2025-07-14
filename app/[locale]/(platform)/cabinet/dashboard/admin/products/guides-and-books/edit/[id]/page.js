import { getServerSession } from 'next-auth';
import FormHead from '@components/Cabinet/DashBoard/Admin/FormHead/FormHead';
import AddGuideAndBooks from '@components/Cabinet/DashBoard/Admin/Main/Products/GuideAndBooks/AddGuideAndBooks/AddGuideAndBooks';
import { authOptions } from '@app/api/auth/[...nextauth]/route';

import styles from './edit_meditation_page.module.scss';
import { base_url } from '@helper/consts';

export const revalidate = 0;

const editGuideAndBook = async (id, token) => {
  const res = await fetch(`${base_url}/admin/products/guides-and-books/get/${id}`, {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
    cache: 'no-store',
  });
  if (!res.ok) {
    throw new Error('Failed to fetch guide or book');
  }
  return res.json();
};

const EditPage = async ({ params }) => {
  const { accessToken } = await getServerSession(authOptions);
  const guide_and_book = await editGuideAndBook(params.id, accessToken);

  return (
    <div className={styles.wrapper}>
      <FormHead title={'Редагувати публікацію'} />
      <AddGuideAndBooks edit={guide_and_book} />
    </div>
  );
};

export default EditPage;
