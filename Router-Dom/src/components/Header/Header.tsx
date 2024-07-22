import { Link } from "react-router-dom";
import "./Header.css"

const Header = () => {
    return (  
        <header>
            <h1>SuperCarlist</h1>
            <Link to={`/`}>Home</Link>
        </header>
    );
}

export default Header;


