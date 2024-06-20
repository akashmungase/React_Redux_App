import { useLocation } from "react-router-dom";

function UseLocation() {

    const loaction = useLocation();
    console.log('loaction', loaction);
    
    return (
        <div>
            <h4>useLocation Hook</h4>
        </div>
    )
}

export default UseLocation;