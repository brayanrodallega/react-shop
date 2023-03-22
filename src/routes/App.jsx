import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Layout from "../container/Layout";
import Login from "../container/Login";
import RecoveryPassword from "../container/RecoveryPassword";
import Home from "../pages/Home";
import NotFound from "../pages/NotFound";
import "../styles/global.css";

const App = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/recovery-password" component={RecoveryPassword} />
          <Route component={NotFound} />
        </Switch>
      </Layout>
    </BrowserRouter>
  );
};

export default App;
