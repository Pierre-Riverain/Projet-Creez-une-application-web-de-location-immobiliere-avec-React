import Thumb from '../Thumb';
import '../../layouts/Gallery/index.css';
import { useContext } from 'react';
import { DatasContext } from '../../utils/context';

/* Ce composant représente le container qui permet d'afficher la liste des hébergements. */
function Gallery() {
    
    const {listOfAccommodations} = useContext(DatasContext);
    return (
        <div className='gallery'>
            {
                listOfAccommodations && listOfAccommodations.map(accommodationItem => (
                    <Thumb accommodation={accommodationItem} index={listOfAccommodations.indexOf(accommodationItem)} key={accommodationItem.id} />
                ))
            }
        </div>
    );
}

export default Gallery;