import { BrowserRouter, Switch, Route } from "react-router-dom";

import React from "react";
import Main from "./pages/Main";
import Repository from "./pages/Repository";

import

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Main} />
        <Route path="/repository/:repository" component={Repository} />
      </Switch>
    </BrowserRouter>
  );
}
