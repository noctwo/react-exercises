import { useContext } from "react";
import "./Home.css"
import { Context } from "../../App";

const Home = () => {

    const [mode, setMode] = useContext(Context);

    const handleModes = () => {
        setMode((set:boolean) => !set)
    }

    return ( 
        <section className={`home-content ${mode && "yellow"}`}>
            <h1>Hello World</h1>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corrupti dignissimos ipsam placeat quae exercitationem adipisci minima quis dolorem similique odit ducimus modi repudiandae fugiat praesentium aut quibusdam quasi, officiis animi velit! Cupiditate sequi illo id eaque tempore eveniet ab, dicta, dolor dolore ut incidunt soluta quos veritatis eius. Alias libero, reiciendis eveniet, aliquam architecto dolor ipsa eos dignissimos earum optio fugiat, nesciunt dolore neque nisi aperiam animi. Nostrum aperiam cum ab molestiae repellendus labore vero, quisquam perferendis velit suscipit illo ipsa dolor commodi. Voluptatibus animi qui excepturi nemo! Quo neque vel suscipit, rem quae beatae doloremque dolore in et dolorum.</p>
            <button onClick={handleModes}>Change Theme</button>
        </section>
    );
}

export default Home;