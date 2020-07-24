import React, { useState } from "react";
import { Switch, Route, useHistory } from "react-router-dom"
import axios from 'axios'
import Navigation from "./components/Navigation"
import Pizza from "./components/Pizza"
import Completion from "./components/Completion"
import Home from "./components/Home"
import "./App.css";
import * as yup from 'yup'
import formSchema from "./schema"

const initialForm = {
  name:'',
  size:'',
  pepperoni: false,
  onions: false,
  spinach: false,
  mushrooms: false,
  instructions: ''
};


function App() {
  const [form, setForm] = useState(initialForm);
  const [pizza, setPizza] = useState([]);
  
  const history = useHistory()
  
  const handleChange = (e) => {
    e.persist();
    e.target.type === 'checkbox' 
    ? setForm({...form, [e.target.name]: e.target.checked})
    : setForm({...form, [e.target.name]: e.target.value});
  };

  const handleSubmit = (e) => {
    e.preventDefault()
    axios.post('https://regres.in/api/pizzas', form)
    .then(res => {
      console.log(res);
      setPizza([res.data, ...pizza]);
      setForm(initialForm);
      history.push('/');
    })
    .catch(err => {
      console.log(err)
    })
  }

  return (
    <div className="App">
      <h1>Lambda Eats</h1>
      <Navigation />
      <Switch>
        <Route path ="/pizza">
          <Pizza form={form} handleChange={handleChange} handleSubmit={handleSubmit}/>
        </Route>
      <Route path="/complete">
        <Completion pizza={pizza}/>
      </Route>
      <Route path="/">
        <Home />
      </Route>
    </Switch>    
    </div>

  );
};
export default App;
