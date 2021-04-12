// react
import React, { useState } from 'react'
import { NavLink, useLocation } from 'react-router-dom'

// packages
import styled from 'styled-components'

// theme
import { THEME } from '../../styles/Theme'

// components
import { SocialItems } from './Socialtems'
import { PageItems } from './PageItems'
import { Separator } from './Separator'

// styled
const StyledNav = styled.nav`
  align-items: flex-start;
  background-color: var(--color-bg);
  display: ${props => (props.mobileNavOpen ? 'flex' : 'none')};
  flex-direction: column;
  height: 100vh;
  left: 0;
  padding: 2rem;
  position: fixed;
  top: 0;
  width: 100vw;
  z-index: 1;

  @media (min-width: ${THEME.w.screenDesktop}) {
    display: flex;
    grid-column: 1 / 4;
    position: static;
    width: unset;
  }
`

const StyledMobileButton = styled.button`
  align-items: center;
  border-radius: 9999px;
  display: flex;
  height: 3rem;
  justify-content: center;
  line-height: 1;
  position: ${props => props.mobileNavOpen && 'absolute'};
  right: ${props => props.mobileNavOpen && '0'};
  top: ${props => props.mobileNavOpen && '0'};
  transform: ${props => props.mobileNavOpen && 'rotate(90deg)'};
  width: 3rem;
  z-index: 2;

  @media (min-width: ${THEME.w.screenDesktop}) {
    display: none;
    margin-left: unset;

    right: unset;
    top: unset;
    transform: unset;
    z-index: unset;
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
        <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 32 32'>
          <path fill='var(--color-bg)' d='M0 0h32v32H0z' />
          <path fill='var(--color-text)' d='M0 32L32 0H0v32z' />
        </svg>
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
              activeClassName={'link-gradient'}
              className='bold'
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
