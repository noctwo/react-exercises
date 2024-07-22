import { Link } from "react-router-dom";
import ICars from "../../Contracts/ICars";
import "./Item.css"

interface CarItemProps {
    car: ICars;
}

const Item: React.FC<CarItemProps> = (props) => {


    return ( 
        <div className="item-card">
            <p>CarMake: {props.car.CarMake}</p>
            <p>CarModel: {props.car.carModel}</p>
            <p>CarYear: {props.car.CarYear}</p>
            <Link to={`/${props.car.id}`}>view more...</Link>
        </div>
     );
}

export default Item;