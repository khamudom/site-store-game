import './App.css';
import { HiBell, HiCog6Tooth, HiShoppingCart } from 'react-icons/hi2';
import {
  FaDiscord,
  FaFacebookF,
  FaSearch,
  FaSlackHash,
  FaTwitter,
} from 'react-icons/fa';
import {
  catalogFamilyFriendly,
  catalogNewReleases,
  catalogAction,
  catalogTopSelling,
  heroItem1,
  heroItem2,
} from './data';

function App() {
  return (
    <div className="container">
      <div className="wrapper">
        <header>
          <nav>
            <div className="logo">
              <img src="/images/astronaut.jpg" alt="store logo" />
            </div>
            <ul>
              <li>Home</li>
              <li>Deals</li>
              <li>Staff Picks</li>
              <li>Reviews</li>
            </ul>
          </nav>
          <div className="account">
            <HiBell className="icon" />
            <HiShoppingCart className="icon" />
            <HiCog6Tooth className="icon" />
          </div>
        </header>
        <main>
          <section className="filter-section">
            <div className="input-wrapper">
              <input type="search" placeholder="Search" />
              <FaSearch className="icon" />
            </div>
            <div className="divider"></div>
          </section>
          <section className="hero-section">
            {heroItem1.map((item) => {
              return (
                <div className="hero-card" key={item.id}>
                  <img src={item.image} alt={item.title} />
                  <div className="info">
                    <div className="header">
                      <h3 className="title">{item.title}</h3>
                      <p>{item.description}</p>
                    </div>
                    <div className="footer">
                      <button>Detail</button>
                    </div>
                  </div>
                </div>
              );
            })}
          </section>
          <section className="catalog">
            <div className="catalog-row">
              <h3 className="catalog-header">New Releases</h3>
              <ul>
                {catalogNewReleases.map((item) => {
                  return (
                    <li key={item.id}>
                      <div className="card">
                        <img
                          className="box-image"
                          src={item.image}
                          alt={item.title}
                        />
                        <p className="title">{item.title}</p>
                        <p className="developer">{item.developer}</p>
                        <p className="price">{item.price}</p>
                      </div>
                    </li>
                  );
                })}
              </ul>
            </div>
          </section>
          <section className="catalog">
            <div className="catalog-row">
              <h3 className="catalog-header">Top Selling</h3>
              <ul>
                {catalogTopSelling.map((item) => {
                  return (
                    <li key={item.id}>
                      <div className="card">
                        <img
                          className="box-image"
                          src={item.image}
                          alt={item.title}
                        />
                        <p className="title">{item.title}</p>
                        <p className="developer">{item.developer}</p>
                        <p className="price">{item.price}</p>
                      </div>
                    </li>
                  );
                })}
              </ul>
            </div>
          </section>
          <section className="hero-section">
            {heroItem2.map((item) => {
              return (
                <div className="hero-card" key={item.id}>
                  <img src={item.image} alt={item.title} />
                  <div className="info">
                    <div className="header">
                      <h3 className="title">{item.title}</h3>
                      <p>{item.description}</p>
                    </div>
                    <div className="footer">
                      <button>Detail</button>
                    </div>
                  </div>
                </div>
              );
            })}
          </section>
          <section className="catalog">
            <div className="catalog-row">
              <h3 className="catalog-header">Action</h3>
              <ul>
                {catalogAction.map((item) => {
                  return (
                    <li key={item.id}>
                      <div className="card">
                        <img
                          className="box-image"
                          src={item.image}
                          alt={item.title}
                        />
                        <p className="title">{item.title}</p>
                        <p className="developer">{item.developer}</p>
                        <p className="price">{item.price}</p>
                      </div>
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
                {catalogFamilyFriendly.map((item) => {
                  return (
                    <li key={item.id}>
                      <div className="card">
                        <img
                          className="box-image"
                          src={item.image}
                          alt={item.title}
                        />
                        <p className="title">{item.title}</p>
                        <p className="developer">{item.developer}</p>
                        <p className="price">{item.price}</p>
                      </div>
                    </li>
                  );
                })}
              </ul>
            </div>
          </section>
        </main>
        <footer>
          <ul>
            <li>Home</li>
            <li>Deals</li>
            <li>Staff Picks</li>
            <li>Reviews</li>
          </ul>
          <div className="social">
            <span>
              <FaTwitter className="icon" />
            </span>
            <span>
              <FaFacebookF className="icon" />
            </span>
            <span>
              <FaDiscord className="icon" />
            </span>
            <span>
              <FaSlackHash className="icon" />
            </span>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default App;
