import { useState, useEffect } from 'react'
import EyeClosed from '../../images/eye-slash-regular1.svg'
import EyeOpen from '../../images/eye-open.svg'

const useForm = (callback, validating) => {
  const [values, setValues] = useState({ user_mail: '', user_password: '' })
  const [errors, setErrors] = useState({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [visible, setVisible] = useState(false)
  const handleChange = (event) => {
    const { name, value } = event.target
    setValues({ ...values, [name]: value })
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

  const showType = visible ? 'text' : 'password'
  const showIcon = (visible ? { EyeClosed } : { EyeOpen })
  const onclick = () => { setVisible(visible => !visible) }
  return {
    handleChange,
    handleSubmit,
    showType,
    showIcon,
    onclick,
    values,
    errors
  }
}

export default useForm
