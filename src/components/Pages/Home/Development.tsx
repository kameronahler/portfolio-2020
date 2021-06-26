// react
import React from 'react'

// components
import { SRHeader } from '../../SRHeader/SRHeader'
import { ContentCard } from './ContentCard'

// assets
import { SVGHTML } from '../../../assets/SVGHTML'
import { SVGCSS } from '../../../assets/SVGCSS'
import { SVGJS } from '../../../assets/SVGJS'
import { SVGAdvocate } from '../../../assets/SVGAdvocate'

export const Development = () => {
  return (
    <>
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
    </>
  )
}
