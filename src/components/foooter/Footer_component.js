import React from "react";
import "./Footer_component.scss";
import { Link } from "react-router-dom";

function FooterComponent() {
  return (
    <React.Fragment>
      <div className="bgConatiner">
        <div className="footerContainer">
          <div className="navbar">
            <ul>
              <Link to="/">
                {" "}
                <li>Home</li>
              </Link>
              <Link to="/about">
                {" "}
                <li>About us</li>
              </Link>
              <Link to="/project">
                {" "}
                <li>Project</li>
              </Link>
              <Link to="/">
                <li>Team</li>
              </Link>
            </ul>
          </div>
          <div className="socialLink">
            <ul>
              <a href="https://instagram.com/vmtrustcbe?igshid=1p0qrxjzzmpox">
                <li>
                 <i class="fa fa-instagram"></i>Instagram
                </li>
              </a>
              <a href="https://touch.facebook.com/vmtrustcbe/?tsid=0.7019694965329384&source=result">
                <li>
                  <i class="fa fa-facebook-square"></i>Facebook
                </li>
              </a>
              <a href="/">
                <li>
                  <i class="fa fa-twitter-square"></i>Twitter
                </li>
              </a>
              <a href="/">
                <li>
                  <i class="fa fa-whatsapp"></i>Whatsapp
                </li>
              </a>
            </ul>
          </div>
          <div className="address">
            <ul>
              <li>VM Trust</li>
              <li>Email: vmtrust104@gmail.com</li>
              <li>Phone: 9597719752,9080097063</li>
              <li>Address: Coimbatore</li>
            </ul>
          </div>
        </div>
        <h5>© 2021 copyright:VM Trust</h5>
        <a href="https://oddu.in">
          {" "}
          <h4>
            Built with <i style={{ color: "tomato" }} class="fa fa-heart"></i>{" "}
            by Oddu.in
          </h4>
        </a>
      </div>
    </React.Fragment>
  );
}

export default FooterComponent;
