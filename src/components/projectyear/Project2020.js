import React,{useEffect} from "react";
import BaseComponent from "../base/Base_component";
import "./projectyear.scss";

function Project2020() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <React.Fragment>
      <BaseComponent>
        <div className="ProjectyearContainer">
          <h3>Project 2020</h3>
          <h5>a</h5>
          <div className="filmPoster">
              <img src="12020.jpg" alt="poster"/>
              <img src="22020.png" alt="poster"/>
              <img src="32020.jpg" alt="poster"/>
              <img src="42020.jpg" alt="poster"/>
              <img src="52020.jpg" alt="poster"/>
          </div>
        </div>
      </BaseComponent>
    </React.Fragment>
  );
}

export default Project2020;
