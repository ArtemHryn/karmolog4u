import FormHead from '@components/Cabinet/DashBoard/Admin/FormHead/FormHead';
import AddWebinar from '@components/Cabinet/DashBoard/Admin/Main/Products/Webinars/AddWebinar/AddWebinar';
import { getServerSession } from 'next-auth';
import { authOptions } from '@app/api/auth/[...nextauth]/route';
import styles from './edit_meditation_page.module.scss';

const editWebinar = async (id, token) => {
  const res = await fetch(`http://localhost:4499/admin/products/webinar/get/${id}`, {
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
  const { accessToken } = await getServerSession(authOptions);
  // const [webinar] = await editWebinar(params.id, accessToken);

  return (
    <div className={styles.wrapper}>
      <FormHead title={'Редагувати публікацію'} />
      <AddWebinar edit={{}} />
    </div>
  );
};

export default EditPage;
