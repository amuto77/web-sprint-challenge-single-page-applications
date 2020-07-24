import React from "react"

function Pizza (props) {
    console.log(props);
    const { name, size, pepperoni, onions, spinach, mushrooms, instructions } = props;
    const { form, handleChange } = props;
    return (
        <form>
            <label>
                Name: 
                <input name = "name" value={form.name} onChange={handleChange}/>
            </label>
            <label>
                Size:
                <select value={form.size} name="size">
                    <option value="small">Small</option>
                    <option value="medium">Medium</option>
                    <option value="large">Large</option>
                </select>    
            </label>
            <label>
                Pepperoni:
                <input name="pepperoni" type="checkbox" onChange={handleChange}/>
            </label>
            <label>
                Onions:
                <input name="onions" type="checkbox" onChange={handleChange}/>
            </label>
            <label>
                Spinach:
                <input name="spinach" type="checkbox" onChange={handleChange}/>
            </label>
            <label>
                Mushrooms:
                <input name="mushrooms" type="checkbox" onChange={handleChange}/>
            </label>
            <label>
                Special Instructions
                <input name="instructions" type="textbox" value={form.instructions} onChange={handleChange}/>
            </label>
            <button>Add to Order</button>      
        </form>    
    )
}
export default Pizza;