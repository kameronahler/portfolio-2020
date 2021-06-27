// react
import React from 'react'

// packages
import styled, { keyframes } from 'styled-components'

// components
import { PageHeader } from '../../Page/PageHeader'
import { Content } from './Content'

// theme
import { THEME } from '../../../styles/Theme'

// styled
const KeyframeWaveHello = keyframes`
  0%{
    transform: rotate(0);
  }
  5%{
    transform: rotate(15deg);
  }
  10%{
    transform: rotate(-15deg);
  }
  15%{
    transform: rotate(15deg);
  }
  20%{
    transform: rotate(-15deg);
  }
  25%{
    transform: rotate(0);
  }
  100%{
    transform: rotate(0);
  }
`

const StyledEmojiWrapper = styled.span`
  display: none;

  @media (min-width: ${THEME.w.screenSm}) {
    animation: ${KeyframeWaveHello} 3s infinite;
    display: inline-block;
    font-size: var(--font-size-h2-clamp);
    transform-origin: 75% 75%;
    vertical-align: 15%;
  }
`

export const PageHome = () => {
  return (
    <>
      <PageHeader
        title={
          <>
            Kameron Ahler <StyledEmojiWrapper>👋</StyledEmojiWrapper>
          </>
        }
      ></PageHeader>
      <Content />
    </>
  )
}
