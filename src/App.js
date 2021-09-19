import HomePage from "./views/HomePage";
import SelectPlayersPage from "./views/SelectPlayersPage";
import ProfilePage from "./views/ProfilePage";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <HomePage/>
           </Route>
          <Route path = "/dashboard">
            <SelectPlayersPage/>
          </Route>
          <Route path = "/profile">
            <ProfilePage/>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
