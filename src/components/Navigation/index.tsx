import { useState } from 'react';
import { Link } from 'react-router-dom';

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
    console.log(active);
    active ? setActive(false) : setActive(true);
  };

  return (
    <>
      <nav className="navigation">
        <button
          className={
            active ? 'nav-mobile nav-hamburger' : 'nav-mobile nav-cross'
          }
          onClick={handleShowMenu}
        ></button>
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
