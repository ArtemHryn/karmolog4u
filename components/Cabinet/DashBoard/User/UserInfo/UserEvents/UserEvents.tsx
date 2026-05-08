import EventsHeader from './EventsHeader/EventsHeader';
import UserFooter from '../../Footer/Footer';

import EventsBody from './EventsBody/EventsBody';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const UserEvents = () => {
  return (
    <>
      <EventsHeader />
      <EventsBody />
      <UserFooter />
      <ToastContainer />
    </>
  );
};

export default UserEvents;
