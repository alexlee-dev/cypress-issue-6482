import React, { useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useLocation
} from "react-router-dom";

const Login = () => {
  const code = useLocation()
    .search.replace("?", "")
    .split("=")[1];

  console.log(`inside Login - code: ${code}`);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <span>This is the login screen of the application ...</span>
        <span>Your code is {code}</span>
      </header>
    </div>
  );
};

const Start = () => {
  useEffect(() => {
    debugger;
    const code = window.location.search.replace("?", "").split("=")[1];
    console.log(`Inside start useEffect() - code: ${code}`);
    window.location.replace(`/login?code=${code}`);
  }, []);
  return (
    <div>
      <span>This is the application, but you have no code</span>
    </div>
  );
};

function App() {
  console.log(window.location.pathname);
  return (
    <Router>
      <Switch>
        <Route path="/application" children={<Start />} />
        <Route path="/login" children={<Login />} />
      </Switch>
    </Router>
  );
}

export default App;
