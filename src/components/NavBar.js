import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <ul className="desktopMenu">
      <div className="dropDownTrigger">
        <li>
          <Link to="/">Home</Link>
        </li>
        <div className="dropDownContent">
          <li>About</li>
          <li>Reviews</li>
          <li>Office Policies</li>
          <li>Blog</li>
        </div>
      </div>
      <li>
        <Link to="/gynecology">Gynecology</Link>
      </li>
      <li>
        <Link to="/vaginal-rejuventation">Vaginal Rejuvenation</Link>
      </li>
      <li>
        <Link to="/aesthetics">Aesthetics</Link>
      </li>
      <li>
        <Link to="/patient-resources">Patient Resources</Link>
      </li>
      <li>
        <Link to="/contact-us">Contact Us</Link>
      </li>
    </ul>
  );
};

export default NavBar;
