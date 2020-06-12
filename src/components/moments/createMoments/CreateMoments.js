import React from 'react'
import MomentNavbar from './MomentNavbar'
import Calendar from './Calendar'
import Citation from './Citation'
import FaitNotable from './FaitNotable'
import LogoHeader from '../../commons/header/LogoHeader'
import { Route, Switch } from 'react-router-dom'
import './CreateMoments.css'

const CreateMoment = () => {
  return (
    <div className='create'>
      <LogoHeader />
      <MomentNavbar />
      <Switch>
        <Route path='/quote' component={Citation} />
        <Route path='/milestone' component={FaitNotable} />
      </Switch>
      <Calendar />
    </div>
  )
}

export default CreateMoment
