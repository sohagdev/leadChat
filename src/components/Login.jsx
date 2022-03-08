import React from 'react'
import { GoogleOutlined, FacebookOutlined } from '@ant-design/icons'
import { auth } from '../firebase'
import firebase from 'firebase/app'
import signUp from '../images/sign-up.svg'
import logo from '../images/logo.svg'
import googleIcon from '../images/google.png'
import facebookIcon from '../images/facebook.png'

const Login = () => {
    return (
        <div id='login-page'>
            <div className='login-showcase'>
                <div className='logo-container'>
                    <img src={logo} alt='logo' />
                </div>
                <img className='signup-img' src={signUp} alt='signUp' />
            </div>
            <div className='login-card'>
                <img className='signIn-part-logo' src={logo} alt='logo' />
                <h2>Welcome back!</h2>
                <div className='login-content'>
                    <span
                        className='login-button google'
                        onClick={() =>
                            auth.signInWithRedirect(
                                new firebase.auth.GoogleAuthProvider()
                            )
                        }>
                        <img src={googleIcon} alt='google' /> Sign In with
                        Google
                    </span>
                    <br /> <br />
                    <span
                        className='login-button facebook'
                        onClick={() =>
                            auth.signInWithRedirect(
                                new firebase.auth.FacebookAuthProvider()
                            )
                        }>
                        <img src={facebookIcon} alt='facebook' /> Sign In with
                        Facebook
                    </span>
                </div>
                {/* <div className='login-form'>
                    <form>
                        <input
                            type='text'
                            placeholder='Email Address'
                            name='email'
                        />
                        <input
                            type='password'
                            placeholder='Password'
                            name='password'
                        />
                        <button
                            className='sign-in-button'
                            type='button'
                            value='Sign In'>
                            Sign In
                        </button>
                    </form>
                </div> */}
            </div>
        </div>
    )
}

export default Login
