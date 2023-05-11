import { NavLink } from "react-router-dom";
import "../css/Navbar.css"
import logo from '../css/logo.png'
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
            Home
          </NavLink>
          <NavLink className="head" to="/">
            Products
          </NavLink>
          <NavLink className="head" to="/">
            Contact Us
          </NavLink>
          <NavLink className="head" to="/">
            About Us
          </NavLink>
        </div>
      </nav>
    </>
  );
};
export default Navbar;
