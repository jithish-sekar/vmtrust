import React from "react";
import "./Navbar_component.scss";
import { Link, withRouter } from "react-router-dom";
import SidenavbarComponent from "../sidenavbar/Sidenavbar_component";

const currentTab = (history, path) => {
  if (history.location.pathname === path) {
    return { color: "#fff" };
  } else {
    return { color: "#000" };
  }
};

function NavbarComponent({ history }) {
  return (
    <React.Fragment>
      <div className="bgComponent">
        <div className="navbarContainer">
          <div className="imgClass">
            <Link to="/">
              {" "}
              <img src="vmlogo.jpeg" alt="logo" />
            </Link>
          </div>
          <h3>VM Trust</h3>
          <div className="listClass">
            <ul>
              <Link style={currentTab(history, "/")} to="/">
                <li>Home</li>
              </Link>
              <Link style={currentTab(history, "/about")} to="/">
                <li>About us</li>
              </Link>
              <Link style={currentTab(history, "/project")} to="/">
                <li>Project</li>
              </Link>
              <Link style={currentTab(history, "/services")} to="/">
                <li>Services</li>
              </Link>
              <Link style={currentTab(history, "/team")} to="/">
                <li>Team</li>
              </Link>
            </ul>
          </div>
          <div className="sideNavbarshow">
            <SidenavbarComponent />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default withRouter(NavbarComponent);
