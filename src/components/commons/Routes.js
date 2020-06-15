import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Access from '../onboarding/Access'
import Connexion from '../onboarding/Connexion'
import CreateMoments from '../moments/createMoments/CreateMoments'
// import LostPwd from '../onboarding/LostPwd'
import Post from '../moments/Posts'
import SignUp from '../onboarding/SignUp'

const routes = () => {
  return (
    <Switch>
      <Route exact path='/' component={Access} />
      <Route exact path='/moments' component={Post} />
      <Route path='/moments/create/quote' component={CreateMoments} />
      <Route path='/moments/create/milestone' component={CreateMoments} />
      <Route path='/onboarding/login' component={Connexion} />
      <Route path='/onboarding/signup' component={SignUp} />
      {/* <Route path='/onboarding/lostpwd' component={LostPwd} /> */}
    </Switch>
  )
}

export default routes
