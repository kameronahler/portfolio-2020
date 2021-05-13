import React from 'react'

// packages
import {
  defaultComponents,
  FormiumForm,
  FormiumComponents,
  FormControlProps,
} from '@formium/react'
import styled from 'styled-components'

// components
import { SVGClose } from '../../../assets/SVGClose'
import { Button as MyButton } from '../../Button/Button'
import { formium } from '../../../lib/formium'

// theme
import { THEME } from '../../../styles/Theme'

// formium react sdk
// h1
const Header = React.memo(function Header() {
  return <></>
})

// container
const ElementsWrapper = React.memo(function ElementsWrapper(props) {
  return <div {...props} className='elements-wrapper'></div>
})

// field wrapper
const FieldWrapper = React.memo(function FieldWrapper(props) {
  return <div {...props} className='field-wrapper'></div>
})

// label, description, input, error
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
        <label
          className={`form-control__label ${
            error && 'form-control__label--error'
          }`}
          htmlFor={labelFor}
        >
          {label}
        </label>
      )}
      {description && (
        <div className='form-control__description'>{description}</div>
      )}
      <div className='form-control__field'>{children}</div>
      {
        <div
          className={`form-control__error-message ${
            error && 'form-control__error-message--active'
          }`}
        >
          {error && SVGClose}
          {error ? error : '\u00A0'}
        </div>
      }
    </div>
  )
})

// name and email
const TextInput = React.memo(function TextInput(props) {
  return <input data-formium-target='input' {...props} className='text-input' />
})

// textarea
const Textarea = React.memo(function Textarea(props) {
  return (
    <textarea
      {...props}
      className='textarea'
      data-formium-target='input'
      rows={5}
    />
  )
})

// submit
const SubmitButton = React.memo(function Button(props) {
  return (
    <div {...props} className='button-wrapper'>
      <MyButton data-formium-target='input button' type={'submit'}>
        Send
      </MyButton>
    </div>
  )
})

// config
const myComponents: FormiumComponents = {
  ...defaultComponents,
  ElementsWrapper,
  FieldWrapper,
  FormControl,
  Header,
  Textarea,
  SubmitButton,
  TextInput,
}

// styled
const StyledFormiumWrapper = styled.div`
  .form-control {
    margin-bottom: 1rem;

    @media (min-width: ${THEME.w.screenSm}) {
      display: grid;
      grid-template-columns: 1fr auto;
      grid-row-gap: 0.5rem;
      margin-bottom: unset;
    }

    &__label {
      display: block;
      margin-bottom: 0.5rem;
      transition-duration: var(--duration-250ms);
      transition-property: color;
      transition-timing-function: var(--easing-default);

      @media (min-width: ${THEME.w.screenSm}) {
        grid-column: 1/2;
        margin-bottom: unset;
      }

      &--error {
        color: var(--color-warning);
      }
    }

    &:focus-within label {
      color: var(--color-primary);
    }

    &__field {
      display: block;
      margin-bottom: 0.5rem;

      @media (min-width: ${THEME.w.screenSm}) {
        grid-column: 1/-1;
        margin-bottom: 3.125rem;
      }
    }

    &__error-message {
      color: var(--color-warning);
      opacity: 0;
      transform: translateX(-1rem);
      transition-duration: var(--duration-250ms);
      transition-property: opacity, transform;
      transition-timing-function: var(--easing-default);

      @media (min-width: ${THEME.w.screenSm}) {
        transform: translateX(1rem);
        grid-column: 2/3;
        grid-row: 1/2;
      }

      &--active {
        display: flex;
        align-items: center;
        opacity: 1;
        transform: translateY(0);

        svg {
          height: 1.5rem;
          width: 1.5rem;

          rect {
            fill: var(--color-warning);
          }
        }
      }
    }
  }

  .button-wrapper {
    button {
      width: 100%;

      @media (min-width: ${THEME.w.screenSm}) {
        width: auto;
      }
    }
  }
`

export const Form = ({ form }) => {
  const handleSubmission = async values => {
    const button: HTMLButtonElement = document.querySelector(
      '[data-formium-target="input button"]'
    )

    const formiumInputs: HTMLFormElement[] = Array.from(
      document.querySelectorAll('[data-formium-target="input"]')
    )

    const setButton = async (disabled: boolean, text: string) => {
      button.disabled = disabled
      button.innerText = text
    }

    const setInputs = async (clear: boolean, disabled: boolean) => {
      for (let input of formiumInputs) {
        if (clear) {
          input.value = ''
        }
        input.disabled = disabled
      }
    }

    try {
      await setButton(true, 'Sending...')
      await setInputs(false, true)
      await formium.submitForm(process.env.FORMIUM_SLUG, values)
      setTimeout(() => {
        setButton(false, 'Message sent!')
        setInputs(true, false)
      }, 1000)
      setTimeout(() => {
        setButton(false, 'Send')
      }, 5000)
    } catch (err) {
      console.error(err)
    }
  }

  return (
    <>
      <StyledFormiumWrapper>
        <FormiumForm
          components={myComponents}
          data={form}
          onSubmit={handleSubmission}
        />
      </StyledFormiumWrapper>
    </>
  )
}
