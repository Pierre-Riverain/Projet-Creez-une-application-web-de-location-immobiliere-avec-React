import backgroundImage from '../../assets/background.png';
import Banner from '../../components/Banner';
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
            <Banner picture={picture}>
                <h1>Chez vous, partout et ailleurs</h1>
            </Banner>
            <Gallery/>
        </section>
    );
}

export default Home;