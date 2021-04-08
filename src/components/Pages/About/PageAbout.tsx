// react
import React from 'react'
import { Link } from 'react-router-dom'

// components
import { PageHeader } from '../../PageHeader/PageHeader'

export const PageAbout = () => {
  return (
    <>
      <PageHeader title={'About'} />
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
