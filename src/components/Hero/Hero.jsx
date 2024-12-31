import React from 'react'
import './Hero.scss'

const Hero = () => {
  return (
    <>
    <section className="hero">
        <div className="container">
            <div className="hero__wrapper">
                <div className="hero__boxs">
                    <div className="hero__box">
                        <img src="hero__icon.svg" alt="" />
                        <p>No LLC Required, No Credit Check.</p>
                    </div>
                    <h2 className='hero__title'>
                        <span className='white-text'>Welcome to YourBank Empowering Your </span>
                        <span className='lime-text'>Financial Journey</span>
                        
                        </h2>
                    <p className='hero__p'>At YourBank, our mission is to provide comprehensive banking solutions that empower individuals and businesses to achieve their financial goals. We are committed to delivering personalized and innovative services that prioritize our customers' needs.</p>
                    <button className='hero__btn'>Open Account</button>
                </div>



                <div className="hero__imgs">
                <img className='hero__img' src="/hero__container.png" alt="" />
                <img src="/hero__сontainer.png" alt="" />
                </div>

                
            </div>
        </div>
    </section>
    </>
  )
}

export default Hero