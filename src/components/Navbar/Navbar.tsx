import React, { useEffect, useState } from 'react';
import { Button } from '../../components';
import { HiBell, HiCog6Tooth, HiShoppingCart } from 'react-icons/hi2';
import {
  FaBars,
  FaDiscord,
  FaFacebookF,
  FaSlackHash,
  FaTwitter,
} from 'react-icons/fa';
import { AiOutlineClose } from 'react-icons/ai';
import styles from './Navbar.module.css';
import { navigationLinks } from '../../data';

const Navbar = () => {
  const [sideNav, setSideNav] = useState(false);

  const toggleSideNav = () => {
    setSideNav(!sideNav);
  };

  useEffect(() => {
    if (sideNav) {
      document.body.classList.add('sideNavOpen');
    } else {
      document.body.classList.remove('sideNavOpen');
    }
  }, [sideNav]);

  return (
    <header>
      <nav className={styles.navFlyout}>
        <Button
          variant="icon"
          title="Open Side Navigation"
          onClick={toggleSideNav}
        >
          <FaBars className={styles.icon} />
        </Button>

        <div className={`${styles.sideNav} ${sideNav ? styles.open : ''}`}>
          <Button
            variant="icon"
            title="Close Side Navigation"
            className={styles.closeBtn}
            onClick={toggleSideNav}
          >
            <AiOutlineClose className={styles.icon} />
          </Button>
          <ul>
            {navigationLinks.map((link) => {
              return (
                <li key={link.id}>
                  <Button href={link.href}>{link.title}</Button>
                </li>
              );
            })}
          </ul>
          <div className={styles.social}>
            <Button variant="icon" title="twitter">
              <FaTwitter className={styles.icon} />
            </Button>
            <Button variant="icon" title="facebook">
              <FaFacebookF className={styles.icon} />
            </Button>
            <Button variant="icon" title="discord">
              <FaDiscord className={styles.icon} />
            </Button>
            <Button variant="icon" title="slack">
              <FaSlackHash className={styles.icon} />
            </Button>
          </div>
        </div>
      </nav>
      <nav className={styles.navLinks}>
        <div className={styles.logo}>
          <img src="/images/joystick.png" alt="logo" />
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
