// react
import React from 'react'
import { NavLink, useLocation } from 'react-router-dom'

// packages
import styled from 'styled-components'

// routes
import { routes } from '../../routes'

// theme
import { THEME } from '../../styles/GlobalTheme'
import { ButtonIcon } from '../Button/ButtonIcon'

// styled
const StyledSidebar = styled.nav`
  @media (min-width: ${THEME.w.screenSm}) {
    align-items: flex-start;
    display: flex;
    flex-direction: column;
    grid-column: 1 / 4;
    height: 100vh;
    padding: 2rem 0 2rem 2rem;
  } ;
`

const StyledSidebar__Ul = styled.ul`
  @media (min-width: ${THEME.w.screenSm}) {
    display: grid;
    row-gap: 1rem;
  }
`

const StyledSidebar__Li = styled.li`
  a {
    @media (min-width: ${THEME.w.screenSm}) {
      display: inline-block;
    }
  }
`

const StyledSidebar__SocialWrapper = styled.div`
  @media (min-width: ${THEME.w.screenSm}) {
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    left: -1rem;
    position: relative;
  }
`

const StyledSidebar__Separator = styled.span`
  display: hidden;

  @media (min-width: ${THEME.w.screenSm}) {
    background-color: var(--color-text-light);
    display: block;
    margin-bottom: 2rem;
    margin-left: 1rem;
    margin-top: 2rem;
    flex-grow: 1;
    width: 0.0625rem;
  }
`

export const Sidebar = () => {
  const location: ILocation = useLocation()

  const jsxListItems = routes.map(({ name, path }: IRoutes) => {
    const title = name.charAt(0).toUpperCase() + name.slice(1)

    return (
      <StyledSidebar__Li key={name}>
        <NavLink
          activeStyle={{ fontWeight: 'bold' }}
          activeClassName={'link-gradient'}
          className='link-gradient-hover'
          exact={true}
          onClick={
            location.pathname === path
              ? (e: MouseEvent) => {
                  e.preventDefault()
                }
              : null
          }
          to={path}
        >
          {title}
        </NavLink>
      </StyledSidebar__Li>
    )
  })

  return (
    <StyledSidebar>
      <StyledSidebar__Ul>{jsxListItems}</StyledSidebar__Ul>

      <StyledSidebar__SocialWrapper>
        <StyledSidebar__Separator />
        <ButtonIcon href='#' targetBlank={true} ariaLabel='View me on GitHub'>
          <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 496 512'>
            <path d='M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2 .6-2-1.3-4.3-4.3-5.2-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252a250.7 250.7 0 00169.5 239.2c12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9a94.5 94.5 0 012.6-67.9c20.9-6.5 69 27 69 27a235 235 0 01125.6 0s48.1-33.6 69-27a94.4 94.4 0 012.6 67.9c16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z' />
          </svg>
        </ButtonIcon>
        <ButtonIcon targetBlank={true} href='#' ariaLabel='Codepen'>
          <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'>
            <path d='M502.3 159.7l-234-156c-8-5-16.5-5-24.6 0l-234 156c-6 4-9.7 11.1-9.7 18.3v156c0 7.1 3.7 14.3 9.7 18.3l234 156c8 5 16.5 5 24.6 0l234-156c6-4 9.7-11.2 9.7-18.3V178c0-7.2-3.7-14.3-9.7-18.3zM278 63.1L450.3 178l-76.9 51.4-95.4-63.7V63.1zm-44 0v102.6l-95.4 63.7L61.7 178 234 63zm-190 156L99.1 256 44 292.8v-73.7zm190 229.7L61.7 334l76.9-51.4 95.4 63.7v102.5zM256 308l-77.7-52 77.7-52 77.7 52-77.7 52zm22 140.8V346.3l95.4-63.7 76.9 51.4L278 448.8zm190-156L412.9 256 468 219v73.7z' />
          </svg>
        </ButtonIcon>
        <ButtonIcon targetBlank={true} href='#' ariaLabel='Dribbble'>
          <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'>
            <path d='M256 8A248.3 248.3 0 008 256c0 136.7 111.3 248 248 248s248-111.3 248-248S392.7 8 256 8zm164 114.4c29.5 36 47.3 82 47.8 132a495 495 0 00-147.5-6.9c-5.7-14-11.2-26.4-18.6-41.6 78.3-32 113.8-77.5 118.3-83.5zm-23.6-24.5c-3.8 5.4-35.7 48.3-111 76.5a1130.7 1130.7 0 00-79-124c67.1-16.2 138 1.3 190 47.5zM166 64.6c5.6 7.7 43.5 60.1 78.6 122.5-99.1 26.3-186.4 26-195.9 25.8A212.6 212.6 0 01166 64.6zM44.2 256.3v-6.5c9.3.2 112 1.6 217.8-30.1 6 11.9 11.8 24 17.2 36C202.6 277.2 133 339.2 98.6 398a211 211 0 01-54.4-141.7zM126 423.4c22.1-45.2 82.2-103.6 167.6-132.7 29.7 77.3 42 142 45.1 160.6-68 29-150 21-212.7-27.9zm248.4 8.5a914.3 914.3 0 00-41.2-151 311 311 0 01132 9 212.2 212.2 0 01-90.8 142z' />
          </svg>
        </ButtonIcon>
      </StyledSidebar__SocialWrapper>
    </StyledSidebar>
  )
}
