import { Link } from "react-router-dom";

function Page404() {
    return(
        <div>
            <h4>404 Page Not Fount</h4>
            <p>This Page URL is not avilable</p>
            <Link to={'/'}>Go To Home</Link>
        </div>
    )
}

export default Page404;