import React from 'react'
import { Link } from 'react-router-dom'

export default function AppNav() {
  return (
    <header>
      <nav className='app-nav'>
        <ul className='app-nav__list'>
          <li className='app-nav__list-item'>
            <Link className='app-nav__link' to='/'>
              Home
            </Link>
          </li>
          <li className='app-nav__list-item'>
            <Link className='app-nav__link' to='/experience'>
              Experience
            </Link>
          </li>
          <li className='app-nav__list-item'>
            <Link className='app-nav__link' to='/work'>
              Work
            </Link>
          </li>
          <li className='app-nav__list-item'>
            <Link className='app-nav__link' to='/about'>
              About
            </Link>
          </li>
          <li className='app-nav__list-item'>
            <Link className='app-nav__link' to='/contact'>
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}
