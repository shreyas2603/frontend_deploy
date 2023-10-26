import {Link} from "react-router-dom";
function Nav()
{
    return(
        <nav class="navbar">
            <Link to="/" class="navbar-brand">CRUD operations</Link>
            <div class="nav">
                <Link to="/create-student" class="nav-link">Create student</Link>
                <Link to="/student-list" class="nav-link">Student List</Link>
            </div>
        </nav>
    )
}
export default Nav;
