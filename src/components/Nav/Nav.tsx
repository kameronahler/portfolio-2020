// react
import React, { useState } from 'react'
import { NavLink, useLocation } from 'react-router-dom'

// packages
import styled from 'styled-components'

// theme
import { THEME } from '../../styles/Theme'

// components
import { PageItems } from './PageItems'
import { Separator } from './Separator'
import { SocialItems } from './Socialtems'

// assets
import { SVGHamburger } from '../../assets/SVGHamburger'
import { SVGClose } from '../../assets/SVGClose'

// constant
const BUTTON_SIZE = '3rem'

// styled
const StyledNav = styled.nav`
  align-items: flex-start;
  background-color: var(--color-bg);
  display: flex;
  flex-direction: column;
  height: 100vh;
  left: 0;
  opacity: ${({ mobileNavOpen }: { mobileNavOpen: boolean }) =>
    mobileNavOpen ? '1' : '0'};
  padding: var(--p-card);
  position: fixed;
  top: 0;
  transition: var(--duration-250ms) opacity var(--duration-250ms);
  visibility: ${({ mobileNavOpen }: { mobileNavOpen: boolean }) =>
    mobileNavOpen ? 'visible' : 'hidden'};
  width: 100vw;
  z-index: ${({ mobileNavOpen }: { mobileNavOpen: boolean }) =>
    mobileNavOpen ? 'var(--z-nav)' : '-1'};

  @media (min-width: ${THEME.w.screenDesktop}) {
    display: flex;
    grid-column: 1 / 2;
    height: calc(100vh - (2 * var(--p-card)));
    left: unset;
    opacity: 1;
    position: fixed;
    padding: unset;
    top: var(--p-card);
    visibility: visible;
    width: unset;
    z-index: auto;
  }
`

const StyledMobileButton = styled.button`
  --button-size: ${BUTTON_SIZE};
  --border-size: calc(var(--button-size) / 2);

  align-items: center;
  border-color: ${({ mobileNavOpen }: { mobileNavOpen: boolean }) =>
    mobileNavOpen
      ? 'var(--color-primary)'
      : 'var(--color-primary) transparent transparent var(--color-primary)'};
  border-style: solid;
  border-width: var(--border-size) var(--border-size) var(--border-size)
    var(--border-size);
  display: flex;
  height: var(--button-size);
  justify-content: center;
  left: 0;
  line-height: 1;
  position: fixed;
  top: 0;
  transform: ${({ mobileNavOpen }: { mobileNavOpen: boolean }) =>
    mobileNavOpen && `translateX(calc(100vw - var(--button-size)))`};
  transform-origin: 50% 50%;
  transition-duration: var(--duration-250ms);
  transition-property: ${({ mobileNavOpen }: { mobileNavOpen: boolean }) =>
    mobileNavOpen ? 'transform' : 'transform border'};
  transition-timing-function: var(--easing-default);
  width: var(--button-size);
  z-index: var(--z-above-nav);

  &:hover,
  &:focus-visible {
    border-color: var(--color-primary);
  }

  @media (min-width: ${THEME.w.screenDesktop}) {
    display: none;
  }
`

const StyledMobileButtonSVGWrapper = styled.span`
  --button-size: ${BUTTON_SIZE};

  align-items: center;
  display: flex;
  height: calc(-1 * var(--button-size) / 2);
  justify-content: center;
  left: calc(-1 * var(--button-size) / 2);
  opacity: ${({ mobileNavOpen }: { mobileNavOpen: boolean }) =>
    mobileNavOpen ? '1' : '0'};
  position: absolute;
  width: var(--button-size);

  ${StyledMobileButton}:hover & {
    opacity: 1;
    transition: var(--duration-250ms) var(--easing-default) opacity;
  }

  svg {
    display: block;
    height: 2rem;
    width: 2rem;

    rect {
      fill: var(--color-text-inverse);
    }
  }
`

const StyledUl = styled.ul`
  display: flex;
  flex-direction: column;
  height: 100%;
`

const StyledLiHome = styled.li`
  a {
    align-items: center;
    border-radius: 9999px;
    color: var(--color-text);
    display: flex;
    padding: 0.5rem 0.75rem;

    &::after {
      align-self: center;
      background-color: var(--color-primary);
      border-radius: 999px;
      content: '';
      margin-left: 1rem;
      height: 0.5rem;
      transform: scale(0);
      transition: var(--easing-default) var(--duration-250ms) transform;
      width: 0.5rem;
    }

    &.active {
      &::after {
        transform: scale(1);
      }
    }
  }
`

export const Nav = () => {
  const location: ILocation = useLocation()
  const [mobileNavOpen, setMobileNavOpen] = useState<boolean>(false)

  return (
    <>
      <StyledMobileButton
        aria-controls='nav'
        aria-haspopup='true'
        aria-label={mobileNavOpen ? 'Close menu' : 'Open menu'}
        mobileNavOpen={mobileNavOpen}
        onClick={() => setMobileNavOpen(!mobileNavOpen)}
      >
        <StyledMobileButtonSVGWrapper mobileNavOpen={mobileNavOpen}>
          {mobileNavOpen ? SVGClose : SVGHamburger}
        </StyledMobileButtonSVGWrapper>
      </StyledMobileButton>

      <StyledNav
        aria-expanded={mobileNavOpen}
        aria-hidden={mobileNavOpen}
        id='nav'
        mobileNavOpen={mobileNavOpen}
      >
        <StyledUl>
          <StyledLiHome>
            <NavLink
              activeClassName={'active link-gradient'}
              className='bold link-uppercase link-gradient-hover'
              exact={true}
              onClick={(e: Event) => {
                if (location.pathname === '/') {
                  e.preventDefault()
                }
                setMobileNavOpen(false)
              }}
              to={'/'}
            >
              KA
            </NavLink>
          </StyledLiHome>
          <Separator />
          <PageItems setMobileNavOpen={setMobileNavOpen} location={location} />
          <Separator />
          <SocialItems />
        </StyledUl>
      </StyledNav>
    </>
  )
}
