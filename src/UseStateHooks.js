import { useState } from "react";

function UseStateHooks() {
    const [name, setName]=useState("Jhon")

    return(
        <div>
            <h4>UseStateHooks Component</h4>
            <h4>{name}</h4>
            <button onClick={()=>setName("Peter")}>Update Name</button>
        </div>
    )
}

export default UseStateHooks;