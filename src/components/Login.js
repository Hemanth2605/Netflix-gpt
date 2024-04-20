import React, { useState, useRef } from 'react';
import Header from './Header';
import { checkValidData } from '../utils/validate';

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  }
  
  const email = useRef(null);
  const password = useRef(null);

  const handleButtonClick = () => {
    const message = checkValidData(email.current.value, password.current.value);
    setErrorMessage(message);
  }
  return (
    <div>
      <Header />
      <div className='absolute'>
        <img src="https://assets.nflxext.com/ffe/siteui/vlv3/9f46b569-aff7-4975-9b8e-3212e4637f16/453ba2a1-6138-4e3c-9a06-b66f9a2832e4/IN-en-20240415-popsignuptwoweeks-perspective_alpha_website_large.jpg"
          alt="bg_image" />
      </div>
      <form onSubmit={(e)=>e.preventDefault()} className='absolute w-3/12 p-12 bg-black my-36 mx-auto right-0 left-0 text-white rounded-lg opacity-80'>
        <h1 className='font-bold text-3xl py-4'>{isSignInForm ? "Sign in" : "Sign Up" }</h1>
        {!isSignInForm && <input type="text" placeholder="First Name" className='p-4 my-4 w-full bg-gray-700' />}
        <input ref={email} type="text" placeholder="Email Address" className='p-4 my-4 w-full bg-gray-700' />
        <input ref={password} type="password" placeholder="Password" className='p-4 my-4 w-full bg-gray-700' />
        <p className='py-2 text-lg font-bold text-red-700'>{errorMessage}</p>
        <button onClick={handleButtonClick} className='p-4 my-6 bg-red-700 w-full rounded-lg'>{isSignInForm ? "Sign in" : "Sign Up" }</button>
        <p onClick={toggleSignInForm} className='py-4 cursor-pointer'>{ isSignInForm ? "U don't have account ? Sign Up" : "Already Registered? Sign in Now."}</p>
      </form>
    </div>

  )
}

export default Login