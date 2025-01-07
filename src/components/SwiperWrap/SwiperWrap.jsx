import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import './SwiperWrap.scss';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation} from 'swiper/modules';

const SwiperWrap = () => {
  return (
    <>
    <section className="swiper">
    <div className="container">
        <div className="swiperwrap__wrapper">
          <h1>
          <span className='white-text'>Our </span>
          <span className='lime-text'>Testimonials</span>
          </h1>
          <p className='swiper__p'>Discover how YourBank has transformed lives with innovative digital solutions and personalized customer service. See why our clients trust us for a secure and prosperous financial journey</p>
        <Swiper
        centeredSlides={true}
        slidesPerView={3}
        spaceBetween={0}
        
        navigation={true}
        loop={true}

        modules={[Navigation]}




        breakpoints={{
          1024: {
            slidesPerView: 3,
          },
          768: {
            slidesPerView: 2,
          },
          480: {
            slidesPerView: 1,
          },
        }}
      >
        <div className="swiper__wrapper">
        <SwiperSlide>
            <div className="swiper-slide__box">
                <span></span>
                <img src="/swiper.png" alt="" />
                <span></span>
            </div>
            <p>I recently started my own business, and YourBank has been instrumental in helping me set up my business accounts and secure the financing I needed. Their expert guidance and tailored solutions have been invaluable.</p>
            <h3>John D</h3>
        </SwiperSlide>
        <SwiperSlide>
            <div className="swiper-slide__box">
                <span></span>
                <img src="/swiper.png" alt="" />
                <span></span>
            </div>
            <p>I recently started my own business, and YourBank has been instrumental in helping me set up my business accounts and secure the financing I needed. Their expert guidance and tailored solutions have been invaluable.</p>
            <h3>John D</h3>
        </SwiperSlide>
        <SwiperSlide>
            <div className="swiper-slide__box">
                <span></span>
                <img src="/swiper.png" alt="" />
                <span></span>
            </div>
            <p>I recently started my own business, and YourBank has been instrumental in helping me set up my business accounts and secure the financing I needed. Their expert guidance and tailored solutions have been invaluable.</p>
            <h3>John D</h3>
        </SwiperSlide>
        <SwiperSlide>
            <div className="swiper-slide__box">
                <span></span>
                <img src="/swiper.png" alt="" />
                <span></span>
            </div>
            <p>I recently started my own business, and YourBank has been instrumental in helping me set up my business accounts and secure the financing I needed. Their expert guidance and tailored solutions have been invaluable.</p>
            <h3>John D</h3>
        </SwiperSlide>
        <SwiperSlide>
            <div className="swiper-slide__box">
                <span></span>
                <img src="/swiper.png" alt="" />
                <span></span>
            </div>
            <p>I recently started my own business, and YourBank has been instrumental in helping me set up my business accounts and secure the financing I needed. Their expert guidance and tailored solutions have been invaluable.</p>
            <h3>John D</h3>
        </SwiperSlide>          
        </div>





      
       </Swiper>            
        </div>

        </div>
    </section>
    </>
  )
}

export default SwiperWrap
