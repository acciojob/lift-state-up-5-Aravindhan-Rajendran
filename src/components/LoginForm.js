import React from 'react';

function LoginForm({ onLogin }) {
  const handleSubmit = (event) => {
    event.preventDefault();
    onLogin(); 
  };

  return (
    <div>
      <h1>Parent Component</h1> 
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="username">Username:</label>
          <input type="text" id="username" required />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input type="password" id="password" required />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default LoginForm;
