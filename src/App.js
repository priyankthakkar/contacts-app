import React from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import { createBrowserHistory } from "history";
import Contacts from "./module/contacts/contacts";
import ContactDetails from "./module/contacts/ContactDetails";
import Home from "./Home";
import ButtonNav from "./module/contacts/ButtonNav";

const history = createBrowserHistory();
const App = () => {
  return (
    <Router history={history}>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/contacts">Contacts</Link>
            </li>
            <li>
              <ButtonNav />
            </li>
          </ul>
        </nav>
      </div>
      <Switch>
        <Route exact={true} path="/">
          <Home />
        </Route>
        <Route exact={true} path="/contacts/:id">
          <ContactDetails />
        </Route>
        <Route exact={true} path="/contacts">
          <Contacts />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
