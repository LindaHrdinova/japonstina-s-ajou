import './styleFooter.css';
import { Link } from 'react-router-dom';

export const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <span className="leftText">
        <Link to="/" className="footer_link">
          JAPONŠTINA S ÁJOU
        </Link>
      </span>
      <span className="rightText">
        <Link to="obchodni-podminky" className="footer_link">
          Obchodní podmínky
        </Link>
      </span>
    </footer>
  );
};
