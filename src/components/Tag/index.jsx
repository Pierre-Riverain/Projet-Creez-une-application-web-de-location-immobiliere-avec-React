import '../../layouts/Tag/index.css';

/* Ce composant représente les rectangles arrondis où sont affichés les tags des logements. */
function Tag(props) {
    const name = props.name;

    return (
        <div className="tag">
            <p>{name}</p>
        </div>
    );
}

export default Tag;