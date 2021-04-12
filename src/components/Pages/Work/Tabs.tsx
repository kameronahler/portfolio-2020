// react
import React from 'react'

// packages
import styled from 'styled-components'

// theme
import { THEME } from '../../../styles/theme'

// constants
const OVERFLOW_GRADIENT = '1rem'
const OVERFLOW_GRADIENT_SM = '8rem'

// styled
const StyledNav = styled.nav`
  position: relative;

  &::before {
    background-image: linear-gradient(90deg, transparent, var(--color-bg));
    content: '';
    height: 100%;
    position: absolute;
    right: 0;
    top: 0;
    width: ${OVERFLOW_GRADIENT};

    @media (min-width: ${THEME.w.screenSm}) {
      width: ${OVERFLOW_GRADIENT_SM};
    }
    @media (min-width: ${THEME.w.screenDesktop}) {
      width: ${OVERFLOW_GRADIENT_SM};
    }
  }
`

const StyledUl = styled.ul`
  column-gap: 3rem;
  display: grid;
  grid-auto-flow: column;
  grid-template-columns: auto;
  justify-content: flex-start;
  overflow-x: scroll;
  overflow-y: hidden;
  padding-bottom: 2rem;
  width: 100%;
`

const StyledLi = styled.li`
  &:last-of-type {
    padding-right: ${OVERFLOW_GRADIENT};

    @media (min-width: ${THEME.w.screenSm}) {
      padding-right: ${OVERFLOW_GRADIENT_SM};
    }

    @media (min-width: ${THEME.w.screenDesktop}) {
      padding-right: ${OVERFLOW_GRADIENT_SM};
    }
  }

  button {
    display: block;
    padding: 0.5rem 0;
    transform-origin: 0% 50%;

    ${({ currentTab }: { currentTab: boolean }) =>
      currentTab
        ? `
        font-weight: var(--font-weight-bold);
        transform: scale(1.2);
        transition: var(--easing-cubic) 0.2s transform;
        `
        : ''};
  }
`

export const Tabs = ({ currentTab, setCurrentTab }) => {
  return (
    <StyledNav>
      <StyledUl role='tablist' aria-label='Select which kind of work'>
        <StyledLi currentTab={currentTab === 'portfolioPost' ? true : false}>
          <button
            aria-controls='portfolioPost'
            aria-selected={currentTab === 'portfolioPost' ? true : false}
            className={
              currentTab === 'portfolioPost'
                ? 'link-gradient link-gradient'
                : 'link-gradient-hover'
            }
            onClick={() => setCurrentTab('portfolioPost')}
            role='tab'
          >
            Portfolio
          </button>
        </StyledLi>
        <StyledLi currentTab={currentTab === 'blogPost' ? true : false}>
          <button
            aria-controls='blogPost'
            aria-selected={currentTab === 'blogPost' ? true : false}
            className={
              currentTab === 'blogPost'
                ? 'link-gradient link-gradient'
                : 'link-gradient-hover'
            }
            onClick={() => setCurrentTab('blogPost')}
            role='tab'
          >
            Recent
          </button>
        </StyledLi>
        <StyledLi currentTab={currentTab === 'dribbble' ? true : false}>
          <button
            aria-controls='dribbble'
            aria-selected={currentTab === 'dribbble' ? true : false}
            className={
              currentTab === 'dribbble'
                ? 'link-gradient link-gradient'
                : 'link-gradient-hover'
            }
            onClick={() => setCurrentTab('dribbble')}
            role='tab'
          >
            Dribbble
          </button>
        </StyledLi>
      </StyledUl>
    </StyledNav>
  )
}
