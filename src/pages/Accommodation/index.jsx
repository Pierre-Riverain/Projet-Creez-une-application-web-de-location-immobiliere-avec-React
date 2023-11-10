import { useParams } from 'react-router-dom';
import '../../layouts/Accommodation/index.css';
import Slider from '../../components/Slider';
import { useContext } from 'react';
import { DatasContext } from '../../utils/context';
import Tag from '../../components/Tag';
import Host from '../../components/Host';
import Collapse from '../../components/Collapse';
import Rating from '../../components/Rating';
import Error from '../Error';

/* Ce composant correspond à la page des logements. */
function Accommodation() {
    const {idAccommodation} = useParams();
    const {getAccommodation} = useContext(DatasContext);
    const accommodation = getAccommodation(idAccommodation);

    console.log(accommodation);
    if (accommodation !== undefined) {
        return (
            <div className="accommodation">
                <Slider listOfPictures={accommodation.pictures}/>
                <div className="accommodation-informations">
                    <div className="accommodation-informations-title-location">
                        <h1>{accommodation.title}</h1>
                        <h2>{accommodation.location}</h2>
                        <div>
                            {accommodation.tags.map((tag) => (
                                <Tag name={tag} key={tag}/>
                            ))}
                        </div>
                    </div>
                    <div className="accommodation-informations-host-rating">
                        <Host host={accommodation.host}/>
                        <Rating rating={accommodation.rating}/>
                    </div>
                </div>
                <div className="accommodation-collapses">
                    <Collapse title="Description">
                        <p>
                            {accommodation.description}
                        </p>
                    </Collapse>
                    <Collapse title="Équipements">
                        <ul>
                            {
                                accommodation.equipments.map((equipment) => (
                                    <li key={`equipment-${accommodation.equipments.indexOf(equipment)}`}>{equipment}</li>
                                ))
                            }
                        </ul>
                    </Collapse>
                </div>
            </div>
        );
    } else {
        return <Error/>
    }


}

export default Accommodation;