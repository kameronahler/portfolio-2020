// react
import React from 'react'

// packages
import styled from 'styled-components'

// components
import { SRHeader } from '../../SRHeader/SRHeader'
import { ContentCardsWrapper } from './ContentCardsWrapper'
import { ContentCard } from './ContentCard'

// assets
import { SVGQuote } from '../../../assets/SVGQuote'
import { SVGDribbble } from '../../../assets/SVGDribbble'

// styled
const StyledBlockquote = styled.blockquote`
  margin: 0;

  svg {
    height: 4rem;
    left: -2rem;
    opacity: 0.2;
    position: absolute;
    top: -2rem;
    width: 4rem;
    z-index: -1;

    path {
      fill: var(--color-primary);
    }
  }

  cite {
    display: block;
    font-weight: var(--font-weight-bold);
    font-style: normal;
    text-align: right;
  }
`

const StyledSVGWrapper = styled.div`
  margin-bottom: 1rem;
  svg {
    display: block;
    height: 2rem;
    width: 2rem;
  }

  path {
    fill: var(--color-primary);
  }
`

export const All = () => {
  return (
    <ContentCardsWrapper>
      <SRHeader>
        <h3>What I can help with</h3>
      </SRHeader>
      <ContentCard>
        <StyledSVGWrapper>{SVGQuote}</StyledSVGWrapper>
        <StyledBlockquote>
          <p>
            Somewhere between design – a world of personas, pixels, and polish –
            and engineering – a world of logic, loops, and linux – lies frontend
            design.
          </p>
          <cite>– Brad Frost</cite>
        </StyledBlockquote>
      </ContentCard>
      <ContentCard>
        <StyledSVGWrapper>{SVGDribbble}</StyledSVGWrapper>
        <h4>Design</h4>
        <p>Design to meet user, business, and development goals.</p>
      </ContentCard>
      <ContentCard>
        <StyledSVGWrapper>{SVGDribbble}</StyledSVGWrapper>
        <h4>Contribute</h4>
        <p>
          Utilizing HTML, CSS, and Javascript to help build our features how we
          want them to work, feel, and behave.
        </p>
      </ContentCard>
      <ContentCard>
        <StyledSVGWrapper>{SVGDribbble}</StyledSVGWrapper>
        <h4>Collaborate</h4>
        <p>
          Team with developers, uncover the tricky parts of implementation, and
          plan our execution together.
        </p>
      </ContentCard>
    </ContentCardsWrapper>
  )
}
