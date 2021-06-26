// react
import React from 'react'

// packages
import styled from 'styled-components'

// theme
import { useScrollTop } from '../../../hooks/hooks'

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

const StyledNavButton = styled.button`
  align-items: center;
  background-color: var(--color-bg-accent);
  border-radius: 9999px;
  border: 1px solid var(--color-primary);
  display: flex;
  line-height: 1;
  padding: 0.25rem;
  transition-duration: var(--duration-250ms);
  transition-property: border;
  transition-timing-function: var(--easing-default);
  z-index: var(--z-above-nav);

  @media (min-width: ${THEME.w.screenSm}) {
    transition-duration: var(--duration-250ms);
    transition-property: background-color, transform;
    transition-timing-function: var(--easing-default);
  }

  &:hover {
    background-color: var(--color-primary);

    path {
      stroke: var(--color-text);
    }
  }

  ${StyledNav}:hover li:first-of-type & {
    @media (min-width: ${THEME.w.screenSm}) {
      transform: translateX(-0.25rem);
    }
  }

  ${StyledNav}:hover li:last-of-type & {
    @media (min-width: ${THEME.w.screenSm}) {
      transform: translateX(0.25rem);
    }
  }

  svg {
    display: block;
    height: 2rem;
    width: 2rem;

    path {
      stroke: var(--color-primary);
      transition-duration: var(--duration-250ms);
      transition-property: stroke;
      transition-timing-function: var(--easing-default);
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
        <li>
          <StyledNavButton
            aria-label='Previous article'
            disabled={currentTagIndex - 1 >= 0 ? false : true}
            onClick={() => handleTagChange(-1)}
          >
            {SVGChevronLeft}
          </StyledNavButton>
        </li>
        <li>
          <StyledNavButton
            aria-label='Next article'
            disabled={currentTagIndex + 1 < totalTags ? false : true}
            onClick={() => handleTagChange(1)}
          >
            {SVGChevronRight}
          </StyledNavButton>
        </li>
      </StyledUl>
    </StyledNav>
  )
}
