// react
import React from 'react'
import { CSSTransition } from 'react-transition-group'

// packages
import styled from 'styled-components'

// components
import { SRHeader } from '../../SRHeader/SRHeader'
import { ContentCardsWrapper } from './ContentCardsWrapper'
import { ContentCard } from './ContentCard'

// assets
import { SVGQuote } from '../../../assets/SVGQuote'
import { SVGDesign } from '../../../assets/SVGDesign'
import { SVGCollaborate } from '../../../assets/SVGCollaborate'
import { SVGFrontEnd } from '../../../assets/SVGFrontEnd'

// theme
import { THEME } from '../../../styles/Theme'

// styled
const StyledBlockquote = styled.blockquote`
  margin: unset;

  cite {
    display: block;
    font-weight: var(--font-weight-bold);
    font-style: normal;
    text-align: right;
  }
`

const StyledSVGWrapper = styled.div`
  margin-bottom: 1rem;

  @media (min-width: ${THEME.w.screenDesktop}) {
    margin-bottom: 2rem;
  }

  svg {
    display: block;
    height: 2rem;
    width: 2rem;

    [stroke] {
      stroke: var(--color-primary);
    }

    [fill] {
      fill: var(--color-primary);
    }
  }
`

export const All = () => {
  return (
    <CSSTransition appear={true} in={true} timeout={THEME.duration[500]}>
      <ContentCardsWrapper>
        <SRHeader>
          <h3>How I can help with design and development</h3>
        </SRHeader>

        <ContentCard>
          <StyledSVGWrapper>{SVGQuote}</StyledSVGWrapper>
          <StyledBlockquote>
            <p>
              Somewhere between design – a world of personas, pixels, and polish
              – and engineering – a world of logic, loops, and linux – lies
              frontend design.
            </p>
            <cite>– Brad Frost</cite>
          </StyledBlockquote>
        </ContentCard>
        <ContentCard>
          <StyledSVGWrapper>{SVGDesign}</StyledSVGWrapper>
          <h4>Design</h4>
          <p>
            Design to meet user, business, and development goals, with an eye on
            scalability and consistency.
          </p>
        </ContentCard>
        <ContentCard>
          <StyledSVGWrapper>{SVGCollaborate}</StyledSVGWrapper>
          <h4>Collaborate</h4>
          <p>
            Support other developers, uncover the tricky parts of our UX/UI, and
            balance our design goals with development goals.
          </p>
        </ContentCard>
        <ContentCard>
          <StyledSVGWrapper>{SVGFrontEnd}</StyledSVGWrapper>
          <h4>Front end</h4>
          <p>
            Utilize HTML, CSS, and JS to help build our features how we want
            them to work, feel, and behave.
          </p>
        </ContentCard>
      </ContentCardsWrapper>
    </CSSTransition>
  )
}
