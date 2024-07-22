import { useEffect, useState } from "react";
import ICars from "../../Contracts/ICars";
import data from "../../assets/data/data.json"
import Item from "../Item/Item";
import "./List.css"

const List = () => {
    
    const [carData, setCarData] = useState<ICars[] | null>(null);

    useEffect(() => {
        setCarData(data);
    },[])

    return ( 
        <div className="list-wrapper">
            {carData?.map((item, index) => (
                <Item car={item} key={index} />
            ))}
        </div>
    );
}

export default List;