import { useState } from 'react';
import useScrollLock from '../hooks/useScrollLock';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons';
import styles from '../assets/NavBar.module.css';

const links = [
  {
    name: 'Home',
    id: '#home',
  },
  {
    name: 'About',
    id: '#about',
  },
  {
    name: 'Contact',
    id: '#contact',
  },
];

function NavBar() {
  const [showNav, setShowNav] = useState(false);
  const { lockScroll, unlockScroll } = useScrollLock();

  const toggleShowNav = () => {
    setShowNav(!showNav);
    if (showNav) {
      unlockScroll();
    } else {
      lockScroll();
    }
  };
  return (
    <div className={styles.navContainer}>
      <div className={styles.mobile_btn} id='nav-click' onClick={toggleShowNav}>
        {showNav ? (
          <FontAwesomeIcon className={styles.icon} icon={faXmark} size='lg' />
        ) : (
          <FontAwesomeIcon className={styles.icon} icon={faBars} size='lg' />
        )}
      </div>
      <div
        className={
          showNav
            ? [styles.navContainer, styles.navActive].join(' ')
            : styles.navContainer
        }
      >
        <div className={styles.linkContainer}>
          {links.map((link, i) => (
            <a href={link.id} key={i}>
              {link.name}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}

export default NavBar;
