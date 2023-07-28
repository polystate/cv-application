import { useState, useEffect } from "react";
import InputField from './InputField';
import ButtonContainer from './ButtonContainer';
import ProgressBar from './ProgressBar';
import "../styles/Section.css";

function Section({ sectionName }){
    const [inputValues, setInputValues] = useState({});
    const [progress, setProgress] = useState(0);
    const [isAnyInputFocused, setIsAnyInputFocused] = useState(false);
    const inputHandler = (key, e) => {
        const inputValue = e.target.value;
        setInputValues((prev) => ({ ...prev, [key]: inputValue}))
    }
    const handleFocusChange = (focused) => {
        console.log(focused);
        setIsAnyInputFocused(focused);
    }
    useEffect(() => {
        const totalInputs = Object.keys(sectionName).length - 1;
        const completedInputs = Object.values(inputValues).filter(Boolean).length;
        const progressPercent = (completedInputs / totalInputs) * 100;
        if(progressPercent === 100){
            console.log("Finished");
        }
        setProgress(progressPercent);
      }, [inputValues, sectionName]);
    return(
        <section>
            <h2>{sectionName["Title"]}</h2>
            <ProgressBar Progress={progress} />
            {Object.entries(sectionName).map(([key, value], index) => {
                if(key === "Title") return null;
                return(
                    <InputField className="field" key={key} placeholder={key} onChange={(e) => inputHandler(key, e)} onFocusChange={handleFocusChange}/>
                );
            })}
            <ButtonContainer />
        </section>
    )
}

export default Section;



 