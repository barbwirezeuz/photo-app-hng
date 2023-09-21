import React, { useState, useEffect } from 'react';
import { auth } from './firebase'; // Import Firebase auth

import Login from './Login'; // Import your Login component
import Dashboard from './Dashboard'; // Import your Dashboard component

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Add an authentication state listener
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        // User is signed in
        setUser(authUser);
      } else {
        // User is signed out
        setUser(null);
      }
    });

    // Clean up the listener when the component unmounts
    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <div>
      <h1>Your App</h1>
      <hr />
      {user ? (
        // User is authenticated, render the Dashboard
        <Dashboard user={user} />
      ) : (
        // User is not authenticated, render the Login page
        <Login />
      )}
    </div>
  );
}

export default App;
