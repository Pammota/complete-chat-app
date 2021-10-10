import React from "react"

import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
////multipage apps using react

//one big object that contains all the data of the current state and that wraps around all the other components
import { AuthProvider } from "../contexts/AuthContext";

import Chats from "./Chats.js"
import Login from "./Login.js";

const App = ()=> {
  return (
    <div style={{ fontFamily: 'Avenir' }}>
      <Router>
        <AuthProvider>
          <Switch>
            <Route path="/chats" component={Chats} />
            <Route path="/" component={Login} />
          </Switch>
        </AuthProvider>
      </Router>
    </div>
  )
}

export default App;
