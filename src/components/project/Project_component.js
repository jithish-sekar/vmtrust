import React, { useEffect } from "react";
import BaseComponent from "../base/Base_component";
import "./Project_component.scss";
function ProjectComponent() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <React.Fragment>
      <BaseComponent>
        <div className="aboutContainer">
          <div className="titleContainer">
            <h3>Our Projects</h3>
          </div>
          <div className="ContentAbout">
            <p style={{ fontWeight: "bold" }}>
              Our First project Title (உதவும் கைகள்)
            </p>
            <p>1.Children education</p>
            <p>2.Helpless transgenders</p>
            <p>3.war Widows</p>
            <p>4.Old age people's (Only one person in home)</p>
            <p>5.Handicap people's</p>
            <p>6.HIV patients (childrens)</p>
            <p>7.Born children with illness</p>
            <p>8.Plantation drive</p>
            <p>9.Handicapped childrens</p>
            <p>9.Handicapped childrens</p>
            <p style={{ fontWeight: "bold",marginTop:"30px" }}>Motto of the project</p>
            <p>
              Those who are in trouble or anything need in their life.. We would
              like to support and care to those people's. Money doesn't given to
              anybody...Things only given to by us.. For example<br/><br/> 1.vegetables<br/><br/>
              2.Groceries<br/><br/> 3.Dressses<br/><br/> 4.Medicines<br/><br/> 5.Food and raw materials<br/><br/>
              6.Anything they want personally that only allow to given to our
              team.. Monthly one project taken by us and successfully we want to
              complete and fullfill the project!...
            </p>
          </div>
        </div>
      </BaseComponent>
    </React.Fragment>
  );
}

export default ProjectComponent;
