import '../../layouts/Host/index.css';

/* Ce composant représente le container ou est affiché l'identité du propriétaire du logement. */

function Host(props) {
    const host = props.host;
    const nameSplited = host.name.split(' ')
    return (
        <div className="host">
            <img src={host.picture} alt={host.name}/>
            <div>
                {nameSplited.map((name) => (
                    <p key={nameSplited.indexOf(name)}>{name}</p>
                ))}
            </div>
        </div>
    );
}

export default Host;