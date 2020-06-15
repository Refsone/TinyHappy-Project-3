import React from 'react'

import Routes from './components/commons/Routes'

import './App.css'
import '../src/components/commons/Fonts.css'
import SelectContacts from './components/share/SelectContacts'

function App () {
  return (
    <div className='App'>
      <SelectContacts />
      <Routes />
    </div>
  )
}

export default App
