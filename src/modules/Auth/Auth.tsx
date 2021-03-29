import React from "react";
import { Route, Redirect, Switch, Link } from "react-router-dom";

import { AuthContainer, HeaderBlock, AuthContent, AuthHeader } from "./styles";
import Register from "./Register/Register";
import Login from "./Login/Login";

const Auth = () => {
  return (
    <AuthContainer>
      <HeaderBlock />
      <AuthHeader>
        <h1>
          <Link to="/auth/login">Login</Link> or{" "}
          <Link to="/auth/register">register</Link> to continue
        </h1>
      </AuthHeader>
      <AuthContent>
        {
          <Switch>
            <Route path="/auth/login" component={Login} />
            <Route path="/auth/register" component={Register} />
            <Redirect to="/auth/login" />
          </Switch>
        }
      </AuthContent>
    </AuthContainer>
  );
};

export default React.memo(Auth);
