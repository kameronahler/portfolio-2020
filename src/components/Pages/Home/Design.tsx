// react
import React from 'react'
import { CSSTransition } from 'react-transition-group'

// packages
import styled from 'styled-components'

// components
import { SRHeader } from '../../SRHeader/SRHeader'
import { ContentCardsWrapper } from './ContentCardsWrapper'
import { ContentCard } from './ContentCard'

// theme
import { THEME } from '../../../styles/Theme'

// assets
import { SVGDribbble } from '../../../assets/SVGDribbble'

// styled
const StyledSVGWrapper = styled.div`
  margin-bottom: 1rem;

  @media (min-width: ${THEME.w.screenDesktop}) {
    margin-bottom: 2rem;
  }
  svg {
    display: block;
    height: 2rem;
    width: 2rem;
  }

  path {
    fill: var(--color-primary);
  }
`

export const Design = () => {
  return (
    <CSSTransition appear={true} in={true} timeout={THEME.duration[500]}>
      <ContentCardsWrapper>
        <SRHeader>
          <h3>How I can help with design</h3>
        </SRHeader>
        <ContentCard>
          <StyledSVGWrapper>{SVGDribbble}</StyledSVGWrapper>
          <h4>Discovery</h4>
          <p>
            Utilize stakeholders, user research, competitive reviews, and
            moodboarding to focus and frame our solutions.
          </p>
        </ContentCard>
        <ContentCard>
          <StyledSVGWrapper>{SVGDribbble}</StyledSVGWrapper>
          <h4>UX</h4>
          <p>
            Focus on information architecture, user flow/system design, and
            wireframing MVP concepts.
          </p>
        </ContentCard>
        <ContentCard>
          <StyledSVGWrapper>{SVGDribbble}</StyledSVGWrapper>
          <h4>UI</h4>
          <p>
            Design UI while keeping accessibility, reusability, and scalability
            in mind.
          </p>
        </ContentCard>
        <ContentCard>
          <StyledSVGWrapper>{SVGDribbble}</StyledSVGWrapper>
          <h4>Design systems</h4>
          <p>
            Build, maintain, and contribute to design systems in design or code,
            permanently working toward consistency, flexibility, and
            predicatability.
          </p>
        </ContentCard>
      </ContentCardsWrapper>
    </CSSTransition>
  )
}
