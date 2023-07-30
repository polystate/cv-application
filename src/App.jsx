import {useState} from 'react';
import Section from "./components/Section"
import { general, education, experience } from "./generalData"
import './styles/App.css'

function App() {
  const [allFormsComplete, setAllFormsComplete] = useState(false);
  const [isGeneralComplete, setGeneralComplete] = useState(false);
  const [isEducationComplete, setEducationComplete] = useState(false);
  const [isExperienceComplete, setExperienceComplete] = useState(false);

  return (
    <>
    <header>
      <h1>CV Generator</h1>
    </header>
    <main>
        {
          (!allFormsComplete) ? (
            <>
              <Section sectionName={general} isComplete={isGeneralComplete} setComplete={setGeneralComplete}/>
              <Section sectionName={education} isComplete={isEducationComplete} setComplete={setEducationComplete}/>
              <Section sectionName={experience} isComplete={isExperienceComplete} setComplete={setExperienceComplete}/>
            </>
          )  : null
        }
    </main>
    </>
  )
}

export default App
