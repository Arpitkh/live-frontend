import { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

export default function Signup() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:8000/api/auth/signup', {
        email,
        password,
        username,
      });

      if(response.data.success)
        setMessage({ type: 'success', text: response.data.message || 'Signup successful!' });
      else
        setMessage({ type: 'error', text: response.data.message || 'Signup failed. Please try again.' });
    } catch (error) {
      setMessage({ type: 'error', text: error.response?.data?.message || error.response?.data?.error || 'Signup failed. Please try again.' });
    }
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100 bg-light">
      <form onSubmit={handleSignup} className="bg-white p-5 rounded shadow" style={{ width: '350px' }}>
        <h3 className="mb-4 text-center">Sign Up</h3>

        <div className="mb-3">
          <label>Username</label>
          <input
            type="text"
            className="form-control"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>

        <div className="mb-3">
          <label>Email</label>
          <input
            type="email"
            className="form-control"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div className="mb-3">
          <label>Password</label>
          <input
            type="password"
            className="form-control"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        <button type="submit" className="btn btn-success w-100">Create Account</button>

        {message && (
          <p
            style={{
              marginTop: '20px',
              color: message.type === 'error' ? 'red' : 'green',
              textAlign: 'center',
            }}
          >
            {message.text}
          </p>
        )}
        <p style={{ marginTop: '10px', textAlign: 'center' }}><Link to="/">Login</Link></p>
      </form>
    </div>
  );
}
