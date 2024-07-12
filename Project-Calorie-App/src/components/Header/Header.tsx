import "./Header.css"

const Header = () => {
    return ( 
        <header>
            <div className="header-logo-wrapper">
                <img src="/img/Logo.png"></img>
            </div>
            <div className="nav-right">
            <nav>
                <a href="#">Home</a>
                <a href="#">About</a>
                <a href="#">Team</a>
                <a href="#">Process</a>
                <a href="#">Pricing</a>
                <a href="#">Blog</a>
            </nav>
            <button className="btn contact-btn">Contact Us</button>
            </div>
        </header>
    );
}

export default Header;