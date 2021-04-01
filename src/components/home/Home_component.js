import React, { useEffect } from "react";
import BaseComponent from "../base/Base_component";
import "./Home_component.scss";
import {Link } from 'react-router-dom';
import PopupComponent from '../popup/Popup_component';

function HomeComponent() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  return (
    <React.Fragment>
      <BaseComponent>
        <div className="bgContainer">
          <div className="homeContainer">
            <div className="leftContainer">
              <h3>
              Donate to Save<br/> a Life.
                <br />
              </h3>
              <h4></h4>
             <Link to="/services"> <button>Learn more</button></Link>
            </div>
            <PopupComponent/>
            <div className="rightContainer">
              <img src="homegif.gif" alt="gif" />
            </div>
          </div>
        </div>
      </BaseComponent>
    </React.Fragment>
  );
}

export default HomeComponent;
