import "./Footer.css"

const Footer = () => {
    return (
        <footer>
        <div className="site-logo">
            <img src="/logoipsum-247.svg"></img>
        </div>
        <div className="footer-menu">
            <a href="#">Impressum</a>
                <div className="footer-main-menu">
                <a href="#">Home</a>
                <a href="#">About</a>
                <a href="#">Projects</a>
                </div>
            <a href="#">Datenschutz</a>
        </div>
        </footer>
    );
}

export default Footer;