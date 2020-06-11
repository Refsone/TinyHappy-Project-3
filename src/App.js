import React from 'react'

import Access from './components/onboarding/Access'
import CardContacts from './components/share/CardContacts'
import Connexion from './components/onboarding/Connexion'
import CreateFamily from './components/family/CreateFamily'
import CreateMoment from './components/moments/CreateMoments'
import LogoHeader from './components/commons/header/LogoHeader'
import Navbar from './components/commons/footer/Navbar'
import NoMoment from './components/moments/NoMoment'
import Post from './components/moments/Posts'
import SideMenu from './components/commons/SideMenu'
import SignUp from './components/onboarding/SignUp'

import './App.css'
import '../src/components/commons/Fonts.css'

function App () {
  return (
    <div className='App'>
      <SideMenu />
      <LogoHeader />
      <Access />
      <Connexion />
      <SignUp />
      <CreateFamily />
      <NoMoment />
      <Post />
      <CreateMoment />
      <CardContacts />
      <Navbar />
    </div>
  )
}

export default App
