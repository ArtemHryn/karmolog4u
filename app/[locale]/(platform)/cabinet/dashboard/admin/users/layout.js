import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const UsersLayout = ({ children }) => {
  return (
    <>
      {children}
      <ToastContainer autoClose={2000} closeOnClick />
    </>
  );
};

export default UsersLayout;
