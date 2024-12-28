import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop: React.FC = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0); // Posuň stránku na vrchol
  }, [pathname]);

  return null;
};

export default ScrollToTop;
