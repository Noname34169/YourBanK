import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Подключаем стили для AOS

const SingupPage = () => {

  const login = (username) => {
    setUser({ username });
  }

  const [firstname, setFirstname] = useState('');
  const [secondname, setSecondname] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');

  const handleSignup = (e) => {
    e.preventDefault();
    if (firstname && secondname && email && password) {
      login(firstname);
      alert(`User ${firstname} registered successfully`);
    }
  }

  React.useEffect(() => {
    AOS.init({ duration: 1000, easing: 'ease-out', once: true });
  }, []);

  return (
    <>
      <section className="login" data-aos="fade-up">
        <div className="container">
          <div className="login__wrapper">
            <h2 className="login-title" data-aos="fade-down">Sign Up</h2>
            <p className="login-p" data-aos="fade-down" data-aos-delay="200">
              Join our community today! Create an account to unlock exclusive features and personalized experiences.
            </p>
            <form action="" onSubmit={handleSignup} data-aos="fade-up" data-aos-delay="400">
              <div className="login-box">
                <input
                  type="text"
                  placeholder="Enter First Name"
                  value={firstname}
                  onChange={(e) => setFirstname(e.target.value)}
                  data-aos="zoom-in"
                  data-aos-delay="500"
                />
                <input
                  type="text"
                  placeholder="Enter Last Name"
                  value={secondname}
                  onChange={(e) => setSecondname(e.target.value)}
                  data-aos="zoom-in"
                  data-aos-delay="600"
                />
                <input
                  type="email"
                  placeholder="Enter your Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  data-aos="zoom-in"
                  data-aos-delay="700"
                />
                <input
                  type="password"
                  placeholder="Enter your Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  data-aos="zoom-in"
                  data-aos-delay="800"
                />
              </div>
              <button className="login__button login__a" type="submit" data-aos="fade-up" data-aos-delay="900">
                Sign up
              </button>
              <Link className="login__bttn signup__btn" to={'/login'} data-aos="fade-up" data-aos-delay="1000">
                Already have an account? Login
              </Link>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}

export default SingupPage;
