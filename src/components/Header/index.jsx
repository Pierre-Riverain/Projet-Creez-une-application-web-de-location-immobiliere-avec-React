import { Link } from "react-router-dom";
import logo from '../../assets/logo.svg';
import '../../layouts/Header/index.css';

/* Ce composant représente l'en-tête des pages du site. */
function Header() {
    return (<header>
        <img src={logo} alt="Logo de Kasa"/>
        <nav>
            <Link to="/" className="link">Accueil</Link>
            <Link to="/a-propos" className="link">A propos</Link>
        </nav>
    </header>
    );
}

export default Header;