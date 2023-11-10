import '../../layouts/Slider/index.css';
import arrowLeft from '../../assets/arrow-left.svg';
import arrowRight from '../../assets/arrow-right.svg';
import { useEffect, useState } from 'react';


/* Ce composant représente le carrousel dans la page présentant les logements plus en détails. */
function Slider(props) {
    const listOfPictures = props.listOfPictures;
    const title = props.title;
    
    const moreThanOnePicture = listOfPictures.length > 1;
    
    const [currentPicture, setCurrentPicture] = useState(0);

    useEffect(() => {
        
    }, [currentPicture])

    return (
        <div className="slider">
            <img src={listOfPictures[currentPicture]} alt={title} className="slider-img" />
            { moreThanOnePicture && 
                <div className="slider-arrow-container">
                    <img src={arrowLeft} alt="Image précédente" className="slider-arrow-left" onClick={() => {
                        if(currentPicture > 0) {
                            setCurrentPicture(currentPicture - 1);
                        } else {
                            setCurrentPicture(listOfPictures.length - 1);
                        }
                    }}/>
                    <img src={arrowRight} alt="Image suivante" className="slider-arrow-right" onClick={() => {
                        if (currentPicture < listOfPictures.length - 1) {
                            setCurrentPicture(currentPicture + 1);
                        } else {
                            setCurrentPicture(0);
                        }
                    }}/>
                </div>
            }
            <p className="slider-number">{currentPicture + 1}/{listOfPictures.length}</p>
        </div>
    );
}

export default Slider;