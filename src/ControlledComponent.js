import { useState } from "react";

function ControlledComponent() {

    let [val, setVal] = useState("")
    let [item, setItem] = useState("")

    return (
        <div>
            <h4>Controlled Component</h4>
            <input type="text" value={val} onChange={(e) => setVal(e.target.value)} />
            <input type="text" value={item} onChange={(e) => setItem(e.target.value)} />
            <h4>{val} {item}</h4>
        </div>
    )
}

export default ControlledComponent;