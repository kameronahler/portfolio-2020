// react
import React, { useCallback, useState } from 'react'
import { NavLink, useLocation } from 'react-router-dom'

// packages
import styled from 'styled-components'

// routes
import { routes } from '../../routes'

// helpers
import { useToggleBodyOverflow } from '../../hooks/hooks'

// theme
import { THEME } from '../../styles/Theme'

// components
import { Darkmode } from './Darkmode'
import { Separator } from './Separator'
import { SocialItems } from './Socialtems'

// assets
import { SVGHamburger } from '../../assets/SVGHamburger'
import { SVGClose } from '../../assets/SVGClose'
import { SVGAvatar } from '../../assets/SVGAvatar'

// constant
const BUTTON_SIZE = '2.5rem'

// styled
const StyledNav = styled.nav`
  align-items: flex-start;
  background-color: var(--color-bg);
  display: flex;
  font-family: var(--font-heading);
  flex-direction: column;
  height: 100vh;
  left: 0;
  opacity: ${({ mobileNavOpen }: { mobileNavOpen: boolean }) =>
    mobileNavOpen ? '1' : '0'};
  padding: 0.5rem var(--p-card) var(--p-card);
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
    min-width: 11rem;
    opacity: 1;
    padding: unset;
    position: fixed;
    top: var(--p-card);
    visibility: visible;
    width: unset;
    z-index: auto;
  }
`

const StyledMobileButton = styled.button`
  --button-size: ${BUTTON_SIZE};

  align-items: center;
  background-color: var(--color-primary);
  border-radius: 0 0 0 0.75rem;
  display: flex;
  height: ${({ mobileNavOpen }: { mobileNavOpen: boolean }) =>
    mobileNavOpen ? '3rem' : 'var(--button-size)'};
  justify-content: center;
  right: 0;
  line-height: 1;
  position: fixed;
  top: 0;
  width: ${({ mobileNavOpen }: { mobileNavOpen: boolean }) =>
    mobileNavOpen ? '3rem' : 'var(--button-size)'};
  transition-duration: var(--duration-250ms);
  transition-property: height, width;
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
  transition-duration: var(--duration-250ms);
  transition-property: transform;
  transition-timing-function: var(--easing-default);

  ${StyledMobileButton}:hover & {
    opacity: 1;
    transition: var(--duration-250ms) var(--easing-default) opacity;
  }

  svg {
    display: block;
    height: 2rem;
    width: 2rem;

    rect {
      fill: var(--color-white);
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
    display: inline-flex;
    padding: 0.5rem 0 0.5rem 0.5rem;

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

  svg {
    width: 2rem;
    height: 2rem;
  }
`

const StyledLi = styled.li`
  a {
    display: inline-flex;
    padding: 0.5rem 0.75rem;
    position: relative;

    &::after {
      align-self: center;
      background-color: var(--color-primary);
      border-radius: 999px;
      content: '';
      height: 0.5rem;
      margin-left: 1rem;
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

export const SiteNav = () => {
  const location: ILocation = useLocation()
  const [mobileNavOpen, setMobileNavOpen] = useState<boolean>(false)

  // handlers
  const openMobileNav = useCallback(() => {
    window.addEventListener('keydown', handleCloseWithEscape)
    useToggleBodyOverflow(true)
    setMobileNavOpen(true)
  }, [])

  const closeMobileNav = useCallback(() => {
    window.removeEventListener('keydown', handleCloseWithEscape)
    useToggleBodyOverflow(false)
    setMobileNavOpen(false)
  }, [])

  const handleCloseWithEscape = (e: KeyboardEvent) => {
    if (e.key === 'Escape') {
      closeMobileNav()
    }
  }

  const handleMobileMenuToggle = () => {
    if (mobileNavOpen) {
      closeMobileNav()
    } else {
      openMobileNav()
    }
  }

  const handleSameLinkClick = (e: MouseEvent, path: string) => {
    if (location.pathname === path) {
      e.preventDefault()
    } else {
      closeMobileNav()
    }
  }

  return (
    <>
      <StyledMobileButton
        aria-controls='nav'
        aria-haspopup='true'
        aria-label={mobileNavOpen ? 'Close menu' : 'Open menu'}
        mobileNavOpen={mobileNavOpen}
        onClick={handleMobileMenuToggle}
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
        <Darkmode />
        <StyledUl>
          <StyledLiHome>
            <NavLink
              activeClassName={'active'}
              aria-label='Home'
              exact={true}
              onClick={(e: MouseEvent, path: string) =>
                handleSameLinkClick(e, path)
              }
              to={'/'}
            >
              {SVGAvatar}
            </NavLink>
          </StyledLiHome>
          <Separator top={true} aria-hidden='true' />
          {routes.map(({ name, path }: IRoutes) => {
            const title = name.charAt(0).toUpperCase() + name.slice(1)

            return path !== '/' ? (
              <StyledLi key={name}>
                <NavLink
                  activeClassName={'active bold link-gradient'}
                  className='link-gradient-hover link-uppercase'
                  exact={true}
                  onClick={(e: MouseEvent, path: string) =>
                    handleSameLinkClick(e, path)
                  }
                  to={path}
                >
                  {title}
                </NavLink>
              </StyledLi>
            ) : null
          })}
          <Separator aria-hidden='true' />
          <SocialItems />
        </StyledUl>
      </StyledNav>
    </>
  )
}
