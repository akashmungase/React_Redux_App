import { useState } from "react";

function HandleForm() {
    const [name, setName] = useState("")
    const [tnc, setTnc] = useState(false)
    const [interest, setInterest] = useState("")

    function getFormData(event) {
        event.preventDefault();
        console.log(name, tnc, interest);
    }

    return (
        <div>
            <h4>Handle Form Component</h4>
            <form onSubmit={getFormData}>
                <input type="text" placeholder="enter name"
                    onChange={(e) => setName(e.target.value)} /> <br /><br />
                <select onChange={(e) => setInterest(e.target.value)}>
                    <option>Select Option</option>
                    <option>Marvel</option>
                    <option>DC</option>
                </select>
                <input type="checkbox"
                    onChange={(e) => setTnc(e.target.checked)} />
                <br /><br />
                <span>Accept Terms And Condition</span>
                <br /><br />
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default HandleForm;