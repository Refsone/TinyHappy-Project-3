import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Access from '../onboarding/Access'
import CardContacts from '../share/CardContacts'
import CardMembers from '../family/CardMembers'
import Connexion from '../onboarding/Connexion'
import CreateFamily from '../family/create/CreateFamily'
import CreateMoments from '../moments/createMoments/CreateMoments'
import DisplaySettings from '../menu/DisplaySettings'
import ModifySettings from '../menu/ModifySettings'
import Post from '../moments/Posts'
import SignUp from '../onboarding/SignUp'

const routes = (props) => {
  return (
    <Switch>
      <Route exact path='/' component={Access} />
      <Route exact path='/family' component={CardMembers} />
      <Route path='/family/create' component={CreateFamily} />
      <Route exact path='/moments' component={Post} />
      <Route path='/moments/favoris' component={Post} />
      <Route path='/moments/create/quote' component={CreateMoments} />
      <Route path='/moments/create/milestone' component={CreateMoments} />
      <Route path='/onboarding/login' component={Connexion} />
      <Route path='/onboarding/signup' component={SignUp} />
      <Route exact path='/settings' component={DisplaySettings} />
      <Route path='/settings/modify/email' component={ModifySettings} />
      <Route path='/settings/modify/password' component={ModifySettings} />
      <Route exact path='/share' component={CardContacts} />
    </Switch>
  )
}

export default routes
