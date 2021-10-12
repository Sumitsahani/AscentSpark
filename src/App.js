import './App.css';
import UserList from './UserList';
import {Switch, Route } from "react-router-dom";
import AddUser from './AddUser';
import Nav from './Nav';

function App() {
  return (
    <div className="App">
          <Nav />
        <Switch>
          <Route path="/UserList"  component={UserList}/>
          <Route path="/AddUser"  component={AddUser}/>
        </Switch>
    </div>
  );
}

export default App;
