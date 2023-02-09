import React, { useState } from 'react';
import firebase from 'firebase';

const Login = () => {
  const [user, setUser] = useState(null);

  const handleLogin = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(provider)
      .then((result) => {
        setUser(result.user);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div>
      {user ? (
        <>
          <p>Welcome, {user.displayName}!</p>
          <button onClick={() => firebase.auth().signOut()}>Sign out</button>
        </>
      ) : (
        <>
          <p>Please sign in:</p>
          <button onClick={handleLogin}>Sign in with Google</button>
        </>
      )}
    </div>
  );
};

export default Login;
