// react
import React, { useEffect, useState } from 'react'

// packages
import styled from 'styled-components'
import { Formik, Form, FormikProps, useField } from 'formik'
import * as Yup from 'yup'

// components
import { Header as PageHeader } from '../../Page/Header'
import { FormikTextInput } from './FormikTextInput'
import { FormikTextarea } from './FormikTextarea'

// theme
import { THEME } from '../../../styles/Theme'

// styled
const StyledLayout = styled.div`
  @media (min-width: ${THEME.w.screenDesktop}) {
    display: grid;
    grid-gap: 1rem;
    grid-template-columns: repeat(12, minmax(0, 1fr));
  }
`

const StyledIntroWrapper = styled.div`
  @media (min-width: ${THEME.w.screenDesktop}) {
    grid-column: 9/13;
  }

  p {
    display: none;

    @media (min-width: ${THEME.w.screenDesktop}) {
      display: block;
    }
  }
`

const StyledFormWrapper = styled.div`
  @media (min-width: ${THEME.w.screenDesktop}) {
    grid-column: 1/8;
    grid-row: 1/2;
  }
`

// fetch encode helper
const encode = data => {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&')
}

export const PageContact = () => {
  return (
    <>
      <PageHeader title={'Contact'} />
      <StyledLayout>
        <StyledIntroWrapper>
          <h2 aria-hidden='true' className='h1'>
            ✌️
          </h2>
          <p>And if not...</p>
          <p>Thanks for stopping by, friend!</p>
        </StyledIntroWrapper>
        <StyledFormWrapper>
          <p>Drop me a line!</p>
          <Formik
            initialValues={{
              email: '',
              message: '',
              name: '',
            }}
            onSubmit={(values: IContactForm, actions) => {
              fetch('/', {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/x-www-form-urlencoded',
                },
                body: encode({ 'form-name': 'contact', ...values }),
              })
                .then(() => {
                  alert('test')
                  alert(encode({ 'form-name': 'contact', ...values }))
                  actions.resetForm()
                })
                .catch(err => console.error(err))
                .finally(() => actions.setSubmitting(false))
            }}
            validationSchema={Yup.object({
              email: Yup.string()
                .email('Invalid email address')
                .required('Email is required'),
              message: Yup.string().required('Message is required'),
              name: Yup.string().required('Name is required'),
            })}
          >
            <Form data-netlify={true} name='contact' noValidate={true}>
              <input type='hidden' name='contact' value='contact-html' />
              <FormikTextInput
                labelText='Name'
                name='name'
                required='true'
                type='text'
              />
              <FormikTextInput
                labelText='Email'
                name='email'
                required='true'
                type='email'
              />
              <FormikTextarea
                labelText='Message'
                name='message'
                required='true'
              />
              <button type='submit'>Send</button>
            </Form>
          </Formik>
        </StyledFormWrapper>
      </StyledLayout>
    </>
  )
}
