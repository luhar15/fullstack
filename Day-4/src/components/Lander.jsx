import  { useState } from 'react';
import "../assets/css/Lander.css";
import { useNavigate} from "react-router-dom";

const Lander = () => {
  const navigate = useNavigate();

  const [selectedRole, setSelectedRole] = useState(null);

  const handleRoleSelect = (role) => {
    setSelectedRole(role);
  };

  return (
    <div className="landcontainer">
      <h1>Welcome to our Platform</h1>
      <div className="role-selection">
        <button
          className={`role-button ${selectedRole === 'admin' ? 'selected' : ''}`}
          onClick={() => handleRoleSelect('admin')}
        >
          Admin
        </button>
        <button
          className={`role-button ${selectedRole === 'user' ? 'selected' : ''}`}
          onClick={() => handleRoleSelect('user')}
        >
          User
        </button>
      </div>
    </div>
  );
};

export default Lander;
