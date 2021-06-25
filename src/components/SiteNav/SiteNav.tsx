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

// assets
import { SVGAvatar } from '../../assets/SVGAvatar'
import { SVGClose } from '../../assets/SVGClose'
import { SVGCodepen } from '../../assets/SVGCodepen'
import { SVGDribbble } from '../../assets/SVGDribbble'
import { SVGGithub } from '../../assets/SVGGithub'
import { SVGHamburger } from '../../assets/SVGHamburger'

// constant
const BUTTON_SIZE = '2.5rem'

// styled
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

const StyledLiSeparator = styled.li`
  background-image: ${({ top }: { top: boolean }) =>
    top
      ? 'linear-gradient(180deg, transparent, var(--color-text-light))'
      : 'linear-gradient(0deg, transparent, var(--color-text-light))'};
  display: block;
  margin-bottom: 1rem;
  margin-left: 1.375rem;
  margin-top: 1rem;
  flex-grow: 1;
  width: 0.0625rem;
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

const StyledLiSocial = styled.li`
  a {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 3rem;
    height: 3rem;

    svg {
      display: block;
      height: 1.5rem;
      width: 1.5rem;

      path {
        fill: var(--color-text);
        transition-duration: var(--duration-250ms);
        transition-property: fill;
        transition-timing-function: var(--easing-default);
      }
    }

    &:hover {
      path {
        fill: var(--color-primary);
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
      console.log('same')
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
              onClick={(e: MouseEvent) => handleSameLinkClick(e, '/')}
              to={'/'}
            >
              {SVGAvatar}
            </NavLink>
          </StyledLiHome>

          <StyledLiSeparator top={true} aria-hidden='true' />

          {routes.map(({ name, path }: ILinkRoute) => {
            const title = name.charAt(0).toUpperCase() + name.slice(1)

            return path !== '/' ? (
              <StyledLi key={name}>
                <NavLink
                  activeClassName={'active bold link-gradient'}
                  className='link-gradient-hover link-uppercase'
                  exact={true}
                  onClick={(e: MouseEvent) => handleSameLinkClick(e, path)}
                  to={path}
                >
                  {title}
                </NavLink>
              </StyledLi>
            ) : null
          })}

          <StyledLiSeparator aria-hidden='true' />

          <StyledLiSocial>
            <a
              target='_blank'
              href='https://github.com/kameronahler'
              aria-label='View GitHub'
            >
              {SVGGithub}
            </a>
          </StyledLiSocial>

          <StyledLiSocial>
            <a
              aria-label='View Codepen'
              href='https://codepen.io/kamtr0n'
              target='_blank'
            >
              {SVGCodepen}
            </a>
          </StyledLiSocial>

          <StyledLiSocial>
            <a
              aria-label='View Dribbble'
              href='https://dribbble.com/kamtr0n'
              target='_blank'
            >
              {SVGDribbble}
            </a>
          </StyledLiSocial>
        </StyledUl>
      </StyledNav>
    </>
  )
}
