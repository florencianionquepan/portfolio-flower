import { useSelector } from 'react-redux'
import './App.css'
import { MyHeader } from './assets/MyHeader'
import { useAuth } from './hooks/useAuth'
import { Presentation } from './presentation/Presentation'
import { EducationSection } from './education/EducationSection'
import { ProjectSection } from './projects/ProjectSection'
import { RootState } from './store/store'
import { TechnologySection } from './technologies/TechnologySection'
import { ContactSection } from './contact/ContactSection'
import { MyFooter } from './assets/MyFooter'

function App() {

  useAuth();
  const { status, role } = useSelector((state: RootState) => state.auth);

  return (
    <>
      <div className='min-h-[800px] flex flex-col'>
        <MyHeader/>
        <div className='container max-w-7xl mx-auto'>
            <Presentation/>
            <EducationSection/>
            <ProjectSection/>
            {status === 'auth' && Array.isArray(role) && role.includes('ROLE_ADMIN') && <TechnologySection/>}
            <ContactSection/>
        </div>
        <MyFooter/>
      </div>
    </>
  )
}

export default App
