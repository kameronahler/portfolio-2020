// react
import React, { useRef, useState } from 'react'

// packages
import styled from 'styled-components'
import { Formik, Form, FormikHelpers } from 'formik'
import * as Yup from 'yup'

// components
import { FormikField } from './FormikField'
import { Button } from '../../Button/Button'

// theme
import { THEME } from '../../../styles/Theme'

// styled
const StyledButtonWrapper = styled.div`
  @media (min-width: ${THEME.w.screenSm}) {
    align-items: center;
    display: grid;
    column-gap: 1rem;
    grid-template-columns: auto 1fr;
  }

  button {
    margin-bottom: 1rem;

    @media (min-width: ${THEME.w.screenSm}) {
      margin-bottom: unset;
    }
  }
`

// fetch encode helper
const encode = (data: IFormikDataEncode) =>
  Object.keys(data)
    .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&')

// handlers
const handleSubmit = async (
  values: IContactForm,
  actions: FormikHelpers<IContactForm>,
  buttonText: React.MutableRefObject<string>,
  setSent: React.Dispatch<React.SetStateAction<boolean>>
) => {
  try {
    buttonText.current = 'Sending'
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
      setSent(true)
    } else {
      window.alert('There was a problem sending your message 😬')
    }

    buttonText.current = 'Send'
    actions.setSubmitting(false)
  } catch (err) {
    console.error(err)
    buttonText.current = 'Send'
    actions.setSubmitting(false)
    window.alert('There was a problem sending your message 😬')
  }
}

export const FormikForm = () => {
  const buttonText = useRef<string>('Send')
  const [sent, setSent] = useState<boolean>(false)

  return (
    <Formik
      initialValues={{
        email: '',
        message: '',
        name: '',
      }}
      onSubmit={(values, actions) => {
        handleSubmit(values, actions, buttonText, setSent)
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
          <StyledButtonWrapper>
            <Button disabled={isSubmitting ? true : false} type='submit'>
              {buttonText.current}
            </Button>
            {sent && !dirty && <p>Your message was sent!</p>}
          </StyledButtonWrapper>
        </Form>
      )}
    </Formik>
  )
}
