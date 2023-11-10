import Banner from '../../components/Banner';
import Collapse from '../../components/Collapse';

import backgroundImage from '../../assets/background-2.png';

import '../../layouts/About/index.css';

/* Ce composant représente la page 'A propos'. */
function About() {

    const picture = {
        source: backgroundImage,
        description: "Arrière-plan"
    }

    return (
        <section className="about">
            <Banner picture={picture}></Banner>
            <div className='about-collapse-container'>
                <Collapse title="Fiabilité">
                    <p>
                        Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes.
                    </p>
                </Collapse>
                <Collapse title="Respect">
                    <p>
                        La bienveillance fait partie des valeurs fondatrice de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.
                    </p>
                </Collapse>
                <Collapse title="Service">
                    <p>
                        La bienveillance fait partie des valeurs fondatrice de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.
                    </p>
                </Collapse>
                <Collapse title="Sécurité">
                    <p>
                        La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurtié établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet de à nos équipes de vérifier que les standarts sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.
                    </p>
                </Collapse>
            </div>
        </section>
    );
}

export default About;