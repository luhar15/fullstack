import { useState } from 'react';
import {useNavigate, Link } from 'react-router-dom';
import '../../assets/css/Login.css';

const Login = () => {
  const navigate = useNavigate();

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    if (username === 'admin' && password === 'password') {
      // alert('Login successful!');
      navigate("/rovertours/user/home");
    } else {
      setErrorMessage('Invalid username or password');
    }
  };

  return (
    <div className="container">
      <div className="login-container">
        <h2>EduConnect Login</h2>
        <form onSubmit={handleLogin} className="login-form">
          <div className="form-group">
            <label htmlFor="username">Username:</label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button type="submit">Login</button>
          {errorMessage && <p className="error-message">{errorMessage}</p>}
        </form>
        <div style={{ marginTop: '20px', textAlign: 'center' }}>
          <p>Don't have an account? <Link to="/rovertours/register">Signup</Link></p>
        </div>
      </div>
    </div>
  );
}

export default Login;
