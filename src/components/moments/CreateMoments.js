import React from 'react'
import MomentNavbar from './MomentNavbar'
import Calendar from './Calendar'
import Citation from './Citation'
import FaitNotable from './FaitNotable'
import { Route, Switch } from 'react-router-dom'
import './CreateMoment.css'

const CreateMoment = () => {
  return (
    <div className='create'>
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
