import { useDatas } from '../../utils/hooks';
import Thumb from '../Thumb';
import '../../layouts/Gallery/index.css';

/* Ce composant représente le container qui permet d'afficher la liste des hébergements. */
function Gallery() {
    
    const { datas } = useDatas();
    const listOfAccommodations = datas;
    return (
        <div className='gallery-container'>
            <ul className='gallery'>
                {
                    listOfAccommodations && listOfAccommodations.map(accommodationItem => (
                        <li key={accommodationItem.id}>
                            <Thumb accommodation={accommodationItem}/>
                        </li>
                    ))
                }
            </ul>
        </div>
    );
}

export default Gallery;