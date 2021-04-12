// react
import React from 'react'

// components
import { Header } from '../../Header/Header'
import { ContentInnerWrapper } from './ContentInnerWrapper'
import { ContentDescriptionWrapper } from './ContentDescriptionWrapper'
import { ContentCardsWrapper } from './ContentCardsWrapper'
import { ContentCard } from './ContentCard'

// assets
import favicon from 'url:../../../assets/favicon.svg'

export const Development = () => {
  return (
    <ContentInnerWrapper>
      <ContentDescriptionWrapper>
        <Header srOnly={true}>
          <h3>Description</h3>
        </Header>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima
          accusamus iure consequuntur ducimus quis deserunt consequatur?
          Expedita veritatis quas explicabo, deleniti voluptates in perspiciatis
          dolor atque, accusantium totam nemo rem?
        </p>
      </ContentDescriptionWrapper>

      <ContentCardsWrapper>
        <Header srOnly={true}>
          <h3>What I can help with</h3>
        </Header>
        <ContentCard alt='' title='development thing' src={favicon} />
        <ContentCard alt='' title='development thing' src={favicon} />
        <ContentCard alt='' title='development thing' src={favicon} />
      </ContentCardsWrapper>
    </ContentInnerWrapper>
  )
}
