import { useState } from 'react';
import { Link } from 'react-router-dom';
import HamburgerIcon from './img/hamburgerIcon.svg';
import CrossIcon from './img/crossIcon.svg';
import './styleNavigation.css';

/*
document.body.innerHTML += 'funguju';

const navElement = document.querySelector('.nav-list');
const navButton = document.querySelector('.nav-mobile');

const showMenu = () => {
  navElement.classList.toggle('nav-list-hidden');
  navButton.classList.toggle('nav-hamburger');
  navButton.classList.toggle('nav-cross');
  console.log('kliknutí');
};
*/

export const Navigation: React.FC = () => {
  const [active, setActive] = useState<boolean>(true);

  const handleShowMenu = () => {
    active ? setActive(false) : setActive(true);
  };

  return (
    <>
      <nav className="navigation">
        <button className="nav-mobile" onClick={handleShowMenu}>
          {active ? <img src={HamburgerIcon} /> : <img src={CrossIcon} />}
        </button>
      </nav>
      <div className={active ? 'nav-list nav-list-hidden' : 'nav-list'}>
        <ul className="menu__list">
          <Link className="menuItem" to="/">
            <div className="menuItem">
              <li>Domů</li>
            </div>
          </Link>

          <Link className="menuItem" to="o-mne">
            <div className="menuItem">
              <li>O mně</li>
            </div>
          </Link>
          <Link className="menuItem" to="kurzy">
            <div className="menuItem">
              <li>Kurzy</li>
            </div>
          </Link>
          <Link className="menuItem" to="kontakty">
            <div className="menuItem">
              <li>Kontakt</li>
            </div>
          </Link>
          <a
            className="menuItem"
            href="https://www.fler.cz/japonstina-s-ajou"
            title="odkaz na Fler"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="menuItem">
              <li>e-Shop</li>
            </div>
          </a>
        </ul>
      </div>
    </>
  );
};
