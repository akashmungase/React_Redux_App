import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function ProtectedRoute(props) {

    const { Component } = props;

    const navigate = useNavigate();

    useEffect(() => {
        let login = localStorage.getItem('login');
        if (!login) {
            navigate('/login')
        }
    })
    
    return (
        <div>
            {/* <h4>Protected Routes in React</h4> */}
            <Component />
        </div>
    )
}

export default ProtectedRoute;