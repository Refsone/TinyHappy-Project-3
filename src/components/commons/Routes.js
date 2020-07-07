import React from 'react'
import { Switch, Route } from 'react-router-dom'

import AddShareMoment from '../share/AddShareMoment'
import Access from '../onboarding/Access'
import CardContacts from '../share/CardContacts'
import CardMembers from '../family/CardMembers'
import Connexion from '../onboarding/Connexion'
import CreateFamily from '../family/create/CreateFamily'
import CreateMoments from '../moments/createMoments/CreateMoments'
import DisplaySettings from '../menu/DisplaySettings'
import ModifySettings from '../menu/ModifySettings'
import PasswordLost from '../onboarding/PasswordLost'
import Post from '../moments/Posts'
import PasswordReset from '../onboarding/PasswordReset'
import SignUp from '../onboarding/SignUp'

const routes = (props) => {
  return (
    <Switch>
      <Route exact path='/' component={Access} />
      <Route exact path='/family' component={CardMembers} />
      <Route path='/family/create' component={CreateFamily} />
      <Route path='/family/delete' component={CreateFamily} />
      <Route path='/family/modify' component={CreateFamily} />
      <Route path='/user/modify' component={CreateFamily} />
      <Route exact path='/moments' component={Post} />
      <Route path='/favoris' component={Post} />
      <Route path='/moments/create/quote' component={CreateMoments} />
      <Route path='/moments/create/milestone' component={CreateMoments} />
      <Route path='/onboarding/login' component={Connexion} />
      <Route path='/onboarding/lostpwd' component={PasswordLost} />
      <Route path='/onboarding/resetpwd' component={PasswordReset} />
      <Route path='/onboarding/signup' component={SignUp} />
      <Route exact path='/settings' component={DisplaySettings} />
      <Route path='/settings/modify/email' component={ModifySettings} />
      <Route path='/settings/modify/password' component={ModifySettings} />
      <Route exact path='/share' component={CardContacts} />
      <Route exact path='/share/moments' component={AddShareMoment} />
    </Switch>
  )
}

export default routes
