import { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:8000/api/auth/login', {
        email,
        password,
      });

      if (response.data.success) {
         setMessage({ type: 'success', text: response.data.message || 'Login successful!' });
      } 
    } catch (error) {
       setMessage({ type: 'error', text: error.response?.data?.message || error.response?.data?.error || 'Login failed. Please try again.' });
    }
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100 bg-light">
      <form onSubmit={handleLogin} className="bg-white p-5 rounded shadow" style={{ width: '350px' }}>
        <h3 className="mb-4 text-center">Login</h3>

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
        <button type="submit" className="btn btn-primary w-100">Login</button>
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
        <p style={{ marginTop: '10px', textAlign: 'center' }}><Link to="/signup">Sign Up</Link></p>
      </form>
    </div>
  );
}
