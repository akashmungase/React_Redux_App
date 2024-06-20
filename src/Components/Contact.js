import { Link, NavLink, Outlet } from "react-router-dom";

function Contact() {
    return (
        <div>
            <h4>Contact Page</h4>
            <p>Nested Routing </p>
            <ul className="nav-bar">
                <li className="nav-link"><NavLink to="channel">Channel</NavLink></li>
                <li className="nav-link"><NavLink to="company">Company</NavLink></li>
                <li className="nav-link"><NavLink to="others">Other</NavLink></li>
            </ul>
            <Outlet />
        </div>
    )
}

export default Contact;