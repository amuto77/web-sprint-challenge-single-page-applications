import React from "react"

function Pizza (props) {
    console.log(props);
    const { name, size, pepperoni, onions, spinach, mushrooms, instructions } = props;
    const { form, handleChange, handleSubmit, errors} = props;
    return (
        <form onSubmit={handleSubmit}>
            {errors.map(error =>{
                return <p>{error.message}</p>
            })}
            <label>
                Name: 
                <input id="open" name = "name" value={form.name} onChange={handleChange}/>
            </label>
            <label>
                Size:
                <select id="selector" value={form.size} name="size" onChange={handleChange} >
                    <option value="small">Small</option>
                    <option value="medium">Medium</option>
                    <option value="large">Large</option>
                </select>    
            </label>
            <label>
                Pepperoni:
                <input id="pep" name="pepperoni" type="checkbox" checked={form.pepperoni} onChange={handleChange}/>
            </label>
            <label>
                Onions:
                <input id="on"  name="onions" type="checkbox" checked={form.onions} onChange={handleChange}/>
            </label>
            <label>
                Spinach:
                <input name="spinach" type="checkbox" checked={form.spinach} onChange={handleChange}/>
            </label>
            <label>
                Mushrooms:
                <input name="mushrooms" type="checkbox" checked={form.mushrooms} onChange={handleChange}/>
            </label>
            <label>
                Special Instructions
                <input id="special" name="instructions" type="textbox" value={form.instructions} onChange={handleChange}/>
            </label>
            <button id="order" type="submit">Add to Order</button>      
        </form>    
    )
}
export default Pizza;