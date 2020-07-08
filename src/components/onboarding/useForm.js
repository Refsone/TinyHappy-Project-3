import { useState, useEffect } from 'react'

const useForm = (callback, validating) => {
  const [values, setValues] = useState({ user_mail: '', user_password: '' })
  const [errors, setErrors] = useState({})
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (event) => {
    const { name, value } = event.target
    setValues({ ...values, [name]: value })
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    console.log(values)
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
    values,
    errors
  }
}

export default useForm
