import { useState } from "react";

function StateWithObject() {

    const [data, setData] = useState({ name: "Peter", age: 45 })
    return (
        <div>
            <h4>State With Object</h4>
            <p>{data.name}</p>
            <p>{data.age}</p>
            <input type="text" value={data.name} placeholder="enter name"
                onChange={(e) => setData({ ...data, name: e.target.value })} />
            <br /><br />
            <input type="text" value={data.age} placeholder="enter age"
                onChange={(e) => setData({ ...data, age: e.target.value })} />
        </div>
    )
}

export default StateWithObject;