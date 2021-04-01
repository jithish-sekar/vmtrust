import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import AboutComponent from "../about/About_component";
import HomeComponent from "../home/Home_component";
import ProjectComponent from "../project/Project_component";
import Project2018 from "../projectyear/Project2018";
import Project2019 from "../projectyear/Project2019";
import Project2020 from "../projectyear/Project2020";

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
        <Route exact path="/project2018" component={Project2018} />
        <Route exact path="/project2019" component={Project2019} />
        <Route exact path="/project2020" component={Project2020} />
      </Switch>
    </BrowserRouter>
  );
};
export default Routes;
