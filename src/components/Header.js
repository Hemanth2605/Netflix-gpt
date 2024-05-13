import { onAuthStateChanged, signOut } from 'firebase/auth';
import React, { useEffect } from 'react'
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addUser, removeUser } from '../utils/userSlice';

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector(store => store.user);
  useEffect(() => {
  const unsubscribe =   onAuthStateChanged(auth, (user) => {
        if (user) {
          // User is signed in, see docs for a list of available properties
          // https://firebase.google.com/docs/reference/js/auth.user
          const { uid, email, displayName ,photoURL} = user;
          dispatch(
            addUser({
              uid: uid,
              email: email,
              displayName: displayName,
              photoURL: photoURL
            })
          );
          navigate('/browse');
          // ...
        } else {
          // User is signed out
          // ...
          dispatch(removeUser());
          navigate('/');
        }
      });
 // unsubscribe when component is unmounted
    return () =>  unsubscribe();
},[]);
  const handleSignOut = () => { 
    signOut(auth).then(() => {
      navigate('/');
      // Sign-out successful.
    }).catch((error) => {
      navigate('/error');
      // An error happened.
    });
  };
  return (
    <div className='absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-40 flex justify-between'>
        <img  className='w-44' src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
           alt = "Logo" />
          {user && <div className='flex p-2'>
            <img className='w-12 h-12' alt='usericon' src={user?.photoURL}/>
            <button onClick={handleSignOut} className='font-bold text-white'>SignOut</button>
           </div> }
    </div>
  )
}

export default Header;