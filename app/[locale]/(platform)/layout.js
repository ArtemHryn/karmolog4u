import PageProgress from '@/components/Common/PageProgress/PageProgress';
import './globals.scss';

const CabinetLayout = ({ children }) => {
  return <PageProgress color="#2961e0">{children}</PageProgress>;
};

export default CabinetLayout;
