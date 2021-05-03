// react
import React from 'react'

// components
import { SRHeader } from '../../SRHeader/SRHeader'
import { ContentInnerWrapper } from './ContentInnerWrapper'
import { ContentCard } from './ContentCard'

// assets
import favicon from 'url:../../../assets/favicon.svg'

export const All = () => {
  return (
    <ContentInnerWrapper>
      <SRHeader>
        <h3>What I can help with</h3>
      </SRHeader>
      <ContentCard>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia rem,
          vero laborum temporibus cumque consequuntur, odit, similique quos et
          provident illum eligendi minima. Dolores praesentium veritatis fuga
          rem voluptas! Id?
        </p>
      </ContentCard>
      <ContentCard alt='' title='unicorny thing' src={favicon} />
      <ContentCard alt='' title='unicorny thing' src={favicon} />
      <ContentCard alt='' title='unicorny thing' src={favicon} />
    </ContentInnerWrapper>
  )
}
