import React,{useEffect} from "react";
import BaseComponent from "../base/Base_component";
import "./projectyear.scss";

function Project2018() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <React.Fragment>
      <BaseComponent>
        <div className="ProjectyearContainer">
          <h3>Project 2018</h3>
          <h5>a</h5>
          <div className="filmPoster">
              <img src="12018.jpg" alt="poster"/>
              <img src="22018.jpg" alt="poster"/>
              <img src="32018.jpg" alt="poster"/>
              <img src="42018.jpg" alt="poster"/>
              <img src="52018.jpg" alt="poster"/>
          </div>
        </div>
      </BaseComponent>
    </React.Fragment>
  );
}

export default Project2018;
