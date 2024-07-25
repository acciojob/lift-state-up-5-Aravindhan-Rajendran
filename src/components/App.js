import React, { useState } from 'react';
import LoginForm from './LoginForm'; // Adjust path if necessary
import '../styles/App.css'; // Correct path to CSS file

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
