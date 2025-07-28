import ScrollToTop from '@components/Common/ScrollToTop/ScrollToTop';
import Footer from '@components/Footer/Footer';
import Header from '@components/Header/Header';
import PageProgress from '@/components/Common/PageProgress/PageProgress';
import './globals.scss';

export default function WebLayout({ children }) {
  return (
    <PageProgress color="#cfb691">
      <Header />
      <ScrollToTop />
      {children}
      <Footer />
    </PageProgress>
  );
}
