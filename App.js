import React from 'react';
import dish1 from './roll.jpg';
import dish2 from './roll.jpg';
import dish3 from './roll.jpg';

function HomePage() {
  return (
    <div className="container">
      <header className="header">
        <h1>Welcome to Restaurant Name</h1>
        <nav className="nav">
          <ul className="nav-list">
            <li className="nav-item">Menu</li>
            <li className="nav-item">About</li>
            <li className="nav-item">Contact</li>
          </ul>
        </nav>
      </header>
      <main className="main-content">
        <section className="hero-section">
          <h2>Discover Our Exquisite Menu</h2>
          <p>Experience the best flavors in town</p>
          <a href="#menu" className="btn">View Menu</a>
        </section>
        <section className="featured-section">
          <h3>Today's Specials</h3>
          <div className="menu-items">
            <div className="menu-item">
              <img src={dish1} alt="Dish 1" />
              <h4>Dish 1</h4>
              <p>Description of Dish 1</p>
            </div>
            <div className="menu-item">
              <img src={dish2} alt="Dish 2" />
              <h4>Dish 2</h4>
              <p>Description of Dish 2</p>
            </div>
            <div className="menu-item">
              <img src={dish3} alt="Dish 3" />
              <h4>Dish 3</h4>
              <p>Description of Dish 3</p>
            </div>
          </div>
        </section>
      </main>
      <footer className="footer">
        <p>&copy; {new Date().getFullYear()} Restaurant Name. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default HomePage;
