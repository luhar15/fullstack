import "../assets/css/Footer.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faFacebook, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <footer>
      <div className='confot'>
      <div className="contact-info">
        <p>Contact us: 727721eucs114@skcet.ac.in</p>
        <p>Phone: +91 8056500189</p>
      </div>
      <div className="social-links">
        <a href="https://www.instagram.com/example" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faInstagram} />
        </a>
        <a href="https://www.facebook.com/example" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faFacebook} />
        </a>
        <a href="https://www.linkedin.com/in/example" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faLinkedin} />
        </a>
      </div>
      <div className="copyright">
        <p>&copy; 2024 EduConnect Cloud Admit. All rights reserved.</p>
      </div>
    </div>
    </footer>
  );
};

export default Footer;
