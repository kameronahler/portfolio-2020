// react
import React from 'react'

// components
import { SRHeader } from '../../SRHeader/SRHeader'
import { ContentCardsWrapper } from './ContentCardsWrapper'
import { ContentCard } from './ContentCard'

export const Development = () => {
  return (
    <ContentCardsWrapper>
      <SRHeader>
        <h3>What I can help with</h3>
      </SRHeader>
      <ContentCard>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima
          accusamus iure consequuntur ducimus quis deserunt consequatur?
          Expedita veritatis quas explicabo, deleniti voluptates in perspiciatis
          dolor atque, accusantium totam nemo rem?
        </p>
      </ContentCard>
      <ContentCard />
      <ContentCard />
      <ContentCard />
    </ContentCardsWrapper>
  )
}
