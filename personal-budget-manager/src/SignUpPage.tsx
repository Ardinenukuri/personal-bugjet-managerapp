import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const SignUpPage: React.FC = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newUser = { email, password, budget: 1000, expenses: [] }; // Default values

    localStorage.setItem(email, JSON.stringify(newUser)); // Save user data with email as key
    navigate('/sign-in');
  };

  return (
    <div className="container mt-4">
      <h2>Sign Up</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email</label>
          <input
            type="email"
            className="form-control"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">Password</label>
          <input
            type="password"
            className="form-control"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            required
          />
        </div>
        <button type="submit" className="btn btn-primary">Sign Up</button>
      </form>
      <div className="text-center mt-3">
        <p>Already have an account? <Link to="/sign-in">Sign in here</Link></p>
      </div>
    </div>
  );
};

export default SignUpPage;
