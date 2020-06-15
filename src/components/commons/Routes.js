import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Access from '../onboarding/Access'
import CardContacts from '../share/CardContacts'
import CardMembers from '../family/CardMembers'
import Connexion from '../onboarding/Connexion'
import CreateFamily from '../family/CreateFamily'
import CreateMoments from '../moments/createMoments/CreateMoments'
// import DeleteFamily from '../family/DeleteFamily'
// import DisplaySettings from '../menu/DisplaySettings'
// import Legals from '../menu/Legals'
// import LostPwd from '../onboarding/LostPwd'
// import ModifyFamily from '../family/ModifyFamily'
// import ModifySettings from '../menu/ModifySettings'
// import MomentSelection from '../share/MomentSelection'
// import MomentSend from '../share/MomentSend'
import Post from '../moments/Posts'
// import Privacy from '../menu/Privacy'
import SignUp from '../onboarding/SignUp'

const routes = () => {
  return (
    <Switch>
      <Route exact path='/' component={Access} />
      <Route exact path='/family' component={CardMembers} />
      <Route path='/family/create' component={CreateFamily} />
      {/* <Route path='/family/delete' component={DeleteFamily} /> */}
      {/* <Route path='/family/modify' component={ModifyFamily} /> */}
      <Route exact path='/moments' component={Post} />
      <Route path='/moments/create/quote' component={CreateMoments} />
      <Route path='/moments/create/milestone' component={CreateMoments} />
      <Route path='/onboarding/login' component={Connexion} />
      {/* <Route path='/onboarding/lostpwd' component={LostPwd} /> */}
      <Route path='/onboarding/signup' component={SignUp} />
      {/* <Route exact path='/settings' component={DisplaySettings} /> */}
      {/* <Route path='/settings/legals' component={Legals} /> */}
      {/* <Route path='/settings/modify/email' component={ModifySettings} /> */}
      {/* <Route path='/settings/modify/password' component={ModifySettings} /> */}
      {/* <Route path='/settings/privacy' component={Privacy} /> */}
      <Route exact path='/share' component={CardContacts} />
      {/* <Route exact path='/share/moment' component={MomentSelection} /> */}
      {/* <Route exact path='/share/send' component={MomentSend} /> */}
    </Switch>
  )
}

export default routes
