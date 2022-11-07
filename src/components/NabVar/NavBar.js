import './NavBar.css';
import CartWidget from '../CartWidget/CartWidget'; 
import { Link} from "react-router-dom";
function NavBar() {
    return (
        <nav className = "navBar">
            <Link className = "logo" to="/"> Logo </Link>
            <ul className = "nav_menu">
                <li className = "nav_item">
                    <Link className = "nav_link" to="/">INICIO</Link>
                </li>
                
                <li className = "nav_item">
                    <Link className = "nav_link" to="/categoria/gamer">GAMER</Link>
                </li>
                <li className = "nav_item">
                    <Link className = "nav_link" to="/categoria/hogar">HOGAR</Link>
                </li>
                <li className = "nav_item">
                    <Link className = "nav_link" to="/categoria/oficina">OFICINA</Link>
                </li>
                <li className = "nav_item">
                <Link to="/cart"><CartWidget/></Link>
                </li>
            </ul>
        </nav>
    )
}
export default NavBar;