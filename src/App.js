import "./styles.css";
import Create_post from "./components/create_post";
import Show_post from "./components/show_post";
import Error from "./error";
import Nav from "./nav";
import Auth from "./Auth/auth";
import AppContext from "./utils/authContext";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

export default function App() {
  return (
    <div>
      <AppContext>
        <Router>
          <Nav />
          <Switch>
            <Route exact path="/">
              <Show_post />
            </Route>
            <Route path="/create">
              <Create_post />
            </Route>
            <Route path="/auth">
              <Auth />
            </Route>
            <Route path="*">
              <Error />
            </Route>
          </Switch>
        </Router>
      </AppContext>
    </div>
  );
}

//todo
// not logged in users should not make new post
// navbar should update after login
// signout button
