import { useMemo, useState } from "react";
import { Button } from "react-bootstrap";

function UseMemoHook() {

    const [count, setCount] = useState(0)
    const [item, setItem] = useState(10)

    const multiCount = useMemo(function multiCount() {
        console.log("called multiCount");
        return count * 5
    }, [count])

    // function multiCount() {
    //     console.log("called multiCount");
    //     return count * 5
    // }
    return (
        <div>
            <h4>useMemo Hook Component</h4>

            <h4>Count: {count}</h4>
            <h4>Count: {item}</h4>

            {/* <h4>multiCount: {multiCount()}</h4> */}
            <h4>multiCount: {multiCount}</h4>

            <Button onClick={() => setCount(count + 1)}>Update Count</Button>
            &nbsp; &nbsp;
            <Button onClick={() => setItem(item * 2)}>Update Item</Button>
        </div>
    )
}

export default UseMemoHook;