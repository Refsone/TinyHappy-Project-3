import React from 'react'
import CardMembers from './components/family/CardMembers'
import Access from './components/onboarding/Access'
import MomentNavbar from './components/moments/MomentNavbar'
import Logo from './components/commons/header/LogoHeader'
import Navbar from 'src/components/commons/footer/Navbar'
import CardContacts from './components/share/CardContacts'
import SignUp from './components/onboarding/SignUp'

import './App.css'
import '../src/components/commons/Fonts.css'

function App () {
  return (
    <div className='App'>
      <CardMembers />
      <Access />
      <MomentNavbar />
      <CardContacts />
      <SignUp />
      <Logo />
      <Navbar />
    </div>
  )
}

export default App
