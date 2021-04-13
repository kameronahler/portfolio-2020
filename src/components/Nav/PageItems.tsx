import React from 'react'
import { NavLink } from 'react-router-dom'
import { routes } from '../../routes'
import styled from 'styled-components'

const StyledLi = styled.li`
  a {
    display: inline-block;
    padding: 0.5rem 0.75rem;
    transform-origin: 0 50%;

    &.active {
      transition: var(--easing-cubic) var(--duration-default-ms) transform;
      transform: scale(1.2) translateX(-0.1875rem);
    }
  }
`

export const PageItems = ({ location, setMobileNavOpen }) => {
  const jsxListItems = routes.map(({ name, path }: IRoutes) => {
    const title = name.charAt(0).toUpperCase() + name.slice(1)

    return path !== '/' ? (
      <StyledLi key={name}>
        <NavLink
          activeClassName={'active bold link-gradient'}
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
