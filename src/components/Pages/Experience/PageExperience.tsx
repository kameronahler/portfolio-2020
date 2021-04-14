// react
import React from 'react'

// packages
import styled from 'styled-components'

// components
import { Header } from '../../Page/Header'

// theme
import { THEME } from '../../../styles/Theme'

// assets
import uis from 'url:../../../assets/uis.png'
import { SVGCision } from '../../../assets/SVGCision'
import { SVGProdpi } from '../../../assets/SVGProdpi'
import { SVGResume } from '../../../assets/SVGResume'
import { SVGZaarly } from '../../../assets/SVGZaarly'
import { ExperienceCard } from './ExperienceCard'

// styled
const StyledCardsWrapper = styled.section`
  display: grid;
  row-gap: 2rem;

  @media (min-width: ${THEME.w.screenDesktop}) {
    gap: 2rem;
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
`

const StyledStrong = styled.strong`
  color: ${({ color }: { color: string }) => color};
`

// constants
const CARD_DATA: IExperienceCard[] = [
  {
    description: (
      <>Years designing and developing front end thingies (and counting).</>
    ),
    visual: <h3>6+</h3>,
  },
  {
    description: (
      <>
        <StyledStrong color={'var(--color-primary)'}>
          Looking for a resume?
        </StyledStrong>
        &nbsp;Head on over here.
      </>
    ),
    href: 'https://kamerons-resume.netlify.app',
    srOnlyTitle: 'Visit interactive resume',
    visual: SVGResume,
  },
  {
    description: (
      <>
        <StyledStrong color='#02A678'>
          Senior product designer & frontend developer
        </StyledStrong>
        &nbsp;for a hybrid Rails app serving homeowners, service providers, and
        B2B real estate agents.
      </>
    ),
    href: 'https://zaarly.com',
    visual: SVGZaarly,
    srOnlyTitle: 'Visit Zaarly website',
  },
  {
    description: (
      <>
        <StyledStrong color='#1399A4'>
          UX manager & senior UX designer
        </StyledStrong>
        &nbsp;for an enterprise marcomm SAAS platform.
      </>
    ),
    href: 'https://cision.com',
    visual: SVGCision,
    srOnlyTitle: 'Visit Cision website',
  },
  {
    description: (
      <>
        <StyledStrong color='#29ADCE'>UI designer & developer</StyledStrong>
        &nbsp;for an agency focused on government, public planning, and
        documentation sites and apps.
      </>
    ),
    href: 'https://konve.io/uis-is-now-konveio-landing',
    srOnlyTitle: 'Visit Urban Interactive Studio website',
    visual: (
      <img
        alt='Urban Interactive Studio logo'
        height='72'
        src={uis}
        width='347.5'
      />
    ),
  },
  {
    description: (
      <>
        <StyledStrong color='#8FC0A8'>Operations manager</StyledStrong>
        &nbsp;for an online photo printing company.
      </>
    ),
    href: 'https://prodpi.com',
    visual: SVGProdpi,
    srOnlyTitle: 'Visit ProDPI website',
  },
]

export const PageExperience = () => (
  <>
    <Header title={'Experience'} />
    <StyledCardsWrapper>
      {CARD_DATA.map(card => (
        <ExperienceCard
          description={card.description}
          href={card.href}
          srOnlyTitle={card.srOnlyTitle}
          visual={card.visual}
        />
      ))}
    </StyledCardsWrapper>
  </>
)
