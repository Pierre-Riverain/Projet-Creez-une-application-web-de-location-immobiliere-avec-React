
import { Link } from 'react-router-dom';
import '../../layouts/Thumb/index.css';

/* Ce composant représente un carré qui affiche un aperçu du logement. */
function Thumb(props) {
    const accommodation = props.accommodation;
    const index = props.index;
    
    return (
        <Link to={"/hebergement/" + index} className='thumb fill'>
            <img src={accommodation.cover} alt={accommodation.title} className='fill'/>
            <div className='fill'/>
            <h2>{accommodation.title}</h2>
        </Link>
    );
}

export default Thumb;
