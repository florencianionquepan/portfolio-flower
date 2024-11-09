import './App.css'
import { MyHeader } from './assets/MyHeader'
import { EducationSection } from './education/EducationSection'
import { useAuth } from './hooks/useAuth'
import { Presentation } from './presentation/Presentation'
import { ProjectSection } from './projects/ProjectSection'
import { TechnologySection } from './technologies/TechnologySection'

function App() {

  useAuth();

  return (
      <div className='container max-w-7xl mx-auto'>
          <MyHeader/>
          <Presentation/>
          <EducationSection/>
          <ProjectSection/>
          <TechnologySection/>
      </div>
  )
}

export default App
