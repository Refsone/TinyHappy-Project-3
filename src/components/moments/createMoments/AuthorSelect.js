import React, { useState } from 'react'

import './AuthorSelect.css'

const AuthorSelect = (props) => {
  const [authors] = useState([
    { id: 1, name: 'MARIE', color: '#DAFFD7' },
    { id: 2, name: 'JEROME', color: '#F6EAFF' },
    { id: 3, name: 'LOUISE', color: '#FEFFC5' },
    { id: 4, name: 'VIOLETTE', color: '#FFEDD7' }
  ])

  return (
    <div className='authorSelect'>
      <p className='authorTitle'>{props.title}</p>
      <div className='authorList'>
        {authors.map((author, index) =>
          <button key={index} className='author' id={author.id}>{author.name}</button>
        )}
      </div>
    </div>
  )
}

export default AuthorSelect
