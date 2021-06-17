import React from 'react'
import { useField } from 'formik'

export const FormikTextarea = ({
  labelText,
  ...props
}: {
  [x: string]: any
  name: string
}) => {
  const [field, meta] = useField(props)
  return (
    <>
      <label>
        {labelText}
        <textarea {...field} {...props} />
      </label>
      {meta.touched && meta.error ? (
        <div className='error'>{meta.error}</div>
      ) : null}
    </>
  )
}
