import React from "react";
import NavbarComponent from "../navbar/Navbar_component";
import "./Base_component.scss";
import FooterComponent from '../foooter/Footer_component';

function BaseComponent({children}) {
  return (
    <React.Fragment>
      <NavbarComponent />
      <div>{children}</div>
      <FooterComponent/>
    </React.Fragment>
  );
}

export default BaseComponent;
