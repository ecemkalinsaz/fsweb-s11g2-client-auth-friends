import { Link, Switch, Route } from "react-router-dom";
import "./App.css";
import Login from "./Login";
import FriendsList from "./FriendsList";
import AddFriends from "./AddFriends";

function App() {
  return (
    <div className="App">
      <div className="flex justify-between">
        <h1 className="text-4xl font-bold p-2">FRIENDS DATABASE</h1>
        <nav className="flex">
          <Link
            to="/login"
            className="m-3 gap-3 bg-neutral-800 hover:bg-neutral-950 text-white font-bold py-2 px-4 rounded"
          >
            LOGIN
          </Link>
          <Link
            to="/friendslist"
            className="m-3 gap-3 bg-neutral-800 hover:bg-neutral-950 text-white font-bold py-2 px-4 rounded"
          >
            FRIENDSLIST
          </Link>
          <Link
            to="/addfriends"
            className="m-3 gap-3 bg-neutral-800 hover:bg-neutral-950 text-white font-bold py-2 px-4 rounded"
          >
            ADDFRIEND
          </Link>
          <button
            to="/logout"
            className="m-3 gap-3 bg-neutral-800 hover:bg-neutral-950 text-white font-bold py-2 px-4 rounded"
          >
            LOGOUT
          </button>
        </nav>
      </div>
      <div class="flex justify-center">
        <hr class=" w-4/5 border-4 border-neutral-800" />
      </div>

      <Switch>
        <Route exact path="/">
          <h1>Client Auth Projesi: Friends</h1>
        </Route>

        <Route
          exact
          path="/login"
          render={(props) => <Login {...props} history={props.history} />}
        >
          <Login />
        </Route>

        <Route exact path="/friendslist" component={FriendsList}>
          <FriendsList />
        </Route>

        <Route exact path="/addfriends" component={AddFriends}>
          <AddFriends />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
