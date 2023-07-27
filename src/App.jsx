import { useState } from 'react'
import Section from "./components/Section"
import { general, education, experience } from "./generalData"
import './styles/App.css'

function App() {
  return (
    <>
    <header>
      <h1>CV Generator</h1>
    </header>
    <main>
      <form>
        <Section sectionName={general}/>
        <Section sectionName={education}/>
        <Section sectionName={experience}/>
      </form>
    </main>
    </>
  )
}

export default App
