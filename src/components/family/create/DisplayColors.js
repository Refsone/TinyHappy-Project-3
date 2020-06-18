import React from 'react'
import PropTypes from 'prop-types'

import './DisplayColors.css'

const DisplayColors = (props) => {
  const { colors, handlechange } = { ...props }
  return (
    <>
      <label className='general-label label-color'>COULEUR</label>
      <fieldset className='family_palette'>
        {colors && colors.map((color, id) => (
          <input key={id} type='radio' id={color.color} name='color_family_id' value={color.id} style={{ backgroundColor: color.color, margin: '.5em' }} onChange={(e) => handlechange(e)} />
        ))}
      </fieldset>
    </>
  )
}

DisplayColors.propTypes = {
  colors: PropTypes.array,
  handlechange: PropTypes.func.isRequired
}
export default DisplayColors
