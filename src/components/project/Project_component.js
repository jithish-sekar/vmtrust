import React, { useEffect } from "react";
import BaseComponent from "../base/Base_component";
import "./Project_component.scss";
import {Link } from 'react-router-dom';
function ProjectComponent() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <React.Fragment>
      <BaseComponent>
        <div className="projectContainer">
          <h3>Projects</h3>
          <h5>a</h5>
          <div className="flexCard">
          <Link to="/project2018">
            <div class="card 3">
              <div className="card_image">
                <img src="https://media.giphy.com/media/10SvWCbt1ytWCc/giphy.gif" alt="gif" />
              </div>
              <div className="card_title">
                <p style={{fontFamily:"Josefin Sans, sans-serif",color:"#fff"}}>Project 2018</p>
              </div>
            </div>
            </Link>
            <Link to="/project2019">
            <div className="card 4">
              <div className="card_image">
                <img src="https://media.giphy.com/media/LwIyvaNcnzsD6/giphy.gif" alt="gif" />
              </div>
              <div className="card_title title-black">
                <p style={{fontFamily:"Josefin Sans, sans-serif",color:"#fff"}}>Project 2019</p>
              </div>
            </div>
            </Link>
            <Link to="/project2020">
            <div className="card 4">
              <div className="card_image">
                <img src="https://media.giphy.com/media/10SvWCbt1ytWCc/giphy.gif" alt="gif" />
              </div>
              <div className="card_title title-black">
                <p style={{fontFamily:"Josefin Sans, sans-serif",color:"#fff"}}>Project 2020</p>
              </div>
            </div>
            </Link>
          </div>
        </div>
      </BaseComponent>
    </React.Fragment>
  );
}

export default ProjectComponent;
