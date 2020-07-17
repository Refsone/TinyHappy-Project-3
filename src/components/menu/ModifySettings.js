import React from 'react'
import Header from './../commons/header/Header'
import Email from './Email'
import Password from './Password'

const ModifySettings = (props) => {
  const path = props.location.pathname

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
