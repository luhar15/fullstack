import { Link } from 'react-router-dom';
import '../assets/css/Header.css'; // Import your external CSS file for styling

const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <h4>Edu Connect</h4>
      </div>
      <nav className="nav">
        <ul>
          <li><Link to="/rovertours/user/home">Home</Link></li>
          {/* <li><Link to="/about">About</Link></li> */}
          <li><Link to="/rovertours/user/colleges">Colleges</Link></li>

          <li><Link to="/rovertours/user/courses">Courses</Link></li>
          <li><Link to="/rovertours/user/profile">Profile</Link></li>
          <li><Link to="/rovertours/login"><a href="#" className="btn">Login</a></Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
