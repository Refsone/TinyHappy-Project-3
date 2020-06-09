import React from 'react'

import './App.css'
// import Access from './components/onboarding/Access'
import MomentNavbar from './components/moments/MomentNavbar'
import Navbar from './components/commons/footer/Navbar'

function App () {
  return (
    <div className='App'>
      {/* <Access /> */}
      <MomentNavbar />
      <Navbar />
    </div>
  )
}

export default App
