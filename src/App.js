import React from 'react'
import './App.css'
// import Access from './components/onboarding/Access'
// import MomentNavbar from './components/moments/MomentNavbar'
import Logo from './components/commons/header/LogoHeader'

import CardContacts from './components/share/CardContacts'
import SignUp from './components/onboarding/SignUp'
import Navbar from './components/commons/footer/Navbar'

import '../src/components/commons/Fonts.css'

function App () {
  return (
    <div className='App'>
      {/* <Access /> */}
      {/* <MomentNavbar /> */}
      <Logo />
      <CardContacts />
      <SignUp />
      <Navbar />
    </div>
  )
}

export default App
