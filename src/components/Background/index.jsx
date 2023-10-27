import '../../layouts/Background/index.css';

/* Ce composant représente le rectangle avec un arrière-plan sur la pae d'accueil et sur la page A propos. */
function Background(props) {
    
    const picture = props.picture;

    return (
        <div className="background">
            <img src={picture.source} alt={picture.description}/>
            {props.children}
        </div>
    );
}

export default Background;