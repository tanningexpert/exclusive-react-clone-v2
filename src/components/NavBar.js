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

      <div className="dropDownTrigger">
        <li>
          <Link to="/gynecology">Gynecology</Link>
        </li>
        <div className="dropDownContent">
          <li>Gynecology Services</li>
          <li>Hormone Replacement Therapy</li>
          <li>Medical Weightloss</li>
        </div>
      </div>

      <li>
        <Link to="/vaginal-rejuventation">Vaginal Rejuvenation</Link>
      </li>

      <div className="dropDownTrigger">
        <li>
          <Link to="/aesthetics">Aesthetics</Link>
        </li>
        <div className="dropDownContent">
          <li>Vaginal Rejuvenation</li>
          <li>Cellulite Reduction</li>
          <li>Foot Detox Bath</li>
          <li>Pre|Post Care Instructions</li>
          <li>
            <Link to="/aesthetics-v2">View All Services</Link>
          </li>
        </div>
      </div>

      <div className="dropDownTrigger">
        <li>
          <Link to="/patient-resources">Patient Resources</Link>
        </li>
        <div className="dropDownContent">
          <li>Forms</li>
          <li>Getting Your Lab Results</li>
          <li>Financing</li>
        </div>
      </div>

      <div className="dropDownTrigger">
        <li>
          <Link to="/contact-us">Contact Us</Link>
        </li>
        <div className="dropDownContent">
          <Link to="/appointment-request">Appointment Request</Link>
          <li>Send a Secure Email</li>
        </div>
      </div>
    </ul>
  );
};

export default NavBar;
