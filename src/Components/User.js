import { useParams } from "react-router-dom";

function User() {

    const params = useParams();

    console.log('params', params);

    return (
        <div>
            <h4>User Component</h4>
            <p>{params.name} Page</p>
        </div>
    )
}

export default User;