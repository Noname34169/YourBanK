import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import SwiperWrap from '../components/SwiperWrap/SwiperWrap'

const SingupPage = () => {

    const login = (username) => {
        setUser({ username })
    }
    
    const [firstname, setFirstname] = useState('')
    const [secondname, setSecondname] = useState('')
    const [password, setPassword] = useState('')
    const [email, setEmail] = useState('')

    
    const handleSignup = (e) => {
        e.preventDefault()
        if(username) {
            login(username)
            alert(`User ${username} regitered successfully`)
        }
    }

  return (
    <>
    <section className="login">
        <div className="container">
            <div className="login__wrapper">
        <h2 className='login-title'>Sign Up</h2>
        <p className='login-p'>Join our community today! Create an account to unlock exclusive features and personalized experiences.</p>
            <form action="" onSubmit={handleSignup}>
                <div className="login-box">                    
                <input
                type="text"
                 placeholder='Enter First Name'
                 value={firstname}
                 onChange={(e) => setFirstname(e.target.value)}
                />
                <input
                type="text"
                 placeholder='Enter Last Name'
                 value={secondname}
                 onChange={(e) => setSecondname(e.target.value)}
                />
                <input
                type="email"
                 placeholder='Enter your Email'
                 value={email}
                 onChange={(e) => setEmail(e.target.value)}
                />
                <input
                type="password"
                 placeholder='Enter your Password'
                 value={password}
                 onChange={(e) => setPassword(e.target.value)}
                />
                </div>
                <button className='login__button signup__btns' type='submit' >Sign up</button>
                <Link className='login__bttn signup__btn' to={'/login'}>Login</Link>
            </form>
            </div>

        </div>
    </section>
    <SwiperWrap />
    </>
  )
}

export default SingupPage