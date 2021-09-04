import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./Home";

const RoutingPath = () => {
  return (
    <Switch>
      <Route path="/people" component={Home} />
      <Route path="/planets" component={Home} />
      <Route path="/starships" component={Home} />
      <Route path="/films" component={Home} />
      <Route path="/" component={Home} />
    </Switch>
  );
};

export default RoutingPath;
