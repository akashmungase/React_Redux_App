import { useRef } from "react";

function UseRef() {

    let inputRef = useRef(null)

    function HandleInput() {
        console.log("Called HandleInput Function");
        inputRef.current.value = "1000"
        inputRef.current.focus();
        inputRef.current.style.color = "red"
    }
    return (
        <div>
            <h4>useRef in function Component</h4>
            <input type="text" ref={inputRef} />
            <button onClick={HandleInput}>Handle Input</button>
        </div>
    )
}

export default UseRef;