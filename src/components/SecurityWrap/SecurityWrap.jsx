import React from 'react'
import './SecurityWrap.scss'

const SecurityWrap = () => {
  return (
    <>
        <section className="securitywrap">
        <div className="container">
            <div className="securitywrap__wrapper">
                <div className="securitywrap__wrap">
                    <img className="securitywrap__startimg" src="/securitycontainer.png" alt="" />
                    <img className="securitywrap__startimgadoptive" src="/securitycontaineradoptive.png" alt="" />
                </div>
            </div>
        </div>
    </section>
    </>
  )
}

export default SecurityWrap