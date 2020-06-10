import React from 'react'
import './App.css'
// import Access from './components/onboarding/Access'
import CreateMoment from './components/moments/CreateMoments'
import Logo from './components/commons/header/LogoHeader'

import CardContacts from './components/share/CardContacts'
import SignUp from './components/onboarding/SignUp'
import Navbar from './components/commons/footer/Navbar'

import '../src/components/commons/Fonts.css'

function App () {
  return (
    <div className='App'>
      <CreateMoment />
      <Logo />
      <CardContacts />
      <SignUp />
      <Navbar />
    </div>
  )
}

export default App
