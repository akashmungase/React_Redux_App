import { useEffect, useState } from "react";
import ChildUseEffect from "./ChildUseEffect";

function UseEffectHook() {

    const [count, setCount] = useState(0)
    const [data, setData] = useState(0)

    useEffect(() => {
        console.log("Called with Count State");
    }, [count])

    useEffect(() => {
        console.log("Called with Data State");
    }, [data])

    return (
        <div>
            <h4>UseEffect Hook Component</h4>
            {/* <h4>Count: {count}</h4>
            <h4>Datat: {data}</h4> */}
            <ChildUseEffect count={count} data={data} />
            <button onClick={() => setCount(count + 1)}>Update Count</button> &nbsp;
            <button onClick={() => setData(data + 1)}>Update Data</button>
        </div>
    )
}

export default UseEffectHook;