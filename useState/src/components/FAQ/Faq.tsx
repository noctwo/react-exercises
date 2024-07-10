import { useState } from "react"
import "./Faq.css"

const Faq = () => {
    
    const [shortFaq, setShortFaq] = useState<string>("");
    const [longFaq, setLongFaq] = useState<string>("");
    
    const shortFaqContent = () => {
        setShortFaq("Fast learning Curve");
    }

    const clearShortFaqContent = () => {
        setShortFaq("");
    }

    const longFaqContent = () => {
        setLongFaq(`React is very a simple and lightweight library that only deals with the view layer. It is not a beast like other MV* frameworks such as Angular or Ember. Any Javascript developer can understand the basics and start developing an awesome web application after only a couple of days reading tutorial.
        As the React guide says ‘Thinking in React’ may be a little different than you used to since it brings a new approach to the table, but it will become much easier and natural as you gain experience with it.`)
    }

    const clearLongFaqContent = () => {
        setLongFaq("");
    }


    return ( 

        <section className="Faq">
            <h3>Why is React great?</h3>
            <button onClick={() => shortFaqContent()} onDoubleClick={clearShortFaqContent}>{shortFaq?"-":"+"}</button>
            <hr></hr>
            <p>{shortFaq}</p>
            <button onClick={() => longFaqContent()} onDoubleClick={clearLongFaqContent}>{longFaq?"-":"+"}</button>
            <p>{longFaq}</p>
        </section>
     );
}
 
export default Faq;