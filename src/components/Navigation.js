import React from "react";
import { useHistory } from "react-router-dom";

function Navigation(){
    const history = useHistory();
    return (
        <div>
            <h1>Make a New Pizza</h1>
            <button onClick={() => history.push("/")}>Home</button>
        </div>
    );
}
export default Navigation