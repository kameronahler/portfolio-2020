import React from 'react'
import PageNav from '../PageNav/PageNav'

export default function PageWork() {
  return (
    <>
      <PageNav to='/experience' text='Previous: Experience' />
      <h1>Work</h1>
      <PageNav to='/about' text='Next: About' />
    </>
  )
}
