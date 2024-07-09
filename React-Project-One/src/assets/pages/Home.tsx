import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import Hero from "../components/Hero/Hero";
import Cards from "../components/Cards/Cards";
import Intro from "../components/Intro/Intro";

const Home = () => {
    return (
        <>
        <Header />
        <Hero />
        <Intro />
        <section className="cards-wrapper">
        <Cards image="/card-01.jpg" title="Lorem ipsum dolor sit amet." text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo dolorum, sequi doloremque temporibus minus cupiditate?" />
        <Cards image="/card-02.jpg" title="Lorem ipsum dolor sit amet consectetur adipisicing." text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae, officia?" />
        <Cards image="/card-03.jpg" title="Lorem ipsum dolor" text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora, accusantium ut! Quos assumenda praesentium sapiente deleniti cumque ratione odio numquam." />
        </section>
        <Footer />
        </>
    );
}

export default Home;