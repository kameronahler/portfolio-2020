// react
import React, { useEffect, useState } from 'react'

// packages
import { formium } from '../../../lib/formium'
import { FormiumForm, defaultComponents } from '@formium/react'

// components
import { Header } from '../../Page/Header'

const fetchFormiumForm = async () => {
  const form = await formium.getFormBySlug('contact')
  console.log(form)
  return form
}

const ElementsWrapper = React.memo(function ElementsWrapper(props) {
  return <div {...props} className='elements-wrapper'></div>
})

const FieldWrapper = React.memo(function FieldWrapper(props) {
  return <div {...props} className='field-wrapper'></div>
})

const FormControl = React.memo(function FormControl({
  labelFor,
  label,
  description,
  children,
  error,
}) {
  const modifier = label
    .toLowerCase()
    .replaceAll(/[{}()]/gi, '')
    .replaceAll(/[\s_]/gi, '-')
  return (
    <div className={`form-control form-control--${modifier}`}>
      {label && (
        <label className='form-control__label' htmlFor={labelFor}>
          {label}
        </label>
      )}
      {description && (
        <div className='form-control__description'>{description}</div>
      )}
      <div className='form-control__field'>{children}</div>
      {error && <div className='form-control__error-message'>{error}</div>}
    </div>
  )
})

const TextInput = React.memo(function TextInput(props) {
  return <input {...props} className='text-input' />
})

const myComponents = {
  ...defaultComponents,
  ElementsWrapper,
  FieldWrapper,
  FormControl,
  TextInput,
}

export const PageContact = () => {
  const [form, setForm] = useState(null)

  useEffect(() => {
    fetchFormiumForm().then(form => {
      setForm(form)
    })
  }, [])

  return (
    <>
      <Header title={'Contact'} />
      {form ? (
        <section>
          <FormiumForm
            components={myComponents}
            data={form}
            onSubmit={async values => {
              console.log(values)
              // await formium.submitForm(process.env.FORMIUM_SLUG, values)
              alert('Success')
            }}
          />
        </section>
      ) : null}
    </>
  )
}
