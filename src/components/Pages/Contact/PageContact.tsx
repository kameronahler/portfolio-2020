// react
import React, { useEffect, useState } from 'react'

// packages
import styled from 'styled-components'

// components
import { Header as PageHeader } from '../../Page/Header'

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
        </StyledFormWrapper>
      </StyledLayout>
    </>
  )
}
