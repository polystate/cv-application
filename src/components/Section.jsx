import { useState, useEffect } from "react";
import InputField from './InputField';
import ButtonContainer from './ButtonContainer';
import ProgressBar from './ProgressBar';
import GreenCheckMark from './GreenCheckMark';
import Preview from "./Preview";
import "../styles/Section.css";

function Section({ sectionName, isComplete, setComplete, onSectionComplete }){
    const [inputValues, setInputValues] = useState({});
    const [progress, setProgress] = useState(0);
    const [isAnyInputFocused, setIsAnyInputFocused] = useState(false);
    const [isSubmitClicked, setIsSubmitClicked] = useState(false);
    const [isEditClicked, setIsEditClicked] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSubmitClicked(true);
        onSectionComplete(inputValues);
    }
    const handleEdit = (e) => {
        e.preventDefault();
        setIsEditClicked(true);
        setIsSubmitClicked(false);
    }
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

        const isSectionComplete = progressPercent === 100 && !isAnyInputFocused && isSubmitClicked;
        setComplete(isSectionComplete);

      }, [inputValues, sectionName, isAnyInputFocused, setComplete, isSubmitClicked]);

    return(
        <section>

            <h2>{sectionName["Title"]} {currentProgressBar() === 100 && !isAnyInputFocused ? <GreenCheckMark /> : null}</h2>

            <div className="progress-container">
            {currentProgressBar() === 100 && !isAnyInputFocused  ? null : <ProgressBar Progress={progress} />}
            </div>

                {Object.entries(sectionName).map(([key, value], index) => {
                    if(key === "Title") return null;
                    const isDisabled =
                    (isComplete && isSubmitClicked) || (progress === 100 && !isAnyInputFocused && isSubmitClicked) && !isEditClicked;

                    return(
                        <InputField className="field" key={key} placeholder={key} onChange={(e) => inputHandler(key, e)} onFocusChange={handleFocusChange} disabled={isDisabled}/>
                    );
                })}
                <ButtonContainer handleSubmit={handleSubmit} handleEdit={handleEdit} />
            
        </section>
    )
}

export default Section;



 