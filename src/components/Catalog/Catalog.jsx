import React from 'react'
import './Catalog.scss'

const Catalog = () => {
  return (
    <>
    <section className="catalog">
        <div className="container">
            <h1>
                <span className="white-text">How We</span>
                <span className="lime-text"> Protect You</span>
            </h1>
            <p>At YourBank, we prioritize the security and confidentiality of your financial information. Our state-of-the-art encryption technology and stringent data protection measures ensure your assets and transactions are safeguarded at all times</p>
       

            <div className="catalog__boxes">
        <img className='catalog__startimg' src="/secrity__textcontainer.png" alt="" />
        <img className='catalog__startimgadoptive' src="/secrity__textcontaineradoptive.png" alt="" />
            </div>
         </div>
    </section>
    </>
  )
}

export default Catalog