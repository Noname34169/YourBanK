import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Header.scss';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);


  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          {/* Логотип */}
          <Link to="/" className="header__logo">
            <img src="/headerlogo.png" alt="Logo" />
            <h1>YourBanK</h1>
          </Link>

          {/* Навигация и кнопки */}
          <div className="header__wrap">
            <div className={`header__header ${isMenuOpen ? 'active' : ''}`}>
              {/* Меню */}
              <nav className="header__menu" data-aos="fade-down" data-aos-delay="400">
                <Link to="/" onClick={() => setIsMenuOpen(false)}>Home</Link>
                <Link to="/careers" onClick={() => setIsMenuOpen(false)}>Careers</Link>
                <Link to="/about" onClick={() => setIsMenuOpen(false)}>About</Link>
                <Link to="/security" onClick={() => setIsMenuOpen(false)}>Security</Link>
              </nav>

          
              <div className="header__auth">
                <Link to="/signup" onClick={() => setIsMenuOpen(false)} className="header__btn">Sign Up</Link>
                <Link to="/login" onClick={() => setIsMenuOpen(false)} className="header__btn header__btn--login">Login</Link>
              </div>
            </div>

         
            <div className="header__burger" onClick={toggleMenu}>
              <img className='burger' src="/butger.svg" alt="Menu" />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
