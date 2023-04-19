import './App.css';
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
  ICatalog,
} from './data';
import HeroCard from './components/HeroCard/HeroCard';
import { Button, ProductCard, Search } from './components';

function App() {
  return (
    <div className="container">
      <div className="wrapper">
        <Navbar />
        <main>
          <div className="filter-section">
            <Search />
            <div className="divider"></div>
          </div>
          <section className="hero-section">
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
          <section className="catalog">
            <div className="catalog-row">
              <h3 className="catalog-header">New Releases</h3>
              <ul>
                {catalogNewReleases.map((game: ICatalog) => {
                  return (
                    <li key={game.id}>
                      <ProductCard game={game} />
                    </li>
                  );
                })}
              </ul>
            </div>
          </section>
          <section className="catalog">
            <div className="catalog-row">
              <h3 className="catalog-header">New Releases</h3>
              <ul>
                {catalogTopSelling.map((game: ICatalog) => {
                  return (
                    <li key={game.id}>
                      <ProductCard game={game} />
                    </li>
                  );
                })}
              </ul>
            </div>
          </section>
          <section className="hero-section">
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
          <section className="catalog">
            <div className="catalog-row">
              <h3 className="catalog-header">Action</h3>
              <ul>
                {catalogAction.map((game: ICatalog) => {
                  return (
                    <li key={game.id}>
                      <ProductCard game={game} />
                    </li>
                  );
                })}
              </ul>
            </div>
          </section>
          <section className="product-section">
            <div className="product-card"></div>
            <div className="product-card"></div>
          </section>
          <section className="catalog">
            <div className="catalog-row">
              <h3 className="catalog-header">Family Friendly</h3>
              <ul>
                {catalogFamilyFriendly.map((game: ICatalog) => {
                  return (
                    <li key={game.id}>
                      <ProductCard game={game} />
                    </li>
                  );
                })}
              </ul>
            </div>
          </section>
        </main>
        <footer>
          <nav>
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
          <div className="social">
            <Button variant="icon" title="Notification">
              <FaTwitter className="icon" />
            </Button>
            <Button variant="icon" title="Notification">
              <FaFacebookF className="icon" />
            </Button>
            <Button variant="icon" title="Notification">
              <FaDiscord className="icon" />
            </Button>
            <Button variant="icon" title="Notification">
              <FaSlackHash className="icon" />
            </Button>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default App;
