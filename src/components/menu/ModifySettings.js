import React from 'react'
import axios from 'axios'
import Email from './Email'
import Logo from './../commons/header/LogoHeader'
import Password from './Password'

const ModifySettings = (props) => {
  const path = props.location.pathname
  axios.get('http://localhost:8080/').then((res) => console.log('res axios', res.data))

  return (
    <>
      <Logo location={path} />
      <div>
        {path === '/settings/modify/email' ? <Email /> : <Password />}
      </div>
    </>
  )
}

export default ModifySettings
