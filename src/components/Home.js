import React from "react"
import { useHistory } from "react-router-dom"
import { Pizza } from "../Assets/Pizza.jpg" 

function Home(){
    const history = useHistory();
    return(
        <section>
            <div>
                <button onClick={() => history.push("/pizza")}>Build Your Pizza!</button>
            </div>    
        </section>   
    )
}

export default Home;