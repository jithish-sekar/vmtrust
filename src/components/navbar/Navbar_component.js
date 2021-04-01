import React,{useState} from "react";
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

  const [isHoveringProject, setisHoveringProject] = useState(false)

	const handleMouseHoverProject = (e) => {
		setisHoveringProject(!isHoveringProject)
	}
  return (
    <React.Fragment>
      <div className="bgComponent">
        <div className="navbarContainer">
          <div className="imgClass">
           <Link to="/"> <img src="vmlogo.jpeg" alt="logo" /></Link>
          </div>
          <h3>VM Trust</h3>
          <div className="listClass">
            <ul>
              <Link style={currentTab(history, "/")} to="/">
                <li>Home</li>
              </Link>
              <Link style={currentTab(history, "/about")}  to="/about">
                <li>About us</li>
              </Link>
              <Link style={currentTab(history, "/project")}  to="/project">
                <li
                // onMouseEnter={() => handleMouseHoverProject()}
								// onMouseLeave={() => handleMouseHoverProject()}
                >Project</li>
              </Link>
              <Link style={currentTab(history, "/services")}  to="/services">
                <li>Services</li>
              </Link>
              <Link style={currentTab(history, "/team")} to="/team">
                <li>Team</li>
              </Link>
            </ul>
          </div>
          <div className="sideNavbarshow">
            <SidenavbarComponent />
          </div>
        </div>
							{	isHoveringProject &&
        <div className="hoveringContainer">
									<div>
										<ul>
											<Link to='/project2018'> <li >2018</li></Link>
											<Link to='/project2019'> <li >2019</li></Link>
											<Link to='/project2020'><li>2020</li></Link>
										</ul>
									</div>
                </div>
								}
      </div>
    </React.Fragment>
  );
}

export default withRouter(NavbarComponent);
