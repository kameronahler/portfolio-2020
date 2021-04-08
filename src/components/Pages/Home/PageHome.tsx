// react
import React from 'react'

// components
import { PageHeader } from '../../PageHeader/PageHeader'
import { Header } from '../../Header/Header'

export const PageHome = () => {
  return (
    <>
      <PageHeader title={'Ahoy hoy 👋'}>
        <p className='text-lead'>
          Hello! I'm Kameron – thanks for stopping by.
        </p>
      </PageHeader>

      <section>
        <Header srOnly={true}>
          <h2>How can I help?</h2>
        </Header>
      </section>
    </>
  )
}
