import React from 'react'
import InPageNav from '../InPageNav/InPageNav'

export default function PageWork() {
  return (
    <>
      <InPageNav to='/experience' text='Previous: Experience' />
      <h1>Work</h1>
      <InPageNav to='/about' text='Next: About' />
    </>
  )
}
