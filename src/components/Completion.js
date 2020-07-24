import React from 'react'

export default function Completion(props){
    const { name, size, pepperoni, onions, spinach, mushrooms, instructions } = props.pizza
    return (
        <div>
            <h3>{name}</h3>
            <h4>Your Pizza</h4>
            <p>Size: {size}</p>
            {pepperoni && <p>Pepperoni</p>}
            {onions && <p>Onions</p>}
            {spinach && <p>Spinach</p>}
            {mushrooms && <p>Mushrooms</p>}
            <h4>{instructions}</h4>
        </div>   
    )
}