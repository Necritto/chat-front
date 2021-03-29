import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import { observer } from "mobx-react-lite";

import Auth from "modules/Auth/Auth";
import Home from "modules/Home/Home";
import Change from "modules/Change/Change";
import authStore from "stores/AuthStore/AuthStore";
import authManager from "services/AuthManager";
import GetUser from "components/GetUser/GetUser";

const App = () => {
  const token = authManager.getToken();

  if (authStore.isAuth) {
    return (
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/changePassword" exact component={Change} />
        <Redirect to="/" />
      </Switch>
    );
  }

  if (!token) {
    return (
      <Switch>
        <Route path="/auth" component={Auth} />
        <Redirect to="/auth" />
      </Switch>
    );
  }

  return <GetUser token={token} />;
};

export default observer(App);
