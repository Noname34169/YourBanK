import React, { useEffect } from 'react';
import './Footer.scss';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Импорт стилей AOS

const Footer = () => {
  useEffect(() => {
    AOS.init({ duration: 1200, easing: 'ease-out', once: true });
  }, []);

  return (
    <>
      <footer className="footer">
        <div className="footer__wrapper">
          <div className="footer__boxes">
            <Link
              to="/"
              className="footer__logo"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <img src="/headerlogo.png" alt="Logo" />
              <h1>YourBanK</h1>
            </Link>

            <div className="footer__wrap">
              <div
                className={`footer__footer`}
                data-aos="fade-left"
                data-aos-delay="200"
              >
                <nav className="footer__menu">
                  <Link to="/">Home</Link>
                  <Link to="/careers">Careers</Link>
                  <Link to="/about">About</Link>
                  <Link to="/security">Security</Link>
                </nav>
              </div>
            </div>
          </div>

          <span></span>

          <div className="footer__boxs">
            <div
              className="footer__email"
              data-aos="zoom-in"
              data-aos-delay="300"
            >
              <img src="/emailicon.png" alt="" />
              <p>hello@skillbirdge.com</p>
            </div>
            <div
              className="footer__phone"
              data-aos="zoom-in"
              data-aos-delay="400"
            >
              <img src="/phoneicon.png" alt="" />
              <p>+91 91813 23 2309</p>
            </div>
            <div
              className="footer__location"
              data-aos="zoom-in"
              data-aos-delay="500"
            >
              <img src="/locationicon.png" alt="" />
              <p>Somewhere in the World</p>
            </div>
          </div>

          <span></span>

          <div
            className="footer__box"
            data-aos="fade-up"
            data-aos-delay="600"
          >
            <div
              className="footer__icons"
              data-aos="flip-left"
              data-aos-delay="700"
            >
              <img
                src="/Facebook__logo.png"
                alt=""
                data-aos="fade-up"
                data-aos-delay="800"
              />
              <img
                src="/Twitter__logo.png"
                alt=""
                data-aos="fade-up"
                data-aos-delay="900"
              />
              <img
                src="/LinkedIn__logo.png"
                alt=""
                data-aos="fade-up"
                data-aos-delay="1000"
              />
            </div>
            <p
              data-aos="fade-up"
              data-aos-delay="1100"
            >
              YourBank All Rights Reserved
            </p>
            <p
              data-aos="fade-up"
              data-aos-delay="1200"
            >
              Privacy Policy | Terms of Service
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
