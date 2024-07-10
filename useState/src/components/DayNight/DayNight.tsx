import "./DayNight.css"
import { useState } from "react";


const DayNight = () => {

    const [night, setNight] = useState<boolean>(false);

    return ( 
    <section className={`${night && "day"}`}>
        <h2>{night ? "day" : "night"}</h2>
        <button onClick={() => setNight((night) => !night)}>Change to {night ? "night" : "day"}</button>
    </section> );
}

export default DayNight;