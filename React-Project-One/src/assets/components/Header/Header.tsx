import "./Header.css"

const Header = () => {
    return (
        <header>
            <div className="site-logo">
                <img src="/logoipsum-247.svg"></img>
            </div>
            <nav>
                <a href="#">Home</a>
                <a href="#">About</a>
                <a href="#">Projects</a>
            </nav>
        </header>
    );
}

export default Header;