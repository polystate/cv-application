import {useState} from "react";
import "../styles/Section.css";

function Section({ sectionName }){
    const [inputValues, setInputValues] = useState({});

    const inputHandler = (key, e) => {
        const inputValue = e.target.value;
        
        setInputValues((prevValues) => ({ ...prevValues, [key]: inputValue}))
    }

    return(
        <section>
            {Object.entries(sectionName).map(([key, value]) => {
                return(
                    <div key={key} className="card">
                        <p>{key}: {inputValues[key] || value}</p>
                        <input type="text" placeholder={key} onChange={(e) => inputHandler(key,e)} />
                    </div>
                );
            })}
            <button>Submit</button>
            <button>Edit</button>
        </section>
    )
}

export default Section;