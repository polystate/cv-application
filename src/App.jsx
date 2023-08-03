import { useState, useEffect } from 'react';
import Section from "./components/Section";
import Generator from './components/Generator';
import { general, education, experience } from "./generalData";
import './styles/App.css';

function App() {
  const [allFormsComplete, setAllFormsComplete] = useState(false);
  const [isGeneralComplete, setGeneralComplete] = useState(false);
  const [isEducationComplete, setEducationComplete] = useState(false);
  const [isExperienceComplete, setExperienceComplete] = useState(false);
  const [formData, setFormData] = useState({});

  useEffect(() => {
    if(isGeneralComplete && isEducationComplete && isExperienceComplete){
      setAllFormsComplete(true);
    } else setAllFormsComplete(false);
  }, [isGeneralComplete, isEducationComplete, isExperienceComplete])

  return (
    <>
    <header>
      <h1>CV Generator</h1>
    </header>
    <main>
    <form>
        {
          (!allFormsComplete) ? (
            <>
              <Section sectionName={general} isComplete={isGeneralComplete} setComplete={setGeneralComplete} onSectionComplete={(data => setFormData((prev) => ({...prev, general: data})))}/>
              <Section sectionName={education} isComplete={isEducationComplete} setComplete={setEducationComplete} onSectionComplete={(data => setFormData((prev) => ({...prev, education: data})))}/>
              <Section sectionName={experience} isComplete={isExperienceComplete} setComplete={setExperienceComplete} onSectionComplete={(data => setFormData((prev) => ({...prev, experience: data})))}/>
            </>
          )  : <Generator formData={formData}/>
        }
        </form>
    </main>
    </>
  )
}

export default App
