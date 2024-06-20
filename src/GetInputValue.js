import { useState } from "react"

function GetInputValue() {

    const [data, setData] = useState(null)
    const [print, setPrint] = useState(false)

    function getData(value) {
        console.log(value.target.value);
        setData(value.target.value)
        setPrint(false)
    }
    return (
        <div>
            <h4>Get Input Value</h4>
            <input type="text" onChange={getData}></input>
            {/* <h4>{data}</h4> */}
            
            <button onClick={()=>setPrint(true)}> show data</button>
            {
                print ? <h4>{data}</h4> : null
            }
        </div>
    )
}

export default GetInputValue;