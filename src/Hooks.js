import { useState } from "react";

function Hooks() {
    const [name, setName]=useState("Jhon")

    return(
        <div>
            <h4>Hooks Component</h4>
            <h4>{name}</h4>
            <button onClick={()=>setName("Peter")}>Update Name</button>
        </div>
    )
}

export default Hooks;