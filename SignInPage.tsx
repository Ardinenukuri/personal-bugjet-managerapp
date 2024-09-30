import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './SignInPage.css'; // Add this to include the custom CSS

const SignInPage: React.FC = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Fetch user data from localStorage
    const storedUser = JSON.parse(localStorage.getItem('user') || '{}');

    if (storedUser.email === email && storedUser.password === password) {
      localStorage.setItem('isAuthenticated', 'true');
      navigate('/');
    } else {
      setError('Invalid email or password.');
    }
  };

  return (
    <div className="sign-in-container">
      <div className="sign-in-card">
        <h2 className="text-center">Sign In</h2>
        {error && <p className="alert alert-danger">{error}</p>}
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">Email</label>
            <input
              type="email"
              className="form-control"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
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
              placeholder="Enter your password"
              required
            />
          </div>
          <button type="submit" className="btn btn-primary w-100">Sign In</button>
        </form>

        <div className="text-center mt-3">
          <p>New user? <Link to="/sign-up">Sign up here</Link></p>
        </div>
      </div>
    </div>
  );
};

export default SignInPage;
