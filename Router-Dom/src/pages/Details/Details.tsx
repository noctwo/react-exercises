import { useEffect, useState } from "react";
import ICars from "../../Contracts/ICars";
import data from "../../assets/data/data.json"
import { useParams } from "react-router-dom";
import "./Details.css"


const Details = () => {

    const [allCars, setAllCars] = useState<ICars[] | null>(null);
    const [filteredCar, setFilteredCar] = useState<ICars | null>(null);

    const { carId } = useParams<{carId?: string}>()

    useEffect(() => {
        setAllCars(data);
    }, [])

    useEffect(() => {
        if (allCars && carId) {
            const matchingCar = allCars.find((item) => item.id === Number(carId))
            setFilteredCar(matchingCar !== undefined ? matchingCar : null)
        }
    }, [carId, allCars])



    return ( 
    
    <div className="details-wrapper">
        <p>{filteredCar?.CarMake}</p>
        <p>{filteredCar?.carModel}</p>
        <p>{filteredCar?.CarYear}</p>
    </div> );
}

export default Details;





