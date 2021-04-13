// react
import React from 'react'

// packages
import styled from 'styled-components'

// components
import { PageHeader } from '../../PageHeader/PageHeader'

// theme
import { THEME } from '../../../styles/Theme'
import { Header } from '../../Header/Header'

// assets
import uis from 'url:../../../assets/uis.png'
import { SVGZaarly } from '../../../assets/SVGZaarly'
import { SVGCision } from '../../../assets/SVGCision'

// styled
const StyledCardWrapper = styled.section`
  @media (min-width: ${THEME.w.screenDesktop}) {
    display: grid;
    gap: 2rem;
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
`

const StyledCard = styled.div`
  @media (min-width: ${THEME.w.screenDesktop}) {
    display: flex;
    flex-direction: column;
  }

  h2 {
    font-size: var(--font-size-h4);
    min-height: 4.875rem;

    @media (min-width: ${THEME.w.screenLg}) {
      min-height: 7.125rem;
      font-size: var(--font-size-h3);
    }
  }
`

export const PageExperience = React.memo(() => {
  return (
    <>
      <PageHeader title={'Experience'} />
      <StyledCardWrapper>
        <StyledCard className='card'>
          <p>Designing and coding since 2015</p>
        </StyledCard>
        <StyledCard className='card'>
          <Header srOnly={true}>
            <h2>Zaarly</h2>
          </Header>
          {SVGZaarly}
          <p>
            Senior product designer & frontend developer for a hybrid Rails app
            serving homeowners, service providers, and B2B real estate agents.
          </p>
        </StyledCard>
        <StyledCard className='card'>
          {SVGCision}
          <Header srOnly={true}>
            <h2>Cision</h2>
          </Header>
          <p>
            UX manager & senior UX designer for an enterprise marcomm SAAS
            platform.
          </p>
        </StyledCard>
        <StyledCard className='card'>
          <Header srOnly={true}>
            <h2>Urban Interactive Studio</h2>
          </Header>
          <img src={uis} alt='Urban Interactive Studio logo' />
          <p>
            UI designer & developer for an agency focused on government, public
            planning, and documentation sites and apps.
          </p>
        </StyledCard>
      </StyledCardWrapper>
    </>
  )
})
