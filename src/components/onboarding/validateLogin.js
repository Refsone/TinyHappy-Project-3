function validationLogIn (values) {
  const errors = {}
  if (!values.user_mail) {
    errors.user_mail = 'Votre email est requis!'
  } else if (!/\S+@\S+\.\S+/.test(values.user_mail)) {
    errors.user_mail = 'Votre adresse email n\'est pas valide'
  } else if (!values.user_password) {
    errors.user_password = 'Votre mot de passe est requis !'
  } else if (values.user_password < 8) {
    errors.user_password = 'Votre email ou votre mot de passe n\'est pas correct !'
  }
  return errors
}

export default validationLogIn
