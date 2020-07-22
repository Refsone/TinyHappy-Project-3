import React from 'react'

import './Authors.css'

function Authors (props) {
  const { authors, clickAuthor } = props
  return (
    <div className='Authors'>
      {authors && authors.map((name, key) => {
        return <p id={key} className='bold-10px-grey' onClick={clickAuthor} key={key}>{name.family_firstname || name.user_firstname}</p>
      })}
    </div>
  )
}

export default Authors
