import './App.css'
import { MyHeader } from './assets/MyHeader'
import { Education } from './education/Education'
import { useAuth } from './hooks/useAuth'
import { Presentation } from './presentation/Presentation'

function App() {

  useAuth();

  return (
      <div className='container max-w-7xl mx-auto'>
          <MyHeader/>
          <Presentation/>
          <Education/>
      </div>
  )
}

export default App
