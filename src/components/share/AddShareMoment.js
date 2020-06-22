import React from 'react'

import Header from '../commons/header/Header'
import ValidateButton from '../commons/footer/ValidateButton'

function AddShareMoment (props) {
  const handleClick = () => {

  }

  return (
    <div>
      <Header location={props.location.name} burger />
      <ValidateButton name='Envoyer les moments' handleClick={handleClick} />
    </div>
  )
}

export default AddShareMoment
