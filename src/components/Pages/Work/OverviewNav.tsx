// react
import React from 'react'

// packages
import styled from 'styled-components'

// hooks
import { useScrollTop } from '../../../hooks/hooks'

// theme
import { ButtonIcon } from '../../ButtonIcon/ButtonIcon'

// theme
import { THEME } from '../../../styles/Theme'

// assets
import { SVGChevronLeft } from '../../../assets/SVGChevronLeft'
import { SVGChevronRight } from '../../../assets/SVGChevronRight'

// styled
const StyledNav = styled.nav`
  background-color: var(--color-bg);
  display: grid;
  padding-left: 3.5rem;
  padding-right: 3.5rem;
  margin-bottom: 2rem;
  position: relative;

  @media (min-width: ${THEME.w.screenSm}) {
    align-items: flex-start;
    column-gap: 1rem;
    grid-template-columns: 1fr auto;
    justify-content: start;
    margin-bottom: 1rem;
    padding: 1rem 0;
    position: sticky;
    top: 0;
    z-index: var(--z-beneath-nav);
  }
`

const StyledHeader = styled.header`
  h2 {
    font-size: var(--font-size-h4-clamp);
    margin-bottom: 0;
    text-align: center;

    @media (min-width: ${THEME.w.screenSm}) {
      font-size: var(--font-size-h3-clamp);
      padding-bottom: 0.75rem;
      position: relative;
      text-align: unset;
    }

    &::before {
      @media (min-width: ${THEME.w.screenSm}) {
        background-color: var(--color-primary);
        border-radius: 9999px;
        bottom: 0;
        content: '';
        height: 0.125rem;
        left: 0;
        position: absolute;
        width: 3rem;
        z-index: -1;
      }
    }
  }
`

const StyledUl = styled.ul`
  display: flex;
  justify-content: space-between;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 100%;

  @media (min-width: ${THEME.w.screenSm}) {
    justify-content: unset;
    padding-right: 2rem;
    position: static;
    top: unset;
    transform: unset;
  }

  @media (min-width: ${THEME.w.screenDesktop}) {
    padding-right: unset;
  }

  li:first-of-type {
    @media (min-width: ${THEME.w.screenSm}) {
      margin-right: 1rem;
    }
  }
`

const StyledTransitionLi = styled.li`
  @media (min-width: ${THEME.w.screenSm}) {
    transition-duration: var(--duration-250ms);
    transition-property: transform;
    transition-timing-function: var(--easing-default);
  }

  ${StyledNav}:hover &:first-of-type {
    @media (min-width: ${THEME.w.screenSm}) {
      transform: translateX(-0.25rem);
    }
  }

  ${StyledNav}:hover &:last-of-type {
    @media (min-width: ${THEME.w.screenSm}) {
      transform: translateX(0.25rem);
    }
  }
`

export const OverviewNav = ({
  currentTagIndex,
  currentTagTitle,
  setCurrentTagIndex,
  totalTags,
}: IOverviewNav) => {
  const handleTagChange = (increment: number) => {
    useScrollTop()
    setCurrentTagIndex(currentTagIndex + increment)
  }

  return (
    <StyledNav>
      <StyledHeader className='truncate'>
        <h2>{currentTagTitle}</h2>
      </StyledHeader>
      <StyledUl>
        <StyledTransitionLi>
          <ButtonIcon
            aria-label='Previous article'
            disabled={currentTagIndex - 1 >= 0 ? false : true}
            onClick={() => handleTagChange(-1)}
          >
            {SVGChevronLeft}
          </ButtonIcon>
        </StyledTransitionLi>
        <StyledTransitionLi>
          <ButtonIcon
            aria-label='Next article'
            disabled={currentTagIndex + 1 < totalTags ? false : true}
            onClick={() => handleTagChange(1)}
          >
            {SVGChevronRight}
          </ButtonIcon>
        </StyledTransitionLi>
      </StyledUl>
    </StyledNav>
  )
}
