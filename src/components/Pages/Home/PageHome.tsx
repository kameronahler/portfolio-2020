// react
import React from 'react'

// packages
import styled from 'styled-components'

// components
import { Header } from '../../Page/Header'
import { Content } from './Content'

// theme
import { THEME } from '../../../styles/Theme'

// styled
const StyledEmojiWrapper = styled.span`
  display: none;
  font-size: var(--font-size-h2-clamp);
  vertical-align: middle;

  @media (min-width: ${THEME.w.screenSm}) {
    display: inline;
  }
`

export const PageHome = () => {
  return (
    <>
      <Header
        title={
          <>
            Kameron Ahler <StyledEmojiWrapper>👋</StyledEmojiWrapper>
          </>
        }
      ></Header>
      <Content />
    </>
  )
}
