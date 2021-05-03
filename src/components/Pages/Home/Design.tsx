// react
import React from 'react'
import { CSSTransition } from 'react-transition-group'

// components
import { SRHeader } from '../../SRHeader/SRHeader'
import { ContentCardsWrapper } from './ContentCardsWrapper'
import { ContentCard } from './ContentCard'

// theme
import { THEME } from '../../../styles/Theme'

export const Design = () => {
  return (
    <CSSTransition appear={true} in={true} timeout={THEME.duration[500]}>
      <ContentCardsWrapper>
        <SRHeader>
          <h3>What I can help with</h3>
        </SRHeader>
        <ContentCard>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam quae
            quas perferendis, consequatur aperiam eveniet quo similique
            doloribus. Minima id voluptatem, ex veniam voluptatibus nemo dolorem
            unde assumenda odio hic?
          </p>
        </ContentCard>

        <ContentCard />
        <ContentCard />
        <ContentCard />
      </ContentCardsWrapper>
    </CSSTransition>
  )
}
