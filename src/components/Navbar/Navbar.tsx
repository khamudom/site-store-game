import React from 'react';
import { Button } from '../../components';
import { HiBell, HiCog6Tooth, HiShoppingCart } from 'react-icons/hi2';
import { FaBars } from 'react-icons/fa';
import styles from './Navbar.module.css';
import { navigationLinks } from '../../data';

const Navbar = () => {
  return (
    <header>
      <nav className={styles.navFlyout}>
        <Button variant="icon">
          <FaBars className={styles.icon} />
        </Button>
      </nav>
      <nav className={styles.navLinks}>
        <div className={styles.logo}>
          <img src="/src/assets/images/joystick.png" alt="logo" />
        </div>
        <ul>
          {navigationLinks.map((link) => {
            return (
              <li key={link.id}>
                <Button href={link.href}>{link.title}</Button>
              </li>
            );
          })}
        </ul>
      </nav>
      <div className={styles.account}>
        <Button variant="icon" title="Notification">
          <HiBell className={styles.icon} />
        </Button>
        <Button variant="icon" title="Shopping Cart">
          <HiShoppingCart className={styles.icon} />
        </Button>
        <Button variant="icon" title="Settings">
          <HiCog6Tooth className={styles.icon} />
        </Button>
      </div>
    </header>
  );
};

export default Navbar;
