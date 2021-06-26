// react
import React from 'react'

// components
import { SRHeader } from '../../SRHeader/SRHeader'
import { ContentCard } from './ContentCard'

// assets
import { SVGDiscovery } from '../../../assets/SVGDiscovery'
import { SVGUX } from '../../../assets/SVGUX'
import { SVGUI } from '../../../assets/SVGUI'
import { SVGDesignSystem } from '../../../assets/SVGDesignSystem'

export const Design = () => {
  return (
    <>
      <SRHeader>
        <h3>How I can help with design</h3>
      </SRHeader>
      <ContentCard
        svg={SVGDiscovery}
        title={'Discovery'}
        description={
          'Utilize stakeholders, user research, competitive reviews, and moodboarding to focus and frame problems and potential solutions.'
        }
      />
      <ContentCard
        svg={SVGUX}
        title={'UX'}
        description={
          'Focus on information architecture, user flow/system design, and wireframing MVP concepts.'
        }
      />
      <ContentCard
        svg={SVGUI}
        title={'UI'}
        description={
          'Design UI with accessibility, reusability, and scalability in mind.'
        }
      />
      <ContentCard
        svg={SVGDesignSystem}
        title={'Design systems'}
        description={
          'Build, maintain, and contribute to design systems in design or code, permanently working toward  consistency, flexibility, and predictability.'
        }
      />
    </>
  )
}
