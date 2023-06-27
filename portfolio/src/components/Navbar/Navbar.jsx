import { Link } from "react-router-dom";
import { navbarNavigationItems } from "../../routes/const";
import "./Navbar.scss";

const Navbar = () => {
  return (
    <div className="navbar-container">
      <div className="navbar-items-container">
        {navbarNavigationItems.map((navItem) => (
          <Link to={navItem.route} key={navItem.title}>
            {navItem.title}
          </Link>
        ))}
      </div>
      <div className="say-hello-container">
        <p className="title">SAY HELLO</p>
        <p>justina@kunigonyte@gmail.com</p>
      </div>
    </div>
  );
};

export default Navbar;
