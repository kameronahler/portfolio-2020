// packages
import React from 'react'
import { Link } from 'react-router-dom'

// components
import Options from '../Options/Options'

export default function PageHome() {
  return (
    <>
      <h1>Home</h1>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nesciunt
        aliquam vel laudantium deleniti nobis reprehenderit eaque necessitatibus
        itaque quasi, nisi voluptas quod ea, dolores quibusdam amet? Qui rem
        fuga eligendi.
      </p>
      <Options />
      <Link to='/experience'>Next</Link>
    </>
  )
}
