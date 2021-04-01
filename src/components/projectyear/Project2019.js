import React,{useEffect} from "react";
import BaseComponent from "../base/Base_component";
import "./projectyear.scss";

function Project2019() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <React.Fragment>
      <BaseComponent>
        <div className="ProjectyearContainer">
          <h3>Project 2019</h3>
          <h5>a</h5>
          <div className="filmPoster">
              <img src="12019.jpg" alt="poster"/>
              <img src="22019.jpg" alt="poster"/>
              <img src="32019.jpg" alt="poster"/>
              <img src="42019.jpg" alt="poster"/>
              <img src="52019.jpg" alt="poster"/>
          </div>
        </div>
      </BaseComponent>
    </React.Fragment>
  );
}

export default Project2019;
