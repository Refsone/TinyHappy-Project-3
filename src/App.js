import React from 'react'

import CardContacts from './components/share/CardContacts'
import SignUp from './components/onboarding/SignUp'
import SideMenu from './components/commons/SideMenu'
import Navbar from './components/commons/footer/Navbar'

import './App.css'
import '../src/components/commons/Fonts.css'

function App () {
  return (
    <div className='App' >
      <CardContacts />
      <SignUp />
      <SideMenu />
      <Navbar />
    </div>
  )
}

export default App
