import backgroundImage from '../../assets/background.png';
import Background from '../../components/Background';
import Gallery from '../../components/Gallery';
import '../../layouts/Home/index.css';

/* Ce composant représente la page d'accueil du site. */
function Home() {
    const picture = {
        source: backgroundImage,
        description: "Arrière-plan"
    }
    return (
        <section className="home-section">
            <Background picture={picture}>
                <h1>Chez vous, partout et ailleurs</h1>
            </Background>
            <Gallery/>
        </section>
    );
}

export default Home;