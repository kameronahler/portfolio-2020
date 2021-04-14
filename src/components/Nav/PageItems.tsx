import React from 'react'
import { NavLink } from 'react-router-dom'
import { routes } from '../../routes'
import styled from 'styled-components'

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
