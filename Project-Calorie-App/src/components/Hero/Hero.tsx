import "./Hero.css"

const Hero = () => {
    return ( 
        <section className="hero">
            <div className="hero-img-container">
                <img src="/img/hero.png"></img>
            </div>
            <div className="hero-text-container">
                <div className="hero-claim">
                    <p>Transform your ❤️ Health with</p>
                </div>
                <h1>Personalized Nutrition Coaching</h1>
                <p>Welcome to Nutritionist, your partner in achieving optimal health through personalized nutrition coaching. Our certified nutritionists are here to guide you on your weight loss journey, providing customized plans and ongoing support. Start your transformation today and experience the power of personalized nutrition coaching.</p>
                <div className="hero-btn-container">
                    <button className="btn hero-btn hero-btn-full">Get Started Tody</button>
                    <button className="btn hero-btn hero-btn-empty">Book a Demo</button>
                </div>
            </div>
        </section>
     );
}
 
export default Hero;