// react
import React from 'react'

// components
import { PageHeader } from '../../Page/PageHeader'

export const PageAbout = () => {
  return (
    <>
      <PageHeader title={'About'} />
      <section>
        <p>Coming soon.</p>
        <img
          width='300'
          src='https://media1.tenor.com/images/0487756ba4d2ac7d6d0b0f5dd921f3f7/tenor.gif?itemid=4858777'
          alt='Samuel L Jackson being super over it, but also hella smart'
        />
      </section>
    </>
  )
}
