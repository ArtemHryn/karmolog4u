import { redirect } from 'next/navigation';

const UserPage = async () => {
  redirect('/cabinet/dashboard/user/achievement');
};

export default UserPage;
