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
import { SVGHTML } from '../../../assets/SVGHTML'
import { SVGCSS } from '../../../assets/SVGCSS'
import { SVGJS } from '../../../assets/SVGJS'
import { SVGAdvocate } from '../../../assets/SVGAdvocate'

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

    [stroke] {
      stroke: var(--color-primary);
    }

    [fill] {
      fill: var(--color-primary);
    }
  }
`

export const Development = () => {
  return (
    <CSSTransition appear={true} in={true} timeout={THEME.duration[500]}>
      <ContentCardsWrapper>
        <SRHeader>
          <h3>How I can help with development</h3>
        </SRHeader>

        <ContentCard
          svg={SVGHTML}
          title={'HTML'}
          description={'Write semantic, reusable, and accessible markup.'}
        />
        <ContentCard
          svg={SVGCSS}
          title={'CSS'}
          description={
            'Style, style, and keep styling. Hone our solutions across browsers, and devices. In CSS/SCSS, JS, or via a framework.'
          }
        />
        <ContentCard
          svg={SVGJS}
          title={'JS'}
          description={
            'Utilize JS for presentational/interactional interfaces. Manage state and scenarios in Vanilla or a library like React.'
          }
        />
        <ContentCard
          svg={SVGAdvocate}
          title={'Advocate'}
          description={
            'Provide guidance on styling and UX in front end code. Advocate for UX in incremental, agile development.'
          }
        />
      </ContentCardsWrapper>
    </CSSTransition>
  )
}
