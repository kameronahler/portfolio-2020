// packages
import React from 'react'
import { Link } from 'react-router-dom'

export default function PageAbout() {
  return (
    <>
      <h1>About</h1>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nesciunt
        aliquam vel laudantium deleniti nobis reprehenderit eaque necessitatibus
        itaque quasi, nisi voluptas quod ea, dolores quibusdam amet? Qui rem
        fuga eligendi.
      </p>
      <Link to='/work'>Previous </Link>
      <Link to='/contact'>Next</Link>
    </>
  )
}
