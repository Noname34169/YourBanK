import React from 'react'
import './FinanceJourney.scss'
import { Link } from 'react-router-dom'

const FinanceJourney = () => {
  return (
    <>
    <section className="financejourney">
        <div className="container">
            <div className="financejourney__wrapper">
                <div className="financejourney__box">
                    <h1 className="financejourney_h1">
                        <span className="white-text">Start your financial journey with</span>
                        <span className="lime-text"> YourBank today!</span>
                    </h1>
                    <p className="financejourney__p">Ready to take control of your finances? Join YourBank now, and let us help you achieve your financial goals with our tailored solutions and exceptional customer service</p>
                </div>
                <Link className='financejourney__Link' to={'/signup'}>Open Account</Link>
            </div>
        </div>
    </section>
    </>
  )
}

export default FinanceJourney