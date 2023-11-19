import "./Navbar.css";
import navLogo from "../../assets/logo.png";
import navLogo2 from "../../assets/PRASTHAN YATNAM-OK.jpg";
import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar_logo">
        <img src={navLogo} alt="" />
        <Link to="/">
          <img src={navLogo2} alt="" />
        </Link>
      </div>
      <div className="navbar_links">
        <NavLink to={"/"}>Home</NavLink>
        <NavLink to={"/discourses"}>Discourses</NavLink>
        <NavLink to={"/adventure"}>Adventure</NavLink>
        <NavLink to={"/activity"}>Activity</NavLink>
        <NavLink to={"/login"}>Login</NavLink>
        <NavLink to={"/scholarships"}>Scholarships</NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
