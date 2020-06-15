import React from 'react'
import Connexion from './components/onboarding/Connexion'

import LogoHeaderMoments from './components/commons/header/LogoHeaderMoments'

import './App.css'
import '../src/components/commons/Fonts.css'

function App () {
  return (
    <div className='App'>
      <Connexion />
      <LogoHeaderMoments />
    </div>
  )
}

export default App
