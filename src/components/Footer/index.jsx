import logo from '../../assets/logo-monochrome.svg';
import '../../layouts/Footer/index.css';

/* Ce composant représente le pied de page. */
function Footer() {
    return (
        <footer>
            <img src={logo} alt='Logo de Kasa'/>
            <p>© 2020 Kasa. All rights reserved.</p>
        </footer>
    );
}

export default Footer;