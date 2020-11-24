import React, { createContext, useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './Components/Home/Home/Home';
import FullContact from './Components/FullContact/FullContact';
import Login from './Components/Login/Login';
import PrivateRoute from './Components/Login/PrivateRoute';

import DashBord from './Components/DashBord/DashBord';
export const userContext = createContext();
function App() {
  const [logedInUser,setLogedInUser] = useState({});
  return (
    <userContext.Provider value={[logedInUser,setLogedInUser]}>
    <Router>
      <Switch>
        <Route exact path="/">
          <Home></Home>
        </Route>
        <Route path="/home">
          <Home></Home>
        </Route>
        <Route path="/contact">
          <FullContact></FullContact>
        </Route>
        <Route path="/login">
          <Login></Login>
        </Route>
        <PrivateRoute path="/dashbord">
          <DashBord></DashBord>
        </PrivateRoute>
      </Switch>
    </Router>
    </userContext.Provider>
  );
}

export default App;
