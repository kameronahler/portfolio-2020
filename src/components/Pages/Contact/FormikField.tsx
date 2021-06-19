// react
import React from 'react'

// packages
import { useField } from 'formik'
import styled from 'styled-components'

// assets
import { SVGClose } from '../../../assets/SVGClose'

// theme
import { THEME } from '../../../styles/Theme'

// styled
const StyledFieldWrapper = styled.div`
  @media (min-width: ${THEME.w.screenSm}) {
    display: grid;
    grid-template-columns: 1fr auto;
    margin-bottom: 2.5em;
  }

  &:focus-within {
    label {
      color: var(--color-primary);
    }
  }

  input,
  textarea {
    margin-top: 0.5rem;

    @media (min-width: ${THEME.w.screenSm}) {
      grid-column: 1 / -1;
    }
  }
`

const StyledErrorWrapper = styled.div`
  align-items: center;
  color: var(--color-warning);
  display: flex;
  line-height: 1;
  min-height: 2.5em;
  padding: 0.75em 0;

  @media (min-width: ${THEME.w.screenSm}) {
    grid-column: 2 / 3;
    grid-row: 1 / 2;
    min-height: unset;
    padding: unset;
  }

  svg {
    height: 1rem;
    width: 1rem;

    @media (min-width: ${THEME.w.screenSm}) {
      order: 2;
    }

    rect {
      fill: currentColor;
    }
  }
`

const StyledLabel = styled.label`
  display: block;
`

export const FormikField = ({
  labelText,
  type,
  ...props
}: {
  [x: string]: any
  name: string
  type: string
}) => {
  const [field, meta] = useField(props)

  return (
    <StyledFieldWrapper>
      <StyledLabel htmlFor={field.name}>{labelText}</StyledLabel>
      {type === 'textarea' ? (
        <textarea rows={4} id={field.name} {...field} {...props} />
      ) : (
        <input id={field.name} {...field} {...props} />
      )}

      <StyledErrorWrapper>
        {meta.touched && meta.error ? (
          <>
            {SVGClose}
            {meta.error}
          </>
        ) : null}
      </StyledErrorWrapper>
    </StyledFieldWrapper>
  )
}
