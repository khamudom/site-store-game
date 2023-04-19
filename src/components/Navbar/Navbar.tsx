import React from 'react';
import { Button } from '../../components';
import { HiBell, HiCog6Tooth, HiShoppingCart } from 'react-icons/hi2';
import styles from './Navbar.module.css';
import { navigationLinks } from '../../data';

const Navbar = () => {
  return (
    <header>
      <nav>
        <div className={styles.logo}>
          <img src="/src/assets/images/astrogame.png" alt="logo" />
        </div>
        <ul>
          {navigationLinks.map((link) => {
            return (
              <li>
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
