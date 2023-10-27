
import '../../layouts/Thumb/index.css';

/* Ce composant représente un carré qui affiche brièvement un logement. */
function Thumb(props) {
    const accommodation = props.accommodation;
    return (
        <div className='thumb'>
            <img src={accommodation.cover} alt={accommodation.title}/>
            <div></div>
            <h2>{accommodation.title}</h2>
        </div>
    );
}

export default Thumb;