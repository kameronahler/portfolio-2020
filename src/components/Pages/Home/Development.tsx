// react
import React from 'react'
import { CSSTransition } from 'react-transition-group'

// components
import { SRHeader } from '../../SRHeader/SRHeader'
import { ContentCardsWrapper } from './ContentCardsWrapper'
import { ContentCard } from './ContentCard'

// theme
import { THEME } from '../../../styles/Theme'

export const Development = () => {
  return (
    <CSSTransition appear={true} in={true} timeout={THEME.duration[500]}>
      <ContentCardsWrapper>
        <SRHeader>
          <h3>What I can help with</h3>
        </SRHeader>
        <ContentCard>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima
            accusamus iure consequuntur ducimus quis deserunt consequatur?
            Expedita veritatis quas explicabo, deleniti voluptates in
            perspiciatis dolor atque, accusantium totam nemo rem?
          </p>
        </ContentCard>
        <ContentCard />
        <ContentCard />
        <ContentCard />
      </ContentCardsWrapper>
    </CSSTransition>
  )
}
