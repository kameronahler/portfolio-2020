import React from 'react'
import { NavLink } from 'react-router-dom'
import { routes } from '../../routes'
import styled from 'styled-components'

const StyledLi = styled.li`
  margin: 0.5rem 0;

  a {
    display: inline-block;
  }
`

export const PageItems = ({ location, setMobileNavOpen }) => {
  const jsxListItems = routes.map(({ name, path }: IRoutes) => {
    const title = name.charAt(0).toUpperCase() + name.slice(1)

    return path !== '/' ? (
      <StyledLi key={name}>
        <NavLink
          activeClassName={'bold link-gradient'}
          className='link-gradient-hover'
          exact={true}
          onClick={(e: Event) => {
            if (location.pathname === path) {
              e.preventDefault()
            }
            setMobileNavOpen(false)
          }}
          to={path}
        >
          {title}
        </NavLink>
      </StyledLi>
    ) : null
  })

  return jsxListItems
}
