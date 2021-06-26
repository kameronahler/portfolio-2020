// react
import React from 'react'

// packages
import styled from 'styled-components'

// components
import { SRHeader } from '../../SRHeader/SRHeader'
import { ContentCard } from './ContentCard'

// assets
import { SVGQuote } from '../../../assets/SVGQuote'
import { SVGDesign } from '../../../assets/SVGDesign'
import { SVGCollaborate } from '../../../assets/SVGCollaborate'
import { SVGFrontEnd } from '../../../assets/SVGFrontEnd'

// styled
const StyledBlockquote = styled.blockquote`
  margin: unset;

  cite {
    display: block;
    font-style: normal;
    font-weight: var(--font-weight-bold);
    text-align: right;
  }
`

export const All = () => {
  return (
    <>
      <SRHeader>
        <h3>How I can help with design and development</h3>
      </SRHeader>

      <ContentCard svg={SVGQuote}>
        <StyledBlockquote>
          <p>
            Somewhere between design – a world of personas, pixels, and polish –
            and engineering – a world of logic, loops, and linux – lies frontend
            design.
          </p>
          <cite>– Brad Frost</cite>
        </StyledBlockquote>
      </ContentCard>
      <ContentCard
        svg={SVGDesign}
        title={'Design'}
        description={
          'Design to meet user, business, and development goals, with an eye on scalability and consistency.'
        }
      />
      <ContentCard
        svg={SVGCollaborate}
        title={'Collaborate'}
        description={
          'Support other developers, uncover the tricky parts of our UX/UI, and balance our design goals with development goals.'
        }
      />
      <ContentCard
        svg={SVGFrontEnd}
        title={'Front end'}
        description={
          'Utilize HTML, CSS, and JS to help craft the feel of an app.'
        }
      />
    </>
  )
}
