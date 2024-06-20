import { Button } from "react-bootstrap";
import ChildComponentFRef from "./ChildComponentFRef";
import { useRef } from "react";

function ForwordRef() {

    let inputRef = useRef(null)

    function updateInput() {
        inputRef.current.value = "1000"
        inputRef.current.style.color = "red"
    }

    return (
        <div>
            <h4>forwordRef in React.js</h4>

            <ChildComponentFRef ref={inputRef} />
            <br />
            <Button onClick={updateInput}>Update InputBox</Button>
        </div>
    )
}

export default ForwordRef;