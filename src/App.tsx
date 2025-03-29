import { useSelector } from 'react-redux'
import './App.css'
import { MyHeader } from './assets/MyHeader'
import { EducationSection } from './education/EducationSection'
import { useAuth } from './hooks/useAuth'
import { Presentation } from './presentation/Presentation'
import { ProjectSection } from './projects/ProjectSection'
import { RootState } from './store/store'
import { TechnologySection } from './technologies/TechnologySection'
import { ContactSection } from './contact/ContactSection'

function App() {

  useAuth();
  const { status, role } = useSelector((state: RootState) => state.auth);

  return (
    <>
      <div className='min-h-[800px] flex flex-col'>
        <MyHeader/>
        <div className='container max-w-7xl mx-auto'>
            <MyHeader/>
            <Presentation/>
            <EducationSection/>
            <ProjectSection/>
            {status === 'auth' && role.includes('ROLE_ADMIN') && <TechnologySection/>}
            <ContactSection/>
        </div>
      </div>
    </>
  )
}

export default App
