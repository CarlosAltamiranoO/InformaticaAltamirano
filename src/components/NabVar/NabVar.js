import './NabVar.css';
import CartWidget from '../CartWidget/CartWidget'; 
function NabVar() {
    return (
        <nav className = "nabVar">
            <a className = "logo" href="#">{/* <ing src = "" className = "logo" alt = "logo"/> ver como se hace! */} Logo </a>
            <ul className = "nav_menu">
                <li className = "nav_item">
                    <a className = "nav_link" href="#">INICIO</a>
                </li>
                <li className = "nav_item">
                    <CartWidget/>
                </li>
                <li className = "nav_item">
                    <a className = "nav_link" href="#">QUIENES SOMOS</a>
                </li>
                <li className = "nav_item">
                    <a className = "nav_link" href="#">CONTACTO</a>
                </li>
            </ul>
        </nav>
    )
}
export default NabVar;