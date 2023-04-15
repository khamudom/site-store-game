import './App.css';
import { HiBell, HiCog6Tooth, HiShoppingCart } from 'react-icons/hi2';
import { catalogNewReleases } from './data';

function App() {
  return (
    <div className="container">
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
        <section className="filter">Catalog filter</section>
        <section className="hero">Hero Section</section>
        <section className="catalog">
          <div className="catalog-row">
            <h3>New Releases</h3>
            <ul>
              {catalogNewReleases.map((item) => {
                return (
                  <li key={item.id}>
                    <div className="card">
                      <img src={item.image} alt={item.title} />
                      <p>{item.title}</p>
                      <p>{item.developer}</p>
                      <p>{item.price}</p>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </section>
        <section className="catalog">
          <div className="catalog-row">
            <h3>Top Selling</h3>
            <ul>
              <li>
                <div className="card"></div>
              </li>
              <li>
                <div className="card"></div>
              </li>
              <li>
                <div className="card"></div>
              </li>
              <li>
                <div className="card"></div>
              </li>
            </ul>
          </div>
        </section>
        <section className="hero">Hero Section</section>
        <section className="catalog">
          <div className="catalog-row">
            <h3>Shooters</h3>
            <ul>
              <li>
                <div className="card"></div>
              </li>
              <li>
                <div className="card"></div>
              </li>
              <li>
                <div className="card"></div>
              </li>
              <li>
                <div className="card"></div>
              </li>
            </ul>
          </div>
        </section>
        <section className="hero">Hardware</section>
        <section className="catalog">
          <div className="catalog-row">
            <h3>Family Friendly</h3>
            <ul>
              <li>
                <div className="card"></div>
              </li>
              <li>
                <div className="card"></div>
              </li>
              <li>
                <div className="card"></div>
              </li>
              <li>
                <div className="card"></div>
              </li>
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
          <span>Twitter</span>
          <span>Facebook</span>
          <span>Discord</span>
          <span>Slack</span>
        </div>
      </footer>
    </div>
  );
}

export default App;
