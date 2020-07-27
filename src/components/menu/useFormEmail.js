import { useState, useEffect } from 'react'

const useFormEmail = (callback, validating) => {
  const [values, setValues] = useState({ user_mail: '', user_password: '', new_user_mail: '' })
  const [errors, setErrors] = useState({})
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (event) => {
    const { name, value } = event.target
    const nextValues = { ...values, [name]: value }
    setErrors(validating(nextValues))
    setValues(nextValues)
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    setErrors(validating(values))
    setIsSubmitting(true)
  }

  useEffect(() => {
    if (Object.keys(errors).length === 0 && isSubmitting) {
      callback()
    }
  }, [errors])

  return {
    handleChange,
    handleSubmit,
    setErrors,
    setValues,
    values,
    errors

  }
}

export default useFormEmail
