import { useState } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <header>
        <nav>
          <div>Logo</div>
          <ul>
            <li>Link1</li>
            <li>Link2</li>
            <li>Link3</li>
            <li>Link4</li>
            <li>Link5</li>
          </ul>
        </nav>
        <div>
          <span>Notification</span>
          <span>Cart</span>
          <span>Setting</span>
        </div>
      </header>
      <main>
        <section className="filter">Catalog filter</section>
        <section className="hero">Hero Section</section>
        <section className="catalog">Top Selling</section>
        <section className="catalog">New Release</section>
        <section className="hero">Hero Section</section>
        <section className="catalog">Shooters</section>
        <section className="hero">Hardware</section>
        <section className="catalog">Family Friendly</section>
      </main>
      <footer>Footer</footer>
    </div>
  );
}

export default App;
