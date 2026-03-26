import Header from './Header';
import Footer from './Footer';

function SiteLayout({ children }) {
  return (
    <div className="site-shell">
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
}

export default SiteLayout;