import './styleHeader.css';
import japonstinaSAjouHeader from './img/IMG_1323.jpg';

export const Header: React.FC = () => {
  return (
    <header>
      <img src={japonstinaSAjouHeader} alt="Ája" className="headerImg" />
    </header>
  );
};
