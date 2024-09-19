import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { MyHeader } from './assets/MyHeader'
import { Presentation } from './presentation/Presentation'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <div className='container max-w-7xl mx-auto'>
      <MyHeader/>
      <Presentation/>
    </div>
  </React.StrictMode>,
)
