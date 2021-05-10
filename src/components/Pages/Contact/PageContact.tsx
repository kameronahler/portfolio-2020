// react
import React, { useEffect, useState } from 'react'

// packages
import { formium } from '../../../lib/formium'
import {
  defaultComponents,
  FormiumForm,
  FormiumComponents,
  FormControlProps,
} from '@formium/react'

// components
import { Header as PageHeader } from '../../Page/Header'

// formium
const fetchFormiumForm = async () => {
  try {
    const form = await formium.getFormBySlug('contact')
    return form
  } catch (err) {
    console.error(err)
  }
}

const ElementsWrapper = React.memo(function ElementsWrapper(props) {
  return <div {...props} className='elements-wrapper'></div>
})

const FieldWrapper = React.memo(function FieldWrapper(props) {
  return <div {...props} className='field-wrapper'></div>
})

const FormControl = React.memo(function FormControl({
  children,
  description,
  error,
  label,
  labelFor,
}: FormControlProps) {
  return (
    <div className={`form-control`}>
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

const Header = React.memo(function Header() {
  return <></>
})

const TextInput = React.memo(function TextInput(props) {
  return <input {...props} className='text-input' />
})

const myComponents: FormiumComponents = {
  ...defaultComponents,
  ElementsWrapper,
  FieldWrapper,
  FormControl,
  Header,
  TextInput,
}

export const PageContact = () => {
  const [form, setForm] = useState(null)

  useEffect(() => {
    fetchFormiumForm()
      .then(form => {
        setForm(form)
      })
      .catch(err => console.error(err))
  }, [])

  return (
    <>
      <PageHeader title={'Contact'} />
      {form ? (
        <section>
          <FormiumForm
            components={myComponents}
            data={form}
            onSubmit={async values => {
              console.log('success', values)
              // await formium.submitForm(process.env.FORMIUM_SLUG, values)
            }}
          />
        </section>
      ) : null}
    </>
  )
}
