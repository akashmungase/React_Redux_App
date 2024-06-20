import { useState } from "react"
import { Button } from "react-bootstrap";

function PreviousState() {

    const [count, setCount] = useState(1);

    function updateCount() {

        // let randamValue = Math.floor(Math.random() * 10)
        // setCount((pre)=> {
        //     console.log("previous value", pre);
        //     return randamValue
        // })

        for (let i = 0; i < 5; i++) {
            // setCount(count + 1)
            setCount((pre) => pre + 1)
        }
    }

    return (
        <div>
            <h4>Previous State in Functional Component</h4>
            <h4>{count}</h4>
            <Button onClick={updateCount}>Update Count</Button>
        </div>
    )
}

export default PreviousState;