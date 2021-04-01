import React, { useEffect } from "react";
import BaseComponent from "../base/Base_component";
import "./Team_component.scss";

function TeamComponent() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <React.Fragment>
      <BaseComponent>
        <div className="teamContainer">
          <h3>Team</h3>
          <h5>a</h5>
          <h4>Any company can offer digital media services.What sets any agency apart from the rest of the clans is the caliber of people working together
          to build their brand.Meet the people who make it happen.
          </h4>
          <div className="teamContainer">
            <div className="teamList">
              <img src="team1.png" alt="team"/>
              <h1>RJ Suresh</h1>
              <p>The one defined by his practical,level headed,methodical and result oriented.</p>
            </div>
            <div className="teamList">
              <img src="team2.png" alt="team"/>
              <h1>R Prasanth</h1>
              <p>The one defined by his visionary,Amiable,cooperative and organized.</p>
            </div>
            {/* <div className="teamList">
              <img className=""  src="team3.png" alt="team"/>
              <h1>Anu</h1>
              <p>The one defined by her constructive,creative, thoughtful and organizational skills.</p> 
            </div> */}
          </div>
        </div>
      </BaseComponent>
    </React.Fragment>
  );
}

export default TeamComponent;
