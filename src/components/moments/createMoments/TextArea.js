import React from 'react'
import PropTypes from 'prop-types'
import ValidateButton from '../../commons/footer/ValidateButton'
import ConfirmButton from '../../commons/footer/ConfirmButton'

import './TextArea.css'

const Textarea = (props) => {
  return (
    <div>
      <form className='area' method='post' id='formCreateMoment'>
        <label htmlFor='text'>{props.title}</label>
        <textarea name='text' rows='4' cols='35' defaultValue={props.textInMomentArea} placeholder={props.placeholder} id={props.idQuoteArea} onChange={props.onChangeTextInMomentArea} required />
        <p className='error-quote' style={props.textInContextArea.length > 0 && props.textInMomentArea.length === 0 ? { display: 'visible' } : { visibility: 'hidden' }}>Veuillez ajouter une citation</p>
        <label htmlFor='text'>CONTEXTE</label>
        <textarea name='text' rows='4' cols='35' defaultValue={props.textInContextArea} placeholder='Ajouter un contexte (facultatif)' id={props.idContextArea} onChange={props.onChangeTextInContextArea} />
      </form>
      <ValidateButton name='publier' active={props.active} handleClick={props.SendCreateMoment} />
      {props.sendMomentSucceed && <ConfirmButton message='Envoie reussi' confirm />}
    </div>
  )
}

Textarea.propTypes = {
  sendMomentSucceed: PropTypes.bool.isRequired,
  textInContextArea: PropTypes.string,
  textInMomentArea: PropTypes.string,
  onChangeTextInContextArea: PropTypes.func.isRequired,
  onChangeTextInMomentArea: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
  idQuoteArea: PropTypes.string,
  idContextArea: PropTypes.string,
  title: PropTypes.string
}

export default Textarea
