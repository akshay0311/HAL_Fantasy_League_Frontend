import HomePage from "./views/HomePage";
import SelectPlayersPage from "./views/SelectPlayersPage";
import SignupPage from "./views/SignupPage";
import LoginPage from "./views/LoginPage";
import ProfilePage from "./views/ProfilePage";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { AuthProvider } from "./contexts/AuthContext";
import PrivateRoute from "./PrivateRoute";
import Bet360Page from "./views/Bet360Page";

function App() {
  return (
    <AuthProvider>
      <div className="App">
        <Router>
          <Switch>
            <Route exact path="/">
              <HomePage />
            </Route>
            <Route path="/signup">
              <SignupPage />
            </Route>
            <Route path="/login">
              <LoginPage />
            </Route>
            <Route path="/bet360">
              <Bet360Page/>
            </Route>
            <PrivateRoute path="/dashboard" component={SelectPlayersPage}/>
            <PrivateRoute path="/profile" component={ProfilePage}/>
          </Switch>
        </Router>
      </div>
    </AuthProvider>
  );
}

export default App;
