import React, { useState } from 'react'
import './SelectAuthor.css'

const SelectAuthor = (props) => {
  // const [authors] = useState([
  //   { id: 1, name: 'MARIE', color: '#DAFFD7' },
  //   { id: 2, name: 'JEROME', color: '#F6EAFF' },
  //   { id: 3, name: 'LOUISE', color: '#FEFFC5' },
  //   { id: 4, name: 'VIOLETTE', color: '#FFEDD7' }
  // ])
  const authors = props.familyMember
  const [color, setColor] = useState('')

  const handleClick = (e) => {
    authors.map((colorAuthor, index) => {
      // console.log('e',e.target)
      console.log(index)
      if (e.target.id === index + 1) { setColor(colorAuthor.color) }
    })
  }
  return (
    <div className='selectAuthor'>
      <p className='titleAuthor'>{props.title}</p>
      <div className='listAuthor'>
        {authors.map((author, index) =>
          <button key={index} className='author' id={author.id} style={{ backgroundColor: `${color}` }} onClick={(e) => handleClick(e)}>{author.family_firstname}</button>
        )}
      </div>
    </div>
  )
}

export default SelectAuthor
