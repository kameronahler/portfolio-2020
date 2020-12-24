// packages
import React, { useState, useEffect } from 'react'
import { createClient } from 'contentful'
import { Link } from 'react-router-dom'

export default function PageBlog() {
  const contentfulSpace = process.env.CONTENTFUL_SPACE
  const contentfulAccessToken = process.env.CONTENTFUL_ACCESS_TOKEN
  const contentfulClient = createClient({
    space: contentfulSpace,
    environment: 'master',
    accessToken: contentfulAccessToken,
  })
  const [contentfulPosts, setContentfulPosts] = useState(null)
  const fetchPosts = async () => {
    try {
      const res = await contentfulClient.getEntries({
        content_type: 'blogPost',
      })
      setContentfulPosts(res.items)
    } catch (err) {
      console.error(err)
    }
  }

  useEffect(fetchPosts, [])

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
