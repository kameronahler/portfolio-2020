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

export const Development = () => {
  return (
    <CSSTransition appear={true} in={true} timeout={THEME.duration[500]}>
      <ContentCardsWrapper>
        <SRHeader>
          <h3>How I can help with development</h3>
        </SRHeader>
        <ContentCard>
          <StyledSVGWrapper>{SVGDribbble}</StyledSVGWrapper>
          <h4>HTML</h4>
          <p>Write semantic, reusable, and accessible markup.</p>
        </ContentCard>
        <ContentCard>
          <StyledSVGWrapper>{SVGDribbble}</StyledSVGWrapper>
          <h4>CSS</h4>
          <p>
            Style, style, and keep styling. Hone our solutions across browsers,
            and devices. In CSS/SCSS, JS, or via a framework.
          </p>
        </ContentCard>
        <ContentCard>
          <StyledSVGWrapper>{SVGDribbble}</StyledSVGWrapper>
          <h4>JS</h4>
          <p>
            Utilize JS for presentational/interactional interfaces. Manage state
            and scenarios in Vanilla or a framework like React.
          </p>
        </ContentCard>
        <ContentCard>
          <StyledSVGWrapper>{SVGDribbble}</StyledSVGWrapper>
          <h4>Collaborate</h4>
          <p>
            Provide guidance on styling and UX in front end code. Advocate for
            our users during incremental, agile development.
          </p>
        </ContentCard>
      </ContentCardsWrapper>
    </CSSTransition>
  )
}
