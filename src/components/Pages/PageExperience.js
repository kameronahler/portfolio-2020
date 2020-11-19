import React from 'react'
import InPageNav from '../InPageNav/InPageNav'

export default function PageExperience() {
  return (
    <>
      <InPageNav to='/' text='Previous: Home' />
      <h1>Experience</h1>
      <InPageNav to='/work' text='Next: Work' />
    </>
  )
}
