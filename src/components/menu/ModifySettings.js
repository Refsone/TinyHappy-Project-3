import React from 'react'
import axios from 'axios'

import Header from './../commons/header/Header'
import Email from './Email'
import Password from './Password'

const backUrl = process.env.REACT_APP_API_URL

const ModifySettings = (props) => {
  const path = props.location.pathname
  axios.get(`${backUrl}`)

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
