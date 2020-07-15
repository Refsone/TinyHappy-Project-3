import React from 'react'
import PropTypes from 'prop-types'

import AuthorSelect from './AuthorSelect'
import TextArea from './TextArea'

const Moment = (props) => {
  if (props.momentTypeId === 1) {
    return (
      <>
        <AuthorSelect memberFamilyIsPresentAtMoment={props.memberFamilyIsPresentAtMoment} userIsPresent={props.userIsPresent} textInMomentArea={props.textInMomentArea} buttonSelectAuthor={props.buttonSelectAuthor} familyMember={props.familyMember} user={props.user} titleAuthor="SELECTIONNER L\'AUTEUR" />
        <TextArea textInContextArea={props.textInContextArea} textInMomentArea={props.textInMomentArea} sendMomentSucceed={props.sendMomentSucceed} title='CITATION' active={props.active} SendCreateMoment={props.SendCreateMoment} placeholder='Ajouter une citation' onChangeTextInContextArea={props.onChangeTextInContextArea} onChangeTextInMomentArea={props.onChangeTextInMomentArea} idQuoteArea='quote' idContextArea='contextQuote' />
      </>
    )
  } else {
    return (
      <>
        <AuthorSelect memberFamilyIsPresentAtMoment={props.memberFamilyIsPresentAtMoment} userIsPresent={props.userIsPresent} textInMomentArea={props.textInMomentArea} buttonSelectAuthor={props.buttonSelectAuthor} familyMember={props.familyMember} user={props.user} titleAuthor='SELECTIONNER LE(S) PARTICIPANT(S)' />
        <TextArea textInContextArea={props.textInContextArea} textInMomentArea={props.textInMomentArea} sendMomentSucceed={props.sendMomentSucceed} title='DESCRIPTION' active={props.active} SendCreateMoment={props.SendCreateMoment} placeholder='Ajouter une description' onChangeTextInContextArea={props.onChangeTextInContextArea} onChangeTextInMomentArea={props.onChangeTextInMomentArea} idQuoteArea='description' idContextArea='contextMilestone' />
      </>
    )
  }
}

Moment.propTypes = {
  momentTypeId: PropTypes.number.isRequired
}

export default Moment
