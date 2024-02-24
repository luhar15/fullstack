import { useState } from 'react';
import { useNavigate, Link } from "react-router-dom";
import '../../assets/css/Register.css';

const Register = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    if (username === 'admin' && password === 'password') {
      alert('Registration successful!');
      navigate("/rovertours/login")
    } else {
      setErrorMessage('Invalid username or password');
    }
  };

  return (
    <div className="container">
      <div className="login-container">
        <h2 className="oneh2">EduConnect Registration</h2>
        <form onSubmit={handleLogin} className="login-form">
          <div className="form-group">
            <label htmlFor="username">Username:</label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required/>
          </div>
          <div className="form-group">
            <label htmlFor="email">Email Address:</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required/>
          </div>
          <div className="form-group">
            <label htmlFor="phoneNumber">Phone Number:</label>
            <input
              type="tel"
              id="phoneNumber"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              required/>
          </div>
          <div className="form-group">
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              pattern = ".{8,}" required title='minimum 8 characters'/>
          </div>
          <button type="submit">Register</button>
          {errorMessage && <p className="error-message">{errorMessage}</p>}
        </form>
        <div style={{ marginTop: '20px', textAlign: 'center' }}>
          <p>Already have an account? <Link to="/rovertours/login">Login</Link></p>
        </div>
      </div>
    </div>
  );
}

export default Register;


