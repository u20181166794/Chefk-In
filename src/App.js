import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Home from './routes/Home';
import Login from "./routes/Login";
import Sign from "./routes/Sign";
import MenuMesero from "./routes/MenuMesero";
import MenuChef from './routes/MenuChef';
import React from "react";

function App() {

  return (
    <Router>
      <Switch>
        <Route exact path="/" >
          <Home/>
        </Route>
        <Route path="/login">
          <Login/>
        </Route>
        <Route path="/sign">
          <Sign/>
        </Route>
        <Route path="/Mesero">
          <MenuMesero/>
        </Route>
        <Route path="/Chef">
          <MenuChef/>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
