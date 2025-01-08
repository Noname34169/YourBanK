import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; 

const AboutWrap = () => {
  useEffect(() => {
    AOS.init({ duration: 1200, easing: 'ease-out', once: true });
  }, []);

  return (
    <>
      <section className="careerswrap">
        <div className="container">
          <div className="careerswrap__wrapper">
            <div className="careerwrap__wrapper">
              <img
                className="careerswrap__startimg"
                src="/aboutcontaner.png"
                alt=""
                data-aos="fade-right"
                data-aos-delay="100"
              />
              
              <img
                className="careerswrap__startimgadoptive"
                src="/aboutcontaneradoptive.png"
                alt=""
                data-aos="fade-left" 
                data-aos-delay="200"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default AboutWrap;
