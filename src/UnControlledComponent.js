import { useRef } from "react";

function UnControlledComponent() {

    let inputRef1 = useRef(null)
    let inputRef2 = useRef(null)

    function submitForm(e) {
        e.preventDefault();
        console.log("inputRef1", inputRef1.current.value);
        console.log("inputRef2", inputRef2.current.value);
        let input3 = document.getElementById("input3").value;
        console.log("input3", input3);
    }
    return (
        <div>
            <h4>UnControlled Component</h4>
            <form onSubmit={submitForm}>
                <input type="text" ref={inputRef1} /> <br /><br />
                <input type="text" ref={inputRef2} /> <br /><br />
                <input type="text" id="input3" /> <br /><br />
                <button>Submit</button>
            </form>
        </div>
    )
}

export default UnControlledComponent;