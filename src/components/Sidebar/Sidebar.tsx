// react
import React from 'react'
import { routes } from '../../routes'
import { NavLink } from 'react-router-dom'

export const Sidebar = () => {
  const jsxListItems = routes.map(({ name, path }) => {
    const title = name.charAt(0).toUpperCase() + name.slice(1)

    return (
      <li key={name} className='app-nav__list-item'>
        <NavLink
          className={`app-nav__link app-nav__link--${name}`}
          activeClassName='app-nav__link--active'
          to={path}
        >
          {title}
        </NavLink>
      </li>
    )
  })

  return (
    <nav className='app-nav'>
      <ul className='app-nav__list'>{jsxListItems}</ul>
    </nav>
  )
}
