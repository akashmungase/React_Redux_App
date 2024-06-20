import { useState } from "react"

function HideAndShow() {
    const [status, setStatus] = useState(true)

    return(
        <div>
            <h4>Hide and Show Component</h4>
            {
                status ? <h4>Hello World !</h4> : null
            }
            <button onClick={()=>setStatus(false)}>Hide</button>
            &nbsp; &nbsp;
            <button onClick={()=>setStatus(true)}>Show</button>
        </div>
    )
}

export default HideAndShow; 