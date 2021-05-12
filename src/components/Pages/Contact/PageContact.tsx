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
import styled from 'styled-components'

// components
import { Header as PageHeader } from '../../Page/Header'
import { Loader } from '../../Loader/Loader'
import { LoaderWrapper } from '../../Loader/LoaderWrapper'

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

const SubmitButton = React.memo(function Button(props) {
  return (
    <div {...props} className='button-wrapper'>
      <button>Submit</button>
    </div>
  )
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
  SubmitButton,
  TextInput,
}

// styled
const StyledFormWrapper = styled.section`
  form {
    max-width: 65ch;
  }

  .form-control {
    margin-bottom: 2rem;

    &__label {
      display: block;
      margin-bottom: 0.75rem;
    }

    &__field {
      display: block;
    }
  }

  .button-wrapper {
    text-align: right;
  }

  button {
    border: 0.0625rem var(--color-primary) solid;
    border-radius: 0.25rem;
    color: var(--color-primary);
    font-weight: var(--font-weight-bold);
    padding: 1rem 1.5rem;
    transition-duration: var(--duration-250ms);
    transition-property: background-color, color;
    transition-timing-function: var(--easing-default);

    &:hover {
      background-color: var(--color-primary);
      color: var(--color-white);
    }
  }
`

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
        <StyledFormWrapper>
          <FormiumForm
            components={myComponents}
            data={form}
            onSubmit={async values => {
              console.log('success', values)
              // await formium.submitForm(process.env.FORMIUM_SLUG, values)
            }}
          />
        </StyledFormWrapper>
      ) : (
        <LoaderWrapper>
          <Loader size={50} strokeWidth={6} />
        </LoaderWrapper>
      )}
    </>
  )
}
