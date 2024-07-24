// LoginForm.js
import React from 'react';

function LoginForm({ onLogin }) {
  const handleSubmit = (event) => {
    event.preventDefault();
    onLogin(); // Notify parent to update the login state
  };

  return (
    <div>
      <h1>Parent Component</h1> {/* This should be in the LoginForm component */}
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
