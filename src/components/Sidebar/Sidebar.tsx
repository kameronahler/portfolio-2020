// react
import React from 'react'
import { NavLink, useLocation } from 'react-router-dom'

// packages
import styled from 'styled-components'

// routes
import { routes } from '../../routes'

// theme
import { THEME } from '../../styles/GlobalTheme'

// styled
const StyledSidebar = styled.nav`
  @media (min-width: ${THEME.w.screenSm}) {
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
    </StyledSidebar>
  )
}
