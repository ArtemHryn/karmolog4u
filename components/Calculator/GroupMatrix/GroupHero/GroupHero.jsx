import { useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import GroupMatrixForm from '../GroupMatrixForm/GroupMatrixForm';
import CalculatorHero from '@/components/Calculator/CalculatorHero/CalculatorHero';

const GroupHero = ({
  heroData,
  usersInfo,
  setUsersInfo,
  setIsShowMatrix,
  setIsChecked,
  isChecked,
}) => {
  const searchParams = useSearchParams();

  useEffect(() => {
    if (!searchParams.get('date1')) {
      setIsChecked(true);
      return;
    }
    const users = [];
    searchParams.forEach((value, key) => {
      const index = key[key.length - 1];

      if (!key.includes('date')) return;
      if (index - 1 !== users.length) return;

      if (isNaN(parseInt(index))) {
        return;
      }

      if (key.includes('date')) {
        users[index - 1] = { date: value };
      }
    });
    if (users.length <= 2) {
      setIsChecked(true);
      return;
    }
    setUsersInfo(users);
    setIsChecked(true);
    setIsShowMatrix(true);
  }, [searchParams, setIsChecked, setIsShowMatrix, setUsersInfo]);

  if (!isChecked) return null;

  return (
    <>
      <CalculatorHero heroData={heroData} />
      <GroupMatrixForm
        usersInfo={usersInfo}
        setUsersInfo={setUsersInfo}
        setIsShowMatrix={setIsShowMatrix}
      />
    </>
  );
};

export default GroupHero;
