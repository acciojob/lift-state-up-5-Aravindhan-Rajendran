import React, { useState } from 'react';
import LoginForm from '../index.js';
import './styles/App.css';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  return (
    <div className="App">
      {isLoggedIn ? (
        <h1>You are Logged in!</h1> // Ensure this matches your test expectation
      ) : (
        <LoginForm onLogin={handleLogin} />
      )}
    </div>
  );
}

export default App;
