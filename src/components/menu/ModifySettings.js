import React from 'react'

import Email from './Email'
import Header from './../commons/header/Header'
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
