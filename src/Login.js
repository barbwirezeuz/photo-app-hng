// Login.js
import React, { useState } from 'react';
import { auth } from './firebase'; // Import the Firebase auth object

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignIn = async () => {
    try {
      await auth.signInWithEmailAndPassword(email, password);
      // Authentication successful, you can navigate to the dashboard or display a success message
    } catch (error) {
      console.error('Error signing in:', error.message);
      // Handle login failure, show an error message, or redirect to a different page
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <div>
        <label>Email:</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div>
        <label>Password:</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <button onClick={handleSignIn}>Sign In</button>
    </div>
  );
}

export default Login;
