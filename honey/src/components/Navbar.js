import { NavLink } from "react-router-dom";
import "../css/Navbar.css"
import logo from '../css/logo.png'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse ,faCartShopping,faPhone,faCircleInfo} from "@fortawesome/free-solid-svg-icons";
const Navbar = () => {
  return (
    <>
      <nav>
        <div className="company-name">
          <div className="logo">
            <img src={logo} alt="logo" width="100%" height="100%" />
          </div>
          <NavLink className="company" to="/">
            HoneyBadgersCo
          </NavLink>
        </div>
        <div className="navbar">
          <NavLink className="head" to="/">
            <div className="icon">
              <FontAwesomeIcon icon={faHouse} />
            </div>
            Home
          </NavLink>
          <NavLink className="head" to="/">
            <div className="icon">
              <FontAwesomeIcon icon={faCartShopping} />
            </div>
            Products
          </NavLink>
          <NavLink className="head" to="/">
            <div className="icon">
              <FontAwesomeIcon icon={faPhone} />
            </div>
            Contact Us
          </NavLink>
          <NavLink className="head" to="/About">
            <div className="icon">
              <FontAwesomeIcon icon={faCircleInfo} />
            </div>
            About Us
          </NavLink>
        </div>
      </nav>
    </>
  );
};
export default Navbar;
