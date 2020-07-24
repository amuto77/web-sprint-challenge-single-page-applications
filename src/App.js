import React, { useState } from "react";
import { Switch, Route } from "react-router-dom"
import Navigation from "./components/Navigation"
import Pizza from "./components/Pizza"
import Completion from "./components/Completion"
import Home from "./components/Home"
import "./App.css";

const initialForm = {
  name:'',
  size:'',
  pepperoni: false,
  onions: false,
  spinach: false,
  mushrooms: false,
  instructions: ''
}

function App() {
  const [form, setForm] = useState();
  return (
    <div className="App">
      <h1>Lambda Eats</h1>
      <Navigation />
      <Switch>
        <Route path ="/pizza">
          <Pizza />
        </Route>
      <Route path="/complete">
        <Completion />
      </Route>
      <Route path="/">
        <Home />
      </Route>
    </Switch>    
    </div>

  );
};
export default App;
