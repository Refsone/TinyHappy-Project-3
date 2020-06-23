function confirmationReset (values) {
  const errors = {}
  if (!values.user_password) {
    errors.user_password = 'Votre mot de passe est requis !'
  } else if (values.user_password.length < 8) {
    errors.user_password = 'Votre mot de passe doit avoir plus 8 charactères'
  }

  if (values.user_password !== values.confirm_user_password) {
    errors.user_mail = 'Votre mot de passe n\'est pas identique'
  }
  return errors
}

export default confirmationReset
