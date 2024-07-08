import "./Cards.css"

const Cards = () => {
    return (
        <section className="cards-wrapper">
            <div className ="card">
                <div className="card-img">
                <img src="/card-01.jpg"></img>
                </div>
                <div className="card-text">
                    <h3>Lorem ipsum dolor sit amet.</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo dolorum, sequi doloremque temporibus minus cupiditate?</p>
                </div>
            </div>
            <div className ="card">
                <div className="card-img">
                <img src="/card-02.jpg"></img>
                </div>
                <div className="card-text">
                    <h3>Lorem ipsum dolor sit amet consectetur adipisicing.</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae, officia?</p>
                </div>
            </div>
            <div className ="card">
                <div className="card-img">
                <img src="/card-03.jpg"></img>
                </div>
                <div className="card-text">
                    <h3>Lorem ipsum dolor</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora, accusantium ut! Quos assumenda praesentium sapiente deleniti cumque ratione odio numquam.</p>
                </div>
            </div>
        </section>
    );
}

export default Cards;