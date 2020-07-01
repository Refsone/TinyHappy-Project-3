import React, { useState, useEffect } from 'react'
import axios from 'axios'

import './Authors.css'

function Authors () {
  const [family, setFamily] = useState([])
  const [authors, setAuthor] = useState([])

  useEffect(() => {
    fetchFamily()
  }, [])

  useEffect(() => {
    fetchUser()
  }, [family])

  const fetchFamily = (id = 1) => {
    axios.get(`http://localhost:7500/users/${id}/family`)
      .then(res => setFamily(res.data))
  }

  const fetchUser = (id = 1) => {
    axios.get(`http://localhost:7500/users/${id}`)
      .then(res => setAuthor(family.concat(res.data)))
  }

  const clickAuthor = (e) => {
    const targetStyle = e.target.style
    if (targetStyle.backgroundColor === 'rgb(255, 255, 255)' || targetStyle.backgroundColor === '') {
      targetStyle.backgroundColor = authors[e.target.id].color
    } else {
      targetStyle.backgroundColor = '#fff'
    }
  }
  return (
    <div className='Authors'>
      {authors && authors.map((name, key) => {
        return <p id={key} className='bold-10px-grey' onClick={clickAuthor} key={key}>{name.family_firstname || name.user_firstname}</p>
      })}
    </div>
  )
}

export default Authors
