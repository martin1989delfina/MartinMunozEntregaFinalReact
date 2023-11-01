import "./NavBar.css"
import CartWidget from "../CartWdiget/CartWidget"
import { NavLink, Link } from "react-router-dom"


const NavBar = () => {
    return (
        <nav className="NavBar">
            <Link to="/">
            <h3 className="title">Juegos GameOver</h3>
            </Link>
            <div className="Categories">
                <NavLink to={`/category/accion`} className={({ isActive})=> isActive ? "ActiveOption" : "Option"}>Acción</NavLink>
                <NavLink to={`/category/rol`} className={({ isActive})=> isActive ? "ActiveOption" : "Option"}>Rol</NavLink>
                <NavLink to={`/category/estrategia`} className={({ isActive})=> isActive ? "ActiveOption" : "Option"}>Estrategía</NavLink>
            </div>
            <CartWidget />
        </nav>
    )
}

export default NavBar