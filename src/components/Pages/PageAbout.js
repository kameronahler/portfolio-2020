import React from 'react'
import InPageNav from '../InPageNav/InPageNav'

export default function PageAbout() {
  return (
    <>
      <InPageNav to='/work' text='Previous: Work' />
      <h1>About</h1>
      <InPageNav to='/contact' text='Next: Contact' />
    </>
  )
}
