import { useState } from "react";
import "./Counter.css"

const Counter = () => {
    const [counter, setCounter] = useState<number>(0);
    return ( 
        <section className="counter">
            <div className="counter-wrapper">
                <button className="counter-btn" onClick={() => setCounter(counter + 1)}>+</button>
                <p className="counter-output">{counter}</p>
                <button className="counter-btn" onClick={() => setCounter(counter -1)}>-</button>
                <div className="reset-wrapper">
                    <button className="reset-btn" onClick={() => setCounter(0)}>Reset</button>
                </div>
            </div>
        </section>
     );
}
 
export default Counter;