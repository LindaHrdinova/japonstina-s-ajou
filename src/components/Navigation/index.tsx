import { useState } from 'react';

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
          <a className="menuItem" href="/">
            <div className="menuItem">
              <li>domů</li>
            </div>
          </a>

          <a className="menuItem" href="o-mne">
            <div className="menuItem">
              <li>o mně</li>
            </div>
          </a>
          <a className="menuItem" href="kurzy">
            <div className="menuItem">
              <li>kurzy</li>
            </div>
          </a>
          <a className="menuItem" href="kontakty">
            <div className="menuItem">
              <li>kontakt</li>
            </div>
          </a>
          <a className="menuItem" href="https://www.fler.cz/japonstina-s-ajou">
            <div className="menuItem">
              <li>e-shop</li>
            </div>
          </a>
        </ul>
      </div>
    </>
  );
};
