// react
import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'

// packages
import kwesforms from 'kwesforms'

// components
import { PageHeader } from '../PageHeader/PageHeader'

export const PageContact = () => {
  useEffect(() => {
    kwesforms.init()
  }, [])

  return (
    <div>
      <PageHeader title={'Contact'} />
      <form
        className='kwes-form'
        action='https://kwes.io/api/foreign/forms/3VyNJ6R5XfH0mSPKjrFW'
      >
        <div>
          <label htmlFor='name'>Name</label>
          <input
            type='text'
            name='name'
            data-kw-rules='required|string|min:2'
          />
        </div>
        <div>
          <label htmlFor='email'>Email</label>
          <input type='text' name='email' data-kw-rules='required|email' />
        </div>
        <div>
          <label htmlFor='message'>Message</label>
          <textarea name='message' data-kw-rules='required|string|min:2' />
        </div>
        <button type='submit'>Submit</button>
      </form>
      <Link to='/about'>Previous</Link>
    </div>
  )
}
