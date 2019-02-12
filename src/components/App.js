import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";

import People from "../containers/People";
import Dashboard from "../containers/Dashboard";

class App extends Component {

  render() {
    return (
      <div>
        <Switch>
          <Route exact path="/" component={Dashboard} />
          <Route path="/people/" component={People} />
        </Switch>
      </div>
    );
  }
}

export default App