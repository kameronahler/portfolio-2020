// packages
import React from 'react'
import { Link } from 'react-router-dom'

export default function PageExperience() {
  return (
    <>
      <Link to='/'>Previous</Link>
      <div>
        <h1>Experience</h1>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nesciunt
          aliquam vel laudantium deleniti nobis reprehenderit eaque
          necessitatibus itaque quasi, nisi voluptas quod ea, dolores quibusdam
          amet? Qui rem fuga eligendi.
        </p>
      </div>
      <Link to='/work'>Next</Link>
    </>
  )
}
