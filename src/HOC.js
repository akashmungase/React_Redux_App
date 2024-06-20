import { useState } from "react";
import { Button } from "react-bootstrap";

function HOC() {
    return (
        <div>
            <h4>Higher-Order Component (HOC)</h4>
            <HOCRed cmp={Counter} />
            <HOCBlue cmp={Counter} />
        </div>
    )
}

export default HOC;

function HOCRed(props) {
    return (
        <h4 style={{backgroundColor: "red"}}><props.cmp /></h4>
    )
}

function HOCBlue(props) {
    return (
        <h4 style={{backgroundColor: "blue"}}><props.cmp /></h4>
    )
}

function Counter() {

    const [count, setCount] = useState(0)

    return (
        <div>
            <h4>Counter Component</h4>
            <h4>Count {count}</h4>
            <Button onClick={() => setCount(count + 1)}>Update Count</Button>
        </div>
    )
}
