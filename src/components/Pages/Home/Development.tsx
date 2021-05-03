// react
import React from 'react'

// components
import { SRHeader } from '../../SRHeader/SRHeader'
import { ContentInnerWrapper } from './ContentInnerWrapper'
import { ContentDescriptionWrapper } from './ContentDescriptionWrapper'
import { ContentCard } from './ContentCard'

// assets
import favicon from 'url:../../../assets/favicon.svg'

export const Development = () => {
  return (
    <ContentInnerWrapper>
      <SRHeader>
        <h3>What I can help with</h3>
      </SRHeader>
      <ContentDescriptionWrapper>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima
          accusamus iure consequuntur ducimus quis deserunt consequatur?
          Expedita veritatis quas explicabo, deleniti voluptates in perspiciatis
          dolor atque, accusantium totam nemo rem?
        </p>
      </ContentDescriptionWrapper>
      <ContentCard alt='' title='development thing' src={favicon} />
      <ContentCard alt='' title='development thing' src={favicon} />
      <ContentCard alt='' title='development thing' src={favicon} />
    </ContentInnerWrapper>
  )
}
