import React from 'react'
import { routes } from '../../routes'
import { Link } from 'react-router-dom'

export default function Sidebar() {
  const jsxListItems = routes.map(({ name, path }) => {
    const title = name.charAt(0).toUpperCase() + name.slice(1)

    return (
      <li
        key={name}
        className={`app-nav__list-item app-nav__list-item--${name}`}
      >
        <Link className={`app-nav__link app-nav__link--${name}`} to={path}>
          {title}
        </Link>
      </li>
    )
  })

  return (
    <nav className='app-nav'>
      <ul className='app-nav__list'>{jsxListItems}</ul>
    </nav>
  )
}
