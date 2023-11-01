import './App.css';
import Login from './component/Login';
import AddFriend from "./component/AddFriend"
import FriendsList from './component/FriendsList';
import Header from './component/Header';

import {
    Switch,
    Route,
} from "react-router-dom";

import PrivateRoute from './component/PrivateRoute';

const headerLinks = [
    { text: "LOGIN.", path: "/login" },
    { text: "FRIENDS.", path: "/friends" },
    { text: "ADDFRIEND.", path: "/friends/add" },
]

function App() {
  return (
    <>
    <div className="App">
        <Header title="FRIENDS DATABASE" listOfLinks={headerLinks}/>
        <div className='seperator'></div>

    <Switch >
        <Route exact path="/">
            <Login className="container"/>
        </Route>
        <Route exact path="/login">
            <Login className="container"/>
        </Route>
        <Route exact path="/friends">
            <PrivateRoute>
                <FriendsList />
            </PrivateRoute>
        </Route>
        <Route exact path="/friends/add">
            <PrivateRoute>
                <AddFriend className="container"/>
            </PrivateRoute>
        </Route>

    </Switch>
    </div>

    </>

  );
}

export default App;
