import {useState} from "react";
import "../styles/Section.css";
import InputField from './InputField';
import ButtonContainer from './ButtonContainer';
import ProgressBar from './ProgressBar';

function Section({ sectionName }){
    const [inputValues, setInputValues] = useState({});
   

    const inputHandler = (key, e) => {
        const inputValue = e.target.value;
        setInputValues((prevValues) => ({ ...prevValues, [key]: inputValue}))
    }
    
      
    return(
        <section>
            <h2>{sectionName["Title"]}</h2>
            <ProgressBar />
            {Object.entries(sectionName).map(([key, value], index) => {
                if(key === "Title") return null;
                return(
                    <InputField className="field" key={key} placeholder={key} onChange={(e) => inputHandler(key, e)} />
                );
            })}
            <ButtonContainer />
        </section>
    )
}

export default Section;



/*if the input field is not empty and not active then pass down that info to progressbar
/*<p>{key}: {inputValues[key] || value}</p> */



 