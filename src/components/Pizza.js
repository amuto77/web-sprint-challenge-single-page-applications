import React from "react"

function Pizza (props) {
    const { name, size, pepperoni, onions, spinach, mushrooms, instructions } = props;
    return (
        <form>
            <label>
                Name: 
                <input name = "name" value={name}/>
            </label>
            <label>
                Size:
                <select value={size} name="size">
                    <option value="small">Small</option>
                    <option value="medium">Medium</option>
                    <option value="large">Large</option>
                </select>    
            </label>
            <label>
                Pepperoni:
                <input type="checkbox"/>
            </label>
            <label>
                Onions:
                <input type="checkbox"/>
            </label>
            <label>
                Spinach:
                <input type="checkbox"/>
            </label>
            <label>
                Mushrooms:
                <input type="checkbox"/>
            </label>
            <label>
                Special Instructions
                <input type="textbox" value={instructions}/>
            </label>      
        </form>    
    )
}
export default Pizza;