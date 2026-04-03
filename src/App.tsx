import './App.css'
import { MyHeader } from './assets/MyHeader'
import { Presentation } from './presentation/Presentation'
import { ProjectSection } from './projects/ProjectSection'
import { ContactSection } from './contact/ContactSection'
import { MyFooter } from './assets/MyFooter'

function App() {

  return (
    <>
      <div className='min-h-[800px] flex flex-col'>
        <MyHeader/>
        <div className='container max-w-7xl mx-auto'>
            <Presentation/>
            <ProjectSection/>
            <ContactSection/>
        </div>
        <MyFooter/>
      </div>
    </>
  )
}

export default App
