// react
import React from 'react'
import { NavLink } from 'react-router-dom'

// packages
import styled from 'styled-components'

// routes
import { routes } from '../../routes'

// styled
const StyledSidebar = styled.nav`
  background-color: var(--color-gray-dark);
  height: 100vh;
  left: 0;
  position: absolute;
  top: 0;
  width: var(--w-sidebar);
`

export const Sidebar = () => {
  const jsxListItems = routes.map(({ name, path }) => {
    const title = name.charAt(0).toUpperCase() + name.slice(1)

    return (
      <li key={name}>
        <NavLink to={path}>{title}</NavLink>
      </li>
    )
  })

  return (
    <StyledSidebar>
      <ul>{jsxListItems}</ul>
    </StyledSidebar>
  )
}
