import React from 'react'
import './App.css'
import '../src/components/commons/Fonts.css'
import { Switch, Route } from 'react-router-dom'
import Access from '../src/components/onboarding/Access'
import SignUp from '../src/components/onboarding/SignUp'
import Connexion from '../src/components/onboarding/Connexion'
import Post from '../src/components/moments/Posts'
import CreateMoments from '../src/components/moments/createMoments/CreateMoments'

function App () {
  return (
    <div className='App'>
      <Switch>
        <Route exact path='/' component={Access} />
        <Route path='/sign-up' component={SignUp} />
        <Route path='/connect' component={Connexion} />
        <Route exact path='/moments' component={Post} />
        <Route path='/moments/create/quote' component={CreateMoments} />
        <Route path='/moments/create/milestone' component={CreateMoments} />
        {/* <CreateFamily /> */}
      </Switch>
    </div>
  )
}

export default App
