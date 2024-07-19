import { Link } from "react-router-dom"
import "../styles/NavBar.css"
import "../styles/Components/LangButtons.module.css"
import Logo from "../assets/Vintex.svg"
export default function NavBar(){
    return (
        <div className="nav-bar">
            <div className="nav-logo"><img src={Logo} alt="Web Ventix" /></div>
            <div className="nav-links">
                <Link className={`nav-items ${location.pathname === '/' ? 'active' : ''}`} to="/">Home</Link>
                <Link className={`nav-items ${location.pathname === '/services' ? 'active' : ''}`} to="/services">Services</Link>
                <Link className={`nav-items ${location.pathname === '/portfolio' ? 'active' : ''}`} to="/portfolio">Portfolio</Link>
                <Link className={`nav-items ${location.pathname === '/contact' ? 'active' : ''}`} to="/contact">Get Called</Link>
            </div>
            <div class="LangButtons">
                <button>En</button>
                <button>Fr</button>
            </div>
        </div>
    );
}