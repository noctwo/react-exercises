import Counter from "../components/Counter/Counter";
import DayNight from "../components/DayNight/DayNight";
import Faq from "../components/FAQ/Faq";
import InputForm from "../components/InputForm/InputForm";
const Home = () => {
    return ( 
        <>
       <h1>Hallo</h1> 
       <InputForm />
       <hr></hr>
       <Counter />
       <hr></hr>
       <Faq />
       <hr></hr>
       <DayNight />
        </>
     );
}

export default Home;