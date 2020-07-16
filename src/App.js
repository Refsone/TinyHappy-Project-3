import React from 'react'

import Routes from './components/commons/Routes'

import './App.css'
import '../src/components/commons/Fonts.css'

localStorage.setItem('toastDura', 3000)
localStorage.setItem('toastPos', 'bottom')

function App (props) {
  return (
    <div className='App'>
      <Routes />
    </div>
  )
}

export default App
