import "bootstrap/dist/css/bootstrap.min.css";
import { NavBar } from "./components/NavBar";
import { Switch, Route } from "react-router-dom";
import "./App.css";
import { Home } from "./components/Home";
import { LogIn } from "./components/Login";
import { Dashboard } from "./components/DashBoard";

function App() {
  return (
    <>
      <NavBar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/login">
          <LogIn />
        </Route>
        <Route path="/dashboard">
          <Dashboard />
        </Route>
      </Switch>
    </>
  );
}

export default App;
