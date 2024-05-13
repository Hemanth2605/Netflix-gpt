import React, { useState, useRef } from "react";
import Header from "./Header";
import { checkValidData } from "../utils/validate";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { AVATAR_LOGO, LOGO } from "../utils/constants";

const Login = () => {

  const dispatch = useDispatch();
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };

  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  const handleButtonClick = () => {
    const message = checkValidData(email.current.value, password.current.value);
    setErrorMessage(message);
  
    if(message) return;
    if(!isSignInForm){
       // TODO : signup
       createUserWithEmailAndPassword(auth, email.current.value, password.current.value).then((userCredential) => {
    // Signed up 
         const user = userCredential.user;
         console.log(user);
         updateProfile(user, {
          displayName: name.current.value, photoURL: AVATAR_LOGO
        }).then(() => {
          // Profile updated!
          const { uid, email, displayName ,photoURL} = auth.currentUser;
          dispatch(
            addUser({
              uid: uid,
              email: email,
              displayName: displayName,
              photoURL: photoURL
            })
          );
          // ...
        }).catch((error) => {
          // An error occurred
          // ...
          setErrorMessage(error.message);
        });
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    setErrorMessage(errorCode + "-"+errorMessage);
    // ..
  });
    }
    else{
         //TODO: signin
         signInWithEmailAndPassword(auth, email.current.value, password.current.value).then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    const { uid, email, displayName } = user;
    dispatch(
      addUser({
        uid: uid,
        email: email,
        displayName: displayName
      })
    );
    console.log(user);
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
  });
    }
  };
  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src={LOGO}
          alt="bg_image"
        />
      </div>
      <form
        onSubmit={(e) => e.preventDefault()}
        className="absolute w-3/12 p-12 bg-black my-36 mx-auto right-0 left-0 text-white rounded-lg opacity-80"
      >
        <h1 className="font-bold text-3xl py-4">
          {isSignInForm ? "Sign in" : "Sign Up"}
        </h1>
        {!isSignInForm && (
          <input
            ref={name}
            type="text"
            placeholder="First Name"
            className="p-4 my-4 w-full bg-gray-700"
          />
        )}
        <input
          ref={email}
          type="text"
          placeholder="Email Address"
          className="p-4 my-4 w-full bg-gray-700"
        />
        <input
          ref={password}
          type="password"
          placeholder="Password"
          className="p-4 my-4 w-full bg-gray-700"
        />
        <p className="py-2 text-lg font-bold text-red-700">{errorMessage}</p>
        <button
          onClick={handleButtonClick}
          className="p-4 my-6 bg-red-700 w-full rounded-lg"
        >
          {isSignInForm ? "Sign in" : "Sign Up"}
        </button>
        <p onClick={toggleSignInForm} className="py-4 cursor-pointer">
          {isSignInForm
            ? "U don't have account ? Sign Up"
            : "Already Registered? Sign in Now."}
        </p>
      </form>
    </div>
  );
};

export default Login;
