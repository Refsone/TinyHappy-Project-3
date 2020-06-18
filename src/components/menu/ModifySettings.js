import React from 'react'
import axios from 'axios'
import Email from './Email'
import Password from './Password'
import Header from './../commons/header/Header'

const ModifySettings = (props) => {
  const path = props.location.pathname
  axios.get('http://localhost:8080/').then((res) => console.log('res axios', res.data))

  return (
    <>
      <Header location={path} burger />
      <div>
        {path === '/settings/modify/email' ? <Email /> : <Password />}
      </div>
    </>
  )
}

export default ModifySettings
