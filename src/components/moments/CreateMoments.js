import React from 'react'
import { Route, Switch } from 'react-router-dom'

import Calendar from './Calendar'
import Milestone from './Milestone'
import MomentNavbar from './MomentNavbar'
import Quote from './Quote'

import './CreateMoment.css'

const CreateMoment = () => {
  return (
    <div className='create'>
      <MomentNavbar />
      <Switch>
        <Route path='/quote' component={Quote} />
        <Route path='/milestone' component={Milestone} />
      </Switch>
      <Calendar />
    </div>
  )
}

export default CreateMoment
