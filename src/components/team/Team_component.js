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
       
      </BaseComponent>
    </React.Fragment>
  );
}

export default TeamComponent;
