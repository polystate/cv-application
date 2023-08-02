import { useState, useEffect } from 'react';
import Section from "./components/Section"
import { general, education, experience } from "./generalData"
import './styles/App.css'

function App() {
  const [allFormsComplete, setAllFormsComplete] = useState(false);
  const [isGeneralComplete, setGeneralComplete] = useState(false);
  const [isEducationComplete, setEducationComplete] = useState(false);
  const [isExperienceComplete, setExperienceComplete] = useState(false);

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
              <Section sectionName={general} isComplete={isGeneralComplete} setComplete={setGeneralComplete}/>
              <Section sectionName={education} isComplete={isEducationComplete} setComplete={setEducationComplete}/>
              <Section sectionName={experience} isComplete={isExperienceComplete} setComplete={setExperienceComplete}/>
            </>
          )  : null
        }
        </form>
    </main>
    </>
  )
}

export default App
