import React from 'react'
import PageNav from '../PageNav/PageNav'

export default function PageAbout() {
  return (
    <>
      <PageNav to='/work' text='Previous: Work' />
      <h1>About</h1>
      <PageNav to='/contact' text='Next: Contact' />
    </>
  )
}
