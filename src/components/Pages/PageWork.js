// packages
import React from 'react'
import { Link } from 'react-router-dom'

export default function PageWork() {
  return (
    <>
      <h1>Work</h1>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nesciunt
        aliquam vel laudantium deleniti nobis reprehenderit eaque necessitatibus
        itaque quasi, nisi voluptas quod ea, dolores quibusdam amet? Qui rem
        fuga eligendi.
      </p>
      <Link to='/experience'>Previous </Link>
      <Link to='/about'>Next</Link>
    </>
  )
}
