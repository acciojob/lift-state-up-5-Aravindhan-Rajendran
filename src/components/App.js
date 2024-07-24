// src/App.js
import React, { useState } from 'react';
import LoginForm from './LoginForm';
import './styles/App.css';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  return (
    <div className="App">
      <h1>Parent Component</h1>
      {isLoggedIn ? (
        <p>You are Logged in!</p>
      ) : (
        <LoginForm onLogin={handleLogin} />
      )}
    </div>
  );
}

export default App;
