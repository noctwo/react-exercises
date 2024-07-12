import { useState } from "react";
import "./Calculator.css"

const Calculator = () => {

    const [height, setHeight] = useState<number | undefined>();
    const [age, setAge] = useState<number | undefined>();
    const [weight, setWeight] = useState<number | undefined>();
    const [pal, setPal] = useState<number | undefined>();

    const [gender, setGender] = useState<string>("");

    const [result, setResult] = useState<number | null>(null);
    const [grundumsatz, setGrundumsatz] = useState<number | null>(null);

    const handleGenderChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setGender(event.target.value);
    }

    const handleCalculation = () =>{
        const {gesamtumsatz, grundumsatz} = calculation(gender, height, age, weight, pal);
        setResult(gesamtumsatz);
        setGrundumsatz(grundumsatz)
    }

    const getHeight = (event: React.ChangeEvent<HTMLInputElement>) => {
        setHeight(Number(event.target.value));
    }

    const getAge = (event: React.ChangeEvent<HTMLInputElement>) => {
        setAge(Number(event.target.value));
    }

    const getWeight = (event: React.ChangeEvent<HTMLInputElement>) => {
        setWeight(Number(event.target.value));
    }

    const getPal = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setPal(Number(event.target.value));
    }


    function calculation (gender:string, height:number | undefined, age:number | undefined, weight:number | undefined, pal:number | undefined){

        let grundumsatz:number
        let gesamtumsatz:number
        if(gender === "female"){
            console.log("Female")
            grundumsatz = 66.47 +(13.7 * weight!) + (5 * height!) - (6.8 * age!)
            gesamtumsatz = grundumsatz * pal!

            console.log(gesamtumsatz);
            return {gesamtumsatz, grundumsatz};

        }else{
            console.log("Male")
            grundumsatz = 655.1 +(9.6 * weight!) + (1.8 * height!) - (4.7 * age!)
            gesamtumsatz = grundumsatz * pal!

            console.log(gesamtumsatz);
            return {gesamtumsatz, grundumsatz};
        }
    }


    return ( 

        <section className="calculator">
            <div className="calc-heading-wrapper">
            <h2>Test your daily Calorie Requirement</h2>
            <p>To determine your daily calorie requirement, we need some information about your age, gender, weight, height and activity level. Enter this information to calculate your individual requirements.</p>
            </div>
        <div className="calc-input-wrapper">
            <div className="calc-inner-input-wrapper">
            <input type="number" onChange={getHeight} value={height} placeholder="Body Height (cm)"></input>
            <input type="number" onChange={getAge} value={age} placeholder="Age (years)"></input>
            <input type="number" onChange={getWeight} value={weight} placeholder="Weight (Kgs)"></input>
            <select name="pal-select" onChange={getPal} value={pal}>
                <option value="">Tätigkeitslevel wählen</option>
                <option value="0.95">Schlafen</option>
                <option value="1.2">Sitzen / Liegen</option>
                <option value="1.5">Sitzende Tätigkeit</option>
                <option value="1.7">Sitzende Tätigkeit + Stehanteil</option>
                <option value="1.9">Stehende Tätigkeit + Sitzanteil</option>
                <option value="2.2">Körperliche Arbeit</option>
            </select>
            
            <div className="gender-radio-wrapper">
                <input type="radio" name="gender-radio" id="female-radio" value="female" onChange={handleGenderChange}></input>
                <label htmlFor="female-radio">weiblich</label>
                <input type="radio" name="gender-radio" id="male-radio" value="male" onChange={handleGenderChange}></input>
                <label htmlFor="male-radio">männlich</label>
            </div>
            <button className="btn calc-btn" onClick={handleCalculation}>Berechnen</button>
            {result !== null && grundumsatz !== null &&(
                <div className="result">
                    <h4>Grundumsatz {grundumsatz} kcal</h4>
                    <h3>Gesamtumsatz: {result} kcal</h3>
                </div>
            )}
        </div>
        </div>
        </section>
    );
}

export default Calculator;