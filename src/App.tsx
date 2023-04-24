import styles from './App.module.css';
import Navbar from './components/Navbar/Navbar';
import { FaDiscord, FaFacebookF, FaSlackHash, FaTwitter } from 'react-icons/fa';
import {
  catalogFamilyFriendly,
  catalogNewReleases,
  catalogAction,
  catalogTopSelling,
  heroItem1,
  heroItem2,
  navigationLinks,
} from './data';
import HeroCard from './components/HeroCard/HeroCard';
import { Button, Search } from './components';
import Carousel from './components/Carousel/Carousel';
import { useEffect, useState } from 'react';

function App() {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.navigation}>
          <Navbar />
        </div>
        <div className={styles.searchSection}>
          <Search />
          <div className={styles.divider}></div>
        </div>
        <main>
          <section className={styles.heroSection}>
            {heroItem1.map((item) => {
              return (
                <HeroCard
                  key={item.id}
                  image={item.image}
                  title={item.title}
                  description={item.description}
                />
              );
            })}
          </section>
          <section className={styles.catalogSection}>
            <div className={styles.catalogRow}>
              <h3 className={styles.catalogHeader}>New Releases</h3>
              <Carousel catalogs={catalogNewReleases} />
            </div>
          </section>
          <section className={styles.catalogSection}>
            <div className={styles.catalogRow}>
              <h3 className={styles.catalogHeader}>Top Selling</h3>
              <Carousel catalogs={catalogTopSelling} />
            </div>
          </section>
          <section className={styles.heroSection}>
            {heroItem2.map((item) => {
              return (
                <HeroCard
                  key={item.id}
                  image={item.image}
                  title={item.title}
                  description={item.description}
                />
              );
            })}
          </section>
          <section className={styles.catalogSection}>
            <div className={styles.catalogRow}>
              <h3 className={styles.catalogHeader}>Action</h3>
              <Carousel catalogs={catalogAction} />
            </div>
          </section>
          {/* <section className={styles.upSellSection}>
            <div className={styles.upSellCard}></div>
            <div className={styles.upSellCard}></div>
          </section> */}
          <section className={styles.catalogSection}>
            <div className={styles.catalogRow}>
              <h3 className={styles.catalogHeader}>Family Friendly</h3>
              <Carousel catalogs={catalogFamilyFriendly} />
            </div>
          </section>
        </main>
        <footer>
          <nav className={styles.navFooter}>
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
        </footer>
      </div>
    </div>
  );
}

export default App;
