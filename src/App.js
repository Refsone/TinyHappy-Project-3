import React from 'react'

import SignUp from './components/onboarding/SignUp'

import SideMenu from './components/commons/SideMenu'
import Navbar from './components/commons/footer/Navbar'


import './App.css'

function App () {
  return (

    <div className='App'>
    
      <SignUp />
      <SideMenu />
      <Navbar />
    
    </div>
  )
}

export default App
