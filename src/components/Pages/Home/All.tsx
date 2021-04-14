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

export const All = () => {
  return (
    <ContentInnerWrapper>
      <ContentDescriptionWrapper>
        <SRHeader>
          <h3>Description</h3>
        </SRHeader>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia rem,
          vero laborum temporibus cumque consequuntur, odit, similique quos et
          provident illum eligendi minima. Dolores praesentium veritatis fuga
          rem voluptas! Id?
        </p>
      </ContentDescriptionWrapper>

      <ContentCardsWrapper>
        <SRHeader>
          <h3>What I can help with</h3>
        </SRHeader>
        <ContentCard alt='' title='unicorny thing' src={favicon} />
        <ContentCard alt='' title='unicorny thing' src={favicon} />
        <ContentCard alt='' title='unicorny thing' src={favicon} />
      </ContentCardsWrapper>
    </ContentInnerWrapper>
  )
}
