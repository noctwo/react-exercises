import "./CardItem.css"

type Animal = {
    name: string;
    species: string;
    habitat: string;
    lifespan: number;
    diet: string;
    funFacts: string[];
    emoji: string;
};



const CardItem:React.FC<Animal> = (props) => {
    return ( 
        <div className="card">
            <p className="card-emoji">
                {props.emoji}
            </p>
            <h3>{props.name}</h3>
            <h4>{props.species}</h4>
            <p className="card-habitat">
                {props.habitat}
            </p>
            <p className="card-diet">
                {props.diet}
            </p>
            <p className="card-lifespan">
                {props.lifespan}
            </p>
            <div className="card-funfacts">
                <ul>
                    <li>{props.funFacts[0]}</li>
                    <li>{props.funFacts[1]}</li>
                    <li>{props.funFacts[2]}</li>
                </ul>
                
            </div>
        </div>
     );
}

export default CardItem
export type {Animal}