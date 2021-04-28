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
        
      </BaseComponent>
    </React.Fragment>
  );
}

export default ProjectComponent;
