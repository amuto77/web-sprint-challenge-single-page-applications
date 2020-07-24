import React from 'react'
import Completion from './Completion'

export default function PizzaList(props) {
    return (
        <div>
            <h3>Pizzas</h3>
            {props.pizza.map(pizza => 
            <Pizza pizza={pizza} key={pizza.id}/>)}
        </div>   
    )
}