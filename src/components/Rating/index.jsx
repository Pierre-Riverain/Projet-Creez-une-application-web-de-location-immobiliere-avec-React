import '../../layouts/Rating/index.css';
import star from '../../assets/star.svg';
import starDisabled from '../../assets/star-disabled.svg';

/* Ce composant permet d'afficher la note attribuée par les locataires à l'hébergement. */
function Rating(props) {
    const rating = props.rating;

    let resultOfCheck = [];

    for (let i = 0; i < rating; i++) {
        resultOfCheck.push(<img src={star} alt={`Etoile n°${i+1} activée.`}/>);
    }

    for(let i = 0; i < (5 - rating); i++) {
        resultOfCheck.push(<img src={starDisabled} alt={`Etoile n°${i+1} désactivée.`}/>);
    }

    return (
        <div className="rating">
            {resultOfCheck}
        </div>
    );
}

export default Rating;