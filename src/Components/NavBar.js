import { Link, NavLink } from "react-router-dom";

function NavBar() {
    return (
        <div>
            {/* <h4>NavBar Component</h4> */}
            <ul className="nav-bar">
                <li><NavLink className="nav-link" to={'/'}>Home</NavLink></li>
                <li><NavLink className="nav-link" to={'/about'}>About</NavLink></li>
                <li><NavLink className="nav-link" to={'/contact'}>Contact</NavLink></li>
                <li><NavLink className="nav-link" to={'/user'}>User</NavLink></li>
                <li><NavLink className="nav-link" to={'/filter'}>Filter</NavLink></li>
                <li><NavLink className="nav-link" to={'/login'}>Login</NavLink></li>
            </ul>
        </div>
    )
}

export default NavBar;