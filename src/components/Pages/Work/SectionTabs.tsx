// react
import React from 'react'

// packages
import styled from 'styled-components'

// theme
import { THEME } from '../../../styles/theme'

// constants
const OVERFLOW_GRADIENT = '2rem'
const OVERFLOW_GRADIENT_SM = '8rem'

// styled
const StyledNav = styled.nav`
  margin-bottom: 1rem;
  position: relative;

  &::before {
    background-image: linear-gradient(90deg, transparent, var(--color-bg));
    content: '';
    height: 100%;
    position: absolute;
    right: -1px;
    top: 0;
    z-index: 1;
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
  display: flex;
  overflow-x: scroll;
  padding-bottom: 2rem;
  padding-top: 0.5rem;
`

const StyledLi = styled.li`
  margin-right: 2rem;
  position: relative;

  &:last-of-type {
    border-right: ${OVERFLOW_GRADIENT} solid transparent;

    @media (min-width: ${THEME.w.screenSm}) {
      border-right-width: ${OVERFLOW_GRADIENT_SM};
    }
  }

  &::before {
    background-color: var(--color-primary);
    border-radius: 999px;
    content: '';
    height: 0.5rem;
    left: 50%;
    position: absolute;
    bottom: -0.5rem;
    transition: var(--easing-default) var(--duration-250ms) transform;
    transform: translateX(-50%)
      ${({ currentTab }: { currentTab: boolean }) =>
        currentTab ? 'scale(1)' : 'scale(0)'};
    width: 0.5rem;
  }

  button {
    color: transparent;
    display: block;
    font-weight: var(--font-weight-bold);
    padding: 0.5rem 0;
    position: relative;
    transform-origin: 50% 50%;

    &::after {
      color: var(--color-text);
      content: attr(data-tab);
      font-weight: ${({ currentTab }: { currentTab: boolean }) =>
        currentTab ? 'var(--font-weight-bold)' : 'var(--font-weight-default)'};
      left: 0;
      padding: 0.5rem 0;
      position: absolute;
      top: 0;
      width: 100%;

      ${({ currentTab }: { currentTab: boolean }) =>
        currentTab &&
        `
        background-image: linear-gradient(
          45deg,
          var(--color-primary),
          var(--color-primary-light)
        );
        background-clip: text;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
      `}
    }

    &:hover::after {
      background-image: linear-gradient(
        45deg,
        var(--color-primary),
        var(--color-primary-light)
      );
      background-clip: text;
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }
  }
`

export const SectionTabs = ({ currentTab, setCurrentTab }: ISectionTabs) => {
  return (
    <StyledNav>
      <StyledUl role='tablist' aria-label='Select which kind of work'>
        <StyledLi currentTab={currentTab === 'portfolioPost' ? true : false}>
          <button
            aria-controls='portfolioPost'
            aria-selected={currentTab === 'portfolioPost' ? true : false}
            className='link-uppercase'
            data-tab='Overview'
            onClick={() => setCurrentTab('portfolioPost')}
            role='tab'
          >
            Overview
          </button>
        </StyledLi>
        <StyledLi currentTab={currentTab === 'blogPost' ? true : false}>
          <button
            aria-controls='blogPost'
            aria-selected={currentTab === 'blogPost' ? true : false}
            className='link-uppercase'
            data-tab='Recent'
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
            className='link-uppercase'
            data-tab='Dribbble'
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
