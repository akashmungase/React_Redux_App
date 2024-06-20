import { useState } from "react"

function Profile() {
    const [LoggedIn, setStatus] = useState(2)

    return (
        <div>
            <h4>Profile Component</h4>
            {
                LoggedIn == 1 ? <h4>Welcome User 1</h4>
                    : LoggedIn == 2 ? <h4>Welcome User 2</h4>
                        : <h4>Welcome Guest</h4>
            }
            <button onClick={() => setStatus(LoggedIn)}>Profile</button>
        </div>
    )
}

export default Profile; 