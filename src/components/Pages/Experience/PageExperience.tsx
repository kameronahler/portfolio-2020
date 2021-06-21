// react
import React, { useEffect } from 'react'

// packages
import styled from 'styled-components'

// components
import { PageHeader } from '../../Page/PageHeader'

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
const DATA_RESIZE_PARENT = 'resize-parent'
const CARD_DATA = [
  {
    description: (
      <>
        <strong>Years (and counting)</strong> designing user experiences and
        making UI.
      </>
    ),
    id: 0,
    visual: <h3>7+</h3>,
  },
  {
    arrowColor: 'var(--color-primary)',
    description: (
      <>
        <StyledStrong color={'var(--color-primary)'}>
          Looking for a resume perhaps?
        </StyledStrong>
        <p>Check out this interactive one I made.</p>
      </>
    ),
    href: 'https://kamerons-resume.netlify.app',
    id: 1,
    srOnlyTitle: 'Visit interactive resume',
    visual: SVGResume,
  },
  {
    arrowColor: '#02A678',
    description: (
      <>
        <StyledStrong color='#02A678'>
          Senior product designer & UI developer
        </StyledStrong>
        &nbsp;for an app serving homeowners, service providers, and B2B real
        estate agents.
      </>
    ),
    href: 'https://zaarly.com',
    id: 2,
    visual: SVGZaarly,
    srOnlyTitle: 'Visit Zaarly website',
  },
  {
    arrowColor: '#1399A4',
    description: (
      <>
        <StyledStrong color='#1399A4'>
          UX manager & senior UX designer
        </StyledStrong>
        &nbsp;for an enterprise marcomm SAAS platform.
      </>
    ),
    href: 'https://cision.com',
    id: 3,
    visual: SVGCision,
    srOnlyTitle: 'Visit Cision website',
  },
  {
    arrowColor: '#29ADCE',
    description: (
      <>
        <StyledStrong color='#29ADCE'>UI designer & developer</StyledStrong>
        &nbsp;for an agency focused on government, public planning, and
        documentation sites and apps.
      </>
    ),
    href: 'https://konve.io/uis-is-now-konveio-landing',
    id: 4,
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
    arrowColor: '#8FC0A8',
    description: (
      <>
        <StyledStrong color='#8FC0A8'>Operations manager</StyledStrong>
        &nbsp;for an online photo printing company.
      </>
    ),
    href: 'https://prodpi.com',
    id: 5,
    visual: SVGProdpi,
    srOnlyTitle: 'Visit ProDPI website',
  },
]

export const PageExperience = () => {
  const handleSizingOnMount = () => {
    const nodes = document
      .querySelector(`[data-id='${DATA_RESIZE_PARENT}'`)
      .querySelectorAll('[data-resize="true"]')

    const maxHeight = () => {
      let currentMaxHeight: number = 0

      nodes.forEach(card => {
        const cardHeight = card.getBoundingClientRect().height

        if (currentMaxHeight > cardHeight) {
          return
        }

        currentMaxHeight = cardHeight
      })

      return currentMaxHeight
    }

    nodes.forEach((card: HTMLElement) => {
      card.style.minHeight = `${maxHeight()}px`
    })
  }

  useEffect(() => handleSizingOnMount(), [])

  return (
    <>
      <PageHeader title={'Experience'} />
      <StyledCardsWrapper data-id={DATA_RESIZE_PARENT}>
        {CARD_DATA.map(card => (
          <ExperienceCard
            arrowColor={card.arrowColor}
            data-resize='true'
            description={card.description}
            key={card.id}
            href={card.href}
            srOnlyTitle={card.srOnlyTitle}
            visual={card.visual}
          />
        ))}
      </StyledCardsWrapper>
    </>
  )
}
