import {NavLink} from "react-router-dom";
import "./Navbar.css"
 
function NavBar(){
    return (
      <nav>
        <a href="#">Home</a>
        
        <NavLink to="/" className="nav-link">
        Home
        </NavLink>
        <NavLink to="/about" className="nav-link">
        About
        </NavLink>
        <NavLink to="/login" classNmae="nav-link">
        Login
        </NavLink>
      </nav>
    )
}
export default NavBar;
// note that you can add the navBar component in each of your components to enable easy navigation.
