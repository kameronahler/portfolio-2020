// react
import React, { useState } from 'react'

// packages
import { Formik, Form, FormikHelpers } from 'formik'
import * as Yup from 'yup'

// components
import { FormikField } from './FormikField'
import { Button } from '../../Button/Button'

// fetch encode helper
const encode = (data: IFormikDataEncode) =>
  Object.keys(data)
    .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&')

// handlers
const handleSubmit = async (
  values: IContactForm,
  actions: FormikHelpers<IContactForm>,
  setSubmitted: any
) => {
  try {
    const res = await fetch('/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: encode({
        'form-name': 'contact',
        honeypot: 'bot-field',
        ...values,
      }),
    })

    if (res.ok) {
      actions.resetForm()
      setSubmitted(true)
    }

    actions.setSubmitting(false)
  } catch (err) {
    actions.setSubmitting(false)
    console.error(err)
  }
}

export const FormikForm = () => {
  const [submitted, setSubmitted] = useState(false)

  return (
    <Formik
      initialValues={{
        email: '',
        message: '',
        name: '',
      }}
      onSubmit={(values, actions) => {
        handleSubmit(values, actions, setSubmitted)
      }}
      validationSchema={Yup.object({
        email: Yup.string()
          .email('Invalid email address')
          .required('Email is required'),
        message: Yup.string().required('Message is required'),
        name: Yup.string().required('Name is required'),
      })}
    >
      {({ isSubmitting, dirty }) => (
        <Form
          data-netlify='true'
          data-netlify-honeypot='bot-field'
          name='contact'
          noValidate={true}
          style={isSubmitting ? { opacity: '.8' } : {}}
        >
          <div hidden aria-hidden='true'>
            <FormikField labelText='Names' name='bot-field' type='text' />
          </div>
          <FormikField
            labelText='Name'
            name='name'
            required={true}
            type='text'
          />
          <FormikField
            labelText='Email'
            name='email'
            required={true}
            type='email'
          />
          <FormikField
            labelText='Message'
            name='message'
            required={true}
            type='textarea'
          />
          <div>
            <Button disabled={isSubmitting ? true : false} type='submit'>
              {isSubmitting
                ? 'Sending'
                : dirty
                ? 'Send'
                : submitted
                ? 'Sent'
                : 'Send'}
            </Button>
          </div>
        </Form>
      )}
    </Formik>
  )
}
