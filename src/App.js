import './App.css';
import Login from './component/Login';
import AddFriend from "./component/AddFriend"

import {
    Switch,
    Route,
} from "react-router-dom";

function App() {
  return (
    <>
    <div className="App">
      <h1>Client Auth Projesi: Friends</h1>

    <Switch >
        <Route exact path="/">
            <Login className="container"/>
        </Route>
        <Route exact path="/login">
            <Login className="container"/>
        </Route>
        <Route exact path="/friends">
            <div>FRIENDS PAGE</div>
        </Route>
    </Switch>
    </div>

    </>

  );
}

export default App;
