import { getServerSession } from 'next-auth';
import { authOptions } from '@/app/api/auth/[...nextauth]/route';
import Title from '../Achievement/Title/Title';
import PersonalInfo from './PersonalInfo/PersonalInfo';

const Personal = async () => {
  const session = await getServerSession(authOptions);

  return (
    <>
      <Title title={'Особисті дані'} />
      <PersonalInfo user={session.user} />
    </>
  );
};

export default Personal;
