import { Link } from "react-router-dom";

function Home() {
    return (
        <div>
            <h4>Home Component</h4>
            <p>This is Home Page of our Project</p>
            <p>We are learning react Link</p>
            <Link to={'/about'}>Go To About</Link>
            <br />
            <Link to={'/navigation'}>Go To Navigation Page</Link>
            <br />
            <Link to={'/useLocation'}>Go To UseLocation Page</Link>
        </div>
    )
}

export default Home;