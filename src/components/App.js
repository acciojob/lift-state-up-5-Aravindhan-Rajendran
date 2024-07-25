import React, { useState } from 'react';
import LoginForm from './LoginForm'; // Adjust the path based on your file structure
import './styles/App.css';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  return (
    <div className="App">
      {isLoggedIn ? (
        <h1>You are Logged in!</h1> // Displayed after login
      ) : (
        <LoginForm onLogin={handleLogin} />
      )}
    </div>
  );
}

export default App;
