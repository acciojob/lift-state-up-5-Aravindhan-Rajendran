import React, { useState } from 'react';
import LoginForm from './LoginForm'; 
import '../styles/App.css';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  return (
    <div className="App">
      {isLoggedIn ? (
        <>
          <h1>Parent Component</h1>
          <p>You are logged in!</p>
        </>
      ) : (
        <LoginForm onLogin={handleLogin} />
      )}
    </div>
  );
}

export default App;
