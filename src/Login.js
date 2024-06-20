import { useState } from "react";

function Login() {

    const [userName, setUserName] = useState("")
    const [password, setPassword] = useState("")
    const [userError, setUserError] = useState(false)
    const [passwordError, setPasswordError] = useState(false)

    function checkFormData(event) {
        event.preventDefault();

        if (userName.length < 3 || password < 3) {
            alert("Enter Correct Values")
        }
    }

    function userHandler(e) {
        let item = e.target.value
        if (item.length < 3) {
            setUserError(true)
        }
        else {
            setUserError(false)
        }
        setUserName(item)
    }
    function passwordHandler(e) {
        let item = e.target.value
        if (item.length < 3) {
            setPasswordError(true)
        }
        else {
            setPasswordError(false)
        }
        setPassword(item)
    }
    return (
        <div>
            <h4>Login Component</h4>
            <form onSubmit={checkFormData}>
                <input type="text" placeholder="enter user name"
                    onChange={userHandler} />
                <br />
                {userError == true ? <span>Invalid User Name</span> : ""}
                <br /><br />
                <input type="password" placeholder="enter password"
                    onChange={passwordHandler} />
                <br />
                {passwordError == true ? <span>Invalid User Name</span> : ""}
                <br /><br />
                <button type="submit">Login</button>
            </form>
        </div>
    )
}

export default Login;