import React from 'react'
import PageNav from '../PageNav/PageNav'

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
      <PageNav to='/experience' text='Next: Experience' />
    </>
  )
}
