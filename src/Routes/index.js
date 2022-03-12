import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "../Containers/home";
import AboutMe from "../Containers/aboutMe";
import ContactMe from "../Containers/contactMe";
import MyProjects from "../Containers/myProjects";
import MySkills from "../Containers/mySkills";

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/about" exact component={AboutMe}></Route>
        <Route path="/contact" exact component={ContactMe} />
        <Route path="/projects" exact component={MyProjects} />
        <Route path="/skills" exact component={MySkills} />
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;
