// react
import React from 'react'
import { NavLink } from 'react-router-dom'

// packages
import styled from 'styled-components'

// routes
import { routes } from '../../routes'

// theme
import { THEME } from '../../styles/GlobalTheme'

// styled
const StyledSidebar = styled.nav`
  @media (min-width: ${THEME.w.screenSm}) {
    background-color: var(--color-gray-dark);
    height: 100vh;
    left: 0;
    position: absolute;
    top: 0;
    width: var(--w-sidebar);
  } ;
`

const StyledObjNavLinkActive = {
  fontWeight: 'bold',
}

export const Sidebar = () => {
  const jsxListItems = routes.map(({ name, path }) => {
    const title = name.charAt(0).toUpperCase() + name.slice(1)

    return (
      <li key={name}>
        <NavLink
          activeStyle={StyledObjNavLinkActive}
          activeClassName={null}
          exact={true}
          to={path}
        >
          {title}
        </NavLink>
      </li>
    )
  })

  return (
    <StyledSidebar>
      <ul>{jsxListItems}</ul>
    </StyledSidebar>
  )
}
