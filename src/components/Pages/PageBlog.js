// packages
import React, { useState, useEffect } from 'react'
import { createClient } from 'contentful'
import { Link } from 'react-router-dom'

export const PageBlog = () => {
  // state
  const [contentfulPosts, setContentfulPosts] = useState(null)

  // contentful
  const contentfulSpace = process.env.CONTENTFUL_SPACE
  const contentfulAccessToken = process.env.CONTENTFUL_ACCESS_TOKEN
  const contentfulClient = createClient({
    space: contentfulSpace,
    environment: 'master',
    accessToken: contentfulAccessToken,
  })
  const fetchContentful = async () => {
    // not sure what contentful's unsub strategy is at the moment, so using
    // this local state to know if we need to update state after request resolves
    let mounted = true

    try {
      const res = await contentfulClient.getEntries({
        content_type: 'blogPost',
      })

      if (mounted) {
        setContentfulPosts(res.items)
      }
    } catch (err) {
      console.error(err)
    }

    return () => {
      mounted = false
    }
  }

  useEffect(fetchContentful, [])

  return (
    <>
      <h1>Contentful Blog Shtuff</h1>
      {contentfulPosts ? null : (
        <div>
          <p>Loading...</p>
        </div>
      )}

      {contentfulPosts ? (
        <ul>
          {contentfulPosts.map(item => {
            if (item.sys.type === 'Entry') {
              return <li key={item.sys.id}>{item.fields.title}</li>
            }
          })}
        </ul>
      ) : null}

      <Link to='/work'>Previous </Link>
      <Link to='/dribbble'>Next</Link>
    </>
  )
}
