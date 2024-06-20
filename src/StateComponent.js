import { useState } from 'react';

function StateComponent() {
    const [data, setData] = useState(0)

    function updateData() {
        setData(data + 1)
    }
    return (
        <div>
            <h4>States</h4>
            <h3>{data}</h3>
            <button onClick={updateData}>Change Value</button>
        </div>
    )
}

export default StateComponent