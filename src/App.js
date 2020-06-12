import React from 'react'
import './App.css'
import '../src/components/commons/Fonts.css'
import { Switch, Route } from 'react-router-dom'
import Access from '../src/components/onboarding/Access'
import SignUp from '../src/components/onboarding/SignUp'
import Connexion from '../src/components/onboarding/Connexion'
import Post from '../src/components/moments/Posts'

function App () {
  return (
    <div className='App'>
      <Switch>
        <Route exact path='/' component={Access} />
        <Route path='/sign-up' component={SignUp} />
        <Route path='/connect' component={Connexion} />
        <Route path='/moments' component={Post} />
        {/* <CreateFamily /> */}
      </Switch>
    </div>
  )
}

export default App
