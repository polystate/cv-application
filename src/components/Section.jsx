import { useState, useEffect } from "react";
import InputField from './InputField';
import ButtonContainer from './ButtonContainer';
import ProgressBar from './ProgressBar';
import GreenCheckMark from './GreenCheckMark';
import "../styles/Section.css";

function Section({ sectionName }){
    const [inputValues, setInputValues] = useState({});
    const [progress, setProgress] = useState(0);
    const [isAnyInputFocused, setIsAnyInputFocused] = useState(false);
    const inputHandler = (key, e) => {
        const inputValue = e.target.value;
        setInputValues((prev) => ({ ...prev, [key]: inputValue}))
    }
    const handleFocusChange = (focused) => setIsAnyInputFocused(focused)
    const currentProgressBar = () => {
        const totalInputs = Object.keys(sectionName).length - 1;
        const completedInputs = Object.values(inputValues).filter(Boolean).length;
        const progressPercent = (completedInputs / totalInputs) * 100;
        return progressPercent;
    }
        
    useEffect(() => {
        const progressPercent = currentProgressBar();
        setProgress(progressPercent);
      }, [inputValues, sectionName, isAnyInputFocused]);

    return(
        <section>
            <h2>{sectionName["Title"]}</h2>
            {currentProgressBar() === 100 && !isAnyInputFocused  ? <GreenCheckMark /> : <ProgressBar Progress={progress} />}
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



 