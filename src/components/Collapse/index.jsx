import { useState, useEffect, useRef } from 'react';

import arrow from '../../assets/arrow.svg';
import '../../layouts/Collapse/index.css';

/* Ce composant représente le composant 'Collapse'. */
function Collapse(props) {

    const [isOpen, setOpen] = useState(false);

    const title = props.title;
    const children = props.children;

    return (
        <div className={isOpen ? "collapse collapse-open" : "collapse"}>
            <div className="collapse-top-bar" onClick={() => {
                setOpen(!isOpen);
                }}>
                <p>{title}</p>
                <img src={arrow} alt='Flèche' className="collapse-arrow"/>
            </div>
            <div className="collapse-content">
                {children}
            </div>
        </div>
    );
}

export default Collapse;

/* Cette fonction sert pour exécuter les animations lorsque l'utilisateur clique sur */
/* function animate(element, animation, direction) {
    element.style.animation = `${animation} 250ms linear 0 1 ${direction} both play`;
} */
