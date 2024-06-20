import { useState } from "react"

function Toggle() {
    const [status, setStatus] = useState(true)

    return (
        <div>
            <h4>Toggle Component</h4>
            {
                status ? <h4>Hello World !</h4> : null
            }
            <button onClick={() => setStatus(!status)}>Toggle</button>
        </div>
    )
}

export default Toggle; 