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
  const [errors, setErrors] = useState([]); 
  const history = useHistory()
  
  const handleChange = (e) => {
    console.dir(e.target.value)
    e.persist();
    e.target.type === 'checkbox' 
    ? setForm({...form, [e.target.name]: e.target.checked})
    : setForm({...form, [e.target.name]: e.target.value});
  };
  
  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(form);
    formSchema.validate(form, {abortEarly: false})
    .then(res => {
        axios.post('https://reqres.in/api/pizza', form)
      .then(res => {
        console.log(res);
        setPizza(res.data);
        setForm(initialForm);
        history.push('/complete');
      })
      .catch(err => {
        console.dir(err)
      })
    })
  .catch(err =>{
    console.dir(err);
    setErrors([...err.inner])
  })  
  }

  return (
    <div className="App">
      <h1>Lambda Eats</h1>
      <Navigation />
      <Switch>
        <Route path ="/pizza">
          <Pizza form={form} handleChange={handleChange} handleSubmit={handleSubmit} errors={errors}/>
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
