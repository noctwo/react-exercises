import { useState } from "react";

const InputForm = () => {

    const [name, setName] = useState<string>("");
    const [lastName, setLastName] = useState<string>("");
    const [mail, setMail] = useState<string>("");

    const getName = (event: React.ChangeEvent<HTMLInputElement>) => {
        setName(event.target.value);
    }

    const getLastName = (event: React.ChangeEvent<HTMLInputElement>) => {
        setLastName(event.target.value);
    }

    const getMail = (event: React.ChangeEvent<HTMLInputElement>) => {
        setMail(event.target.value);
    }

    return ( 
        <section className="form-wrapper">
        <form>
            <input value={name} onChange={getName} type="text" placeholder="Vorname"></input>
            <input value={lastName} onChange={getLastName} type="text" placeholder="Nachname"></input> 
            <input value={mail} onChange={getMail} type="text" placeholder="E-Mail"></input> 
        </form>
        <div className="form-output">
            <p className="name-output">{name}</p>
            <p className="last-name-output">{lastName}</p>
            <p className="mail-output">{mail}</p>
        </div>
        </section>
     );
}

export default InputForm;