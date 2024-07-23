import { Link } from "react-router-dom";
import "./Header.css"

const Header = () => {
    return ( 
        <header>
            <h1>Super Fake <br/> REACT API Store</h1>
            <nav>
                <Link to="/">Home</Link>
            </nav>
        </header>
     );
}

export default Header;