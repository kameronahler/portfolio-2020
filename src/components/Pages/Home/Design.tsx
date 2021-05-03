// react
import React from 'react'

// components
import { SRHeader } from '../../SRHeader/SRHeader'
import { ContentCardsWrapper } from './ContentCardsWrapper'
import { ContentCard } from './ContentCard'

export const Design = () => {
  return (
    <ContentCardsWrapper>
      <SRHeader>
        <h3>What I can help with</h3>
      </SRHeader>
      <ContentCard>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam quae
          quas perferendis, consequatur aperiam eveniet quo similique doloribus.
          Minima id voluptatem, ex veniam voluptatibus nemo dolorem unde
          assumenda odio hic?
        </p>
      </ContentCard>

      <ContentCard />
      <ContentCard />
      <ContentCard />
    </ContentCardsWrapper>
  )
}
