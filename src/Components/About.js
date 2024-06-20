import { Link } from "react-router-dom";

function About() {
    return (
        <div>
            <h4>About Component</h4>
            <p>This is Home Page of our Project</p>
            <p>We are learning react Link</p>
            <Link to={'/'}>Go To Home</Link>
            <li><Link to={'/user/akash'}>Akash Page </Link></li>
            <li><Link to={'/user/peter'}>Peter Page </Link></li>
        </div>
    )
}

export default About;