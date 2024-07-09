import "./Cards.css"

type CardContent = {
    title: string,
    image: string,
    text: string
}

const Cards: React.FC<CardContent> = (props) => {

    return(
        <div className ="card">
                <div className="card-img">
                <img src={props.image}></img>
                </div>
                <div className="card-text">
                    <h3>{props.title}</h3>
                    <p>{props.text}</p>
                </div>
            </div>
    )
}
export default Cards;