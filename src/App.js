import React from 'react'
import CardMembers from './components/family/CardMembers'
import './App.css'
// import Access from './components/onboarding/Access'
// import MomentNavbar from './components/moments/MomentNavbar'
import Logo from './components/commons/header/LogoHeader'


import Navbar from 'src/components/commons/footer/Navbar'

import '../src/components/commons/Fonts.css'

function App () {
  return (
    <div className='App'>
      <CardMembers />
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
