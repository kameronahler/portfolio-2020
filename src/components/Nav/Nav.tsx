// react
import React, { useState } from 'react'
import { NavLink, useLocation } from 'react-router-dom'

// packages
import styled from 'styled-components'
import { SVGHamburger } from '../../assets/SVGHamburger'

// theme
import { THEME } from '../../styles/Theme'

// components
import { PageItems } from './PageItems'
import { Separator } from './Separator'
import { SocialItems } from './Socialtems'

// styled
const StyledNav = styled.nav`
  align-items: flex-start;
  background-color: var(--color-bg);
  display: ${({ mobileNavOpen }: { mobileNavOpen: boolean }) =>
    mobileNavOpen ? 'flex' : 'none'};
  flex-direction: column;
  height: calc(100vh - (2 * var(--p-card)));
  left: var(--p-card);
  position: fixed;
  top: var(--p-card);
  width: 100vw;
  z-index: 1;

  @media (min-width: ${THEME.w.screenDesktop}) {
    display: flex;
    grid-column: 1 / 2;
    width: unset;
  }
`

const StyledMobileButton = styled.button`
  align-items: center;
  border-radius: 9999px;
  display: flex;
  height: 3rem;
  justify-content: center;
  left: 0;
  line-height: 1;
  position: fixed;
  top: 0;
  width: 3rem;
  z-index: 2;

  @media (min-width: ${THEME.w.screenDesktop}) {
    display: none;
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
    height: 3rem;
    justify-content: center;
    width: 3rem;

    &.active {
      transition: var(--easing-cubic) var(--duration-normal-ms) transform;
      transform: scale(1.2);
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
        {SVGHamburger}
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
              activeClassName={'link-gradient active'}
              className='bold link-gradient-hover'
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
