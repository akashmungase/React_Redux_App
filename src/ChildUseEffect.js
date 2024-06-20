import { useEffect } from "react";

function ChildUseEffect(Props) {

    useEffect(() => {
        console.log(" ChildUseEffect Called with Count State");
    }, [Props.count])

    useEffect(() => {
        console.log(" ChildUseEffect Called with Data State");
    }, [Props.data])

    return (
        <div>
            <h4>Child Component UseEffect</h4>
            <h4>Count: {Props.count}</h4>
            <h4>Data: {Props.data}</h4>
        </div>
    )
}

export default ChildUseEffect;