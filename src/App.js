import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from './routes/Home';
import Login from "./routes/Login";
import Sign from "./routes/Sign";
import Dashboard from './routes/Dashboard';
import MenuMesero from "./routes/MenuMesero";
import MenuMeseroOrden from './routes/MenuMeseroOrden';
import MenuChef from './routes/MenuChef';
import DocInicio from './documentacion/DocInicio';
import React from "react";

function App() {

  return (
    <Router>
      <Switch>
        <Route exact path="/" >
          <Home />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/sign">
          <Sign />
        </Route>
        <Route path="/dashboard">
          <Dashboard />
        </Route>
        <Route path="/Mesero/:userId">
          <MenuMesero/>
        </Route>
        <Route path="/MeseroOrden/:id">
          <MenuMeseroOrden />
        </Route>
        <Route path="/Chef">
          <MenuChef />
        </Route>
        <Route path="/docInicio">
          <DocInicio />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
