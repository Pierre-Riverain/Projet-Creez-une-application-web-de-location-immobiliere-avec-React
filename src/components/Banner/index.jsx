import '../../layouts/Banner/index.css';

/* Ce composant représente la bannière sur la page d'accueil et sur la page A propos. */
function Banner(props) {
    
    const picture = props.picture;

    return (
        <div className="banner">
            <img src={picture.source} alt={picture.description}/>
            <div className="banner-opacity"></div>
            <div>
                {props.children}
            </div>
        </div>
    );
}

export default Banner;