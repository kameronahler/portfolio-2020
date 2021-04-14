// react
import React from 'react'

// components
import { SRHeader } from '../../SRHeader/SRHeader'
import { ContentInnerWrapper } from './ContentInnerWrapper'
import { ContentDescriptionWrapper } from './ContentDescriptionWrapper'
import { ContentCardsWrapper } from './ContentCardsWrapper'
import { ContentCard } from './ContentCard'

// assets
import favicon from 'url:../../../assets/favicon.svg'

export const Design = () => {
  return (
    <ContentInnerWrapper>
      <ContentDescriptionWrapper>
        <SRHeader>
          <h3>Description</h3>
        </SRHeader>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam quae
          quas perferendis, consequatur aperiam eveniet quo similique doloribus.
          Minima id voluptatem, ex veniam voluptatibus nemo dolorem unde
          assumenda odio hic?
        </p>
      </ContentDescriptionWrapper>

      <ContentCardsWrapper>
        <SRHeader>
          <h3>What I can help with</h3>
        </SRHeader>
        <ContentCard alt='' title='design thing' src={favicon} />
        <ContentCard alt='' title='design thing' src={favicon} />
        <ContentCard alt='' title='design thing' src={favicon} />
      </ContentCardsWrapper>
    </ContentInnerWrapper>
  )
}
