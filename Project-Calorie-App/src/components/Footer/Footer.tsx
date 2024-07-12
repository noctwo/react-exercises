import "./Footer.css"

const Footer = () => {
    return ( 
        <footer>
            <div className="footer-logo-wrapper">
            <img src="/img/Logo.png"></img>
            </div>
            <div className="nav-center">
            <nav>
                <a href="#">Home</a>
                <a href="#">About</a>
                <a href="#">Team</a>
                <a href="#">Process</a>
                <a href="#">Pricing</a>
                <a href="#">Blog</a>
            </nav>
            </div>
            <div className="back-to-top">
                <span>Go to Top</span>
                <img src="/img/Button.png"></img>
            </div>
        </footer>
     );
}
 
export default Footer;