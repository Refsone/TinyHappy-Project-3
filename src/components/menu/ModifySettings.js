import React from 'react'
import axios from 'axios'
import Email from './Email'
import Password from './Password'
import Logo from './../commons/header/LogoHeader'

const ModifySettings = (props) => {
  const path = props.location.pathname
  axios.get('http://localhost:8080/').then((res) => console.log('res axios', res.data))

  return (
    <>
      <Logo location={path} />
      <div className='create'>
        {path === '../menu/ModifySettings' ? <Email /> : <Password />}
      </div>
    </>
  )
}

export default ModifySettings
