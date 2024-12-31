import React from 'react'
import './Category.scss'

const Category = () => {
  return (
    <>
    <section className="category">
        <div className="container">
            <div className="category__wrapper">
                <h1>
                    <span className='lime-text'>Frequently</span>
                    <span className='white-text'> Asked Questions</span>
                </h1>
                <p>Still you have any questions? Contact our Team via support@yourbank.com</p>

                <div className="category__boxs">
                    <div className="category__box">
                        <h2>How do I open an account with YourBank?</h2>
                        <p>Opening an account with YourBank is easy. Simply visit our website and click on the "Open an Account" button. Follow the prompts, provide the required information, and complete the application process. If you have any questions or need assistance, our customer support team is available to help.</p>
                    </div>
                    <div className="category__box">
                        <h2>How do I open an account with YourBank?</h2>
                        <p>Opening an account with YourBank is easy. Simply visit our website and click on the "Open an Account" button. Follow the prompts, provide the required information, and complete the application process. If you have any questions or need assistance, our customer support team is available to help.</p>
                    </div>
                    <div className="category__box">
                        <h2>How do I open an account with YourBank?</h2>
                        <p>Opening an account with YourBank is easy. Simply visit our website and click on the "Open an Account" button. Follow the prompts, provide the required information, and complete the application process. If you have any questions or need assistance, our customer support team is available to help.</p>
                    </div>
                    <div className="category__box">
                        <h2>How do I open an account with YourBank?</h2>
                        <p>Opening an account with YourBank is easy. Simply visit our website and click on the "Open an Account" button. Follow the prompts, provide the required information, and complete the application process. If you have any questions or need assistance, our customer support team is available to help.</p>
                    </div>
                </div>
                <div className="btn__container">
                <button className='category__btn'>Load All FAQ’s</button>
                </div>
            </div>
        </div>
    </section>
    </>
  )
}

export default Category