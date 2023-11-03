import { Link } from 'react-router-dom';
import '../../layouts/Error/index.css';

/* Ce composant représente la page d'erreur (404) du site. */
function Error() {

    return (
        <section className="error">
            <h1>404</h1>
            <h2>Oups! La page que vous demandez n'existe pas.</h2>
            <Link to="/" className='linkToMainPage'>Retourner sur la page d'accueil</Link>
        </section>
    );
}

export default Error;