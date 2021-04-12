// react
import React from 'react'

// components
import { PageHeader } from '../../PageHeader/PageHeader'
import { Header } from '../../Header/Header'
import { RoleContent } from './RoleContent'

export const PageHome = () => {
  return (
    <>
      <PageHeader title={'Ahoy hoy 👋'}>
        <p className='h5'>Hello! I'm Kameron – thanks for stopping by.</p>
      </PageHeader>

      <section>
        <Header>
          <h2>How can I help?</h2>
        </Header>
        <RoleContent />
      </section>
    </>
  )
}
