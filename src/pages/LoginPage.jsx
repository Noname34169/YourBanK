import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const LoginPage = () => {

    const login = (username) => {
        setUser({ username })
    }

    const [user, setUser] = useState(null)

    const [username, setUsername] = useState('')

    console.log(user);
    

    const handleSignup = (e) => {
        e.preventDefault()
        if(username) {
            login(username)
            alert(`Welcome back, ${username}`)
        }
    }

  return (
    <>
    <section className="login">
        <div className="container">
            <div className="login__wrapper">
            <h2 className='login-title'>Login</h2>
            <p className='login-p'>Welcome back! Please log in to access your account.</p>
            <form action="" onSubmit={handleSignup}>
                <div className="login-box">
            <input
                type="email"
                 placeholder='Enter your Email'
                 value={username}
                 onChange={(e) => setUsername(e.target.value)}
                />
                <input type="text" placeholder='Enter your Password' />                    
                </div>

                <Link  className='login__btn' to={'/'}>Forgot Password?</Link>
                <button className='login__button login__a' type='submit' >Login</button>
                <Link className='login__bttn login__link' to={'/signup'}>Sign up</Link>

                
            </form>               
            </div>


        </div>
    </section>
    </>
  )
}

export default LoginPage