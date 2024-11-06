import ScrollToTop from '@components/Common/ScrollToTop/ScrollToTop';
import Footer from '@components/Footer/Footer';
import Header from '@components/Header/Header';
import './globals.scss'

export default function WebLayout({ children }) {
  return (
    <>
      <Header />
      <ScrollToTop />
      {children}
      <Footer />
    </>
  );
}
