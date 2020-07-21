function validationEmail (values) {
  const errors = {}
  if (!values.user_mail) {
    errors.user_mail = 'Votre email est requis!'
  } else if (!/^[a-z0-9.-]+@[a-z0-9.-]+.[a-z]{2,6}$/.test(values.user_mail)) {
    errors.user_mail = 'Votre adresse email n\'est pas valide'
  } else if (!values.new_user_mail) {
    errors.new_user_mail = 'Votre nouvelle adresse est requise'
  } else if (!/^[a-z0-9.-]+@[a-z0-9.-]+.[a-z]{2,6}$/.test(values.new_user_mail)) {
    errors.new_user_mail = 'Votre adresse email n\'est pas valide'
  } else if (values.user_mail !== values.new_user_mail) {
    errors.new_user_mail = 'Votre nouvelle adresse n\'est pas identique'
  } else if (values.new_user_mail < 8) {
    errors.new_user_mail = 'Votre n\'est pas au format'
  }
  return errors
}

export default validationEmail
