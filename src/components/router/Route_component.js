import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import AboutComponent from "../about/About_component";
import HomeComponent from "../home/Home_component";
import ProjectComponent from "../project/Project_component";

import ServicesComponent from "../services/Services_component";
import TeamComponent from "../team/Team_component";


const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={HomeComponent} />
        <Route exact path="/about" component={AboutComponent} />
        <Route exact path="/project" component={ProjectComponent} />
        <Route exact path="/services" component={ServicesComponent} />
        <Route exact path="/team" component={TeamComponent} />
      </Switch>
    </BrowserRouter>
  );
};
export default Routes;
