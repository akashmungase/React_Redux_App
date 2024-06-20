function User(props) {
    function userList() {
        // alert("Hello")
    }
    console.log(props);
    return (
        <div>
            <h4>User</h4>
            <button onClick={userList}>Click Me</button>
            <h4>{props.name}</h4>
        </div>

    )
}

export default User