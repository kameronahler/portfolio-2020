import React from 'react'
import PageNav from '../PageNav/PageNav'

export default function PageExperience() {
  return (
    <>
      <PageNav to='/' text='Previous: Home' />
      <h1>Experience</h1>
      <PageNav to='/work' text='Next: Work' />
    </>
  )
}
