function validationLogIn (values) {
  let errors = {}
  if (!values.user_mail) {
    errors.user_mail = 'Email is required!'
  } else if (!/\S+@\S+\.\S+/.test(values.user_mail)) {
    errors.user_mail = 'Email addresse in invalid'
  }
  if (!values.user_password) {
    errors.user_password = 'Password is required!'
  } else if (values.user_password.length < 10) {
    errors.user_password = 'Password must have more than 10 characters'
  }
  return errors
}

export default validationLogIn
