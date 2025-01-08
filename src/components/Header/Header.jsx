import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './Header.scss';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    AOS.init({
      duration: 800, // Длительность анимации
      offset: 100,   // Смещение появления
      easing: 'ease-in-out', // Тип анимации
      once: true,    // Анимация запускается только один раз
    });
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="header" data-aos="fade-down">
      <div className="container">
        <div className="header__wrapper" data-aos="fade-down" data-aos-delay="100">
          {/* Логотип */}
          <Link to="/" className="header__logo" data-aos="fade-down" data-aos-delay="200">
            <img src="/headerlogo.png" alt="Logo" />
            <h1>YourBanK</h1>
          </Link>

          {/* Навигация и кнопки */}
          <div className="header__wrap">
            <div className={`header__header ${isMenuOpen ? 'active' : ''}`} data-aos="fade-down" data-aos-delay="300">
              {/* Меню */}
              <nav className="header__menu" data-aos="fade-down" data-aos-delay="400">
                <Link to="/" onClick={() => setIsMenuOpen(false)} data-aos="fade-down" data-aos-delay="500">Home</Link>
                <Link to="/careers" onClick={() => setIsMenuOpen(false)} data-aos="fade-down" data-aos-delay="600">Careers</Link>
                <Link to="/about" onClick={() => setIsMenuOpen(false)} data-aos="fade-down" data-aos-delay="700">About</Link>
                <Link to="/security" onClick={() => setIsMenuOpen(false)} data-aos="fade-down" data-aos-delay="800">Security</Link>
              </nav>

              {/* Кнопки аутентификации */}
              <div className="header__auth" data-aos="fade-down" data-aos-delay="900">
                <Link to="/signup" onClick={() => setIsMenuOpen(false)} className="header__btn">Sign Up</Link>
                <Link to="/login" onClick={() => setIsMenuOpen(false)} className="header__btn header__btn--login">Login</Link>
              </div>
            </div>

            {/* Бургер-меню */}
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
