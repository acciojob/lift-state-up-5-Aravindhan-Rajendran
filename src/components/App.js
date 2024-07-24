import React, { useState } from 'react';
import LoginForm from './components/LoginForm'; // Adjust path as needed
import './styles/App.css';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  return (
    <h1>Parent Component</h1>
    <div className="App">
      {isLoggedIn ? (
        <h1>You are Logged in!</h1>
      ) : (
        <LoginForm onLogin={handleLogin} />
      )}
    </div>
  );
}

export default App;
