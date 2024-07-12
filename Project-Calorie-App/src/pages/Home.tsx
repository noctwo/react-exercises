import Blogs from "../components/Blogs/Blogs";
import Calculator from "../components/Calculator/Calculator";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import Hero from "../components/Hero/Hero";

const Home = () => {
    return ( 
        <>
        <Header/>
        <Hero />
        <Blogs />
        <Calculator />
        <Footer />
        </>
    );
}

export default Home;