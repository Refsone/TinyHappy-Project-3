function validationEmail (values) {
  const errors = {}
  if (!values.user_mail) {
    errors.user_mail = 'Votre email est requis!'
  } else if (!/\S+@\S+\.\S+/.test(values.user_mail)) {
    errors.user_mail = 'Votre adresse email n\'est pas valide'
  } else if (!values.new_user_mail) {
    errors.new_user_mail = 'Votre nouvelle acresse est requise'
  } else if (!/\S+@\S+\.\S+/.test(values.new_user_mail)) {
    errors.new_user_mail = 'Votre adresse email n\'est pas valide'
  } else if (values.user_mail !== values.new_user_mail) {
    errors.new_user_mail = 'Votre mot de passe n\'est pas identique'
  }
  return errors
}

export default validationEmail
