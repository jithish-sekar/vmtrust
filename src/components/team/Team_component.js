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
          <div className="teamContainer">
            <div className="teamList">
              <img src="team1.jpeg" alt="team" />
              <h1>Hari krishnan</h1>
              <p>Designation: Executive director</p>
              <p style={{ paddingTop: "0px" }}>9597719752</p>
            </div>
            <div className="teamList">
              <img src="team2.jpeg" alt="team" />
              <h1>Bino Godwin</h1>
              <p>Administrative Manager</p>
              <p>7092990621</p>
            </div>
            <div className="teamList">
              <img src="team4.jpeg" alt="team" />
              <h1>Dinesh.U</h1>
              <p>Program Manager</p>
              <p>8220906887</p>
            </div>
            <div className="teamList">
              <img src="team3.jpg" alt="team" />
              <h1>Vasudevan D</h1>
              <p>Communication Manager</p>
              <p>8248543154</p>
            </div>
            <div className="teamList">
              <img src="team5.jpeg" alt="team" />
              <h1>Thiruvenkadasamy R</h1>
              <p>Membership Coordinator</p>
              <p>9489473110</p>
            </div>{" "}
            <div className="teamList">
              <img src="team6.jpg" alt="team" />
              <h1>Fahad K</h1>
              <p>Consultant manager</p>
              <p>6383502409</p>
            </div>
            <div className="teamList">
              <img src="team7.jpeg" alt="team" />
              <h1>Kumbeswaran</h1>
              <p>Distribution & All Rounder</p>
              <p>8778123934</p>
            </div>
          </div>
        </div>
      </BaseComponent>
    </React.Fragment>
  );
}

export default TeamComponent;
