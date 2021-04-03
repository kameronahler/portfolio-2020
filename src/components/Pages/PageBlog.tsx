// react
import React, { useState, useRef, useEffect } from 'react'
import { Link } from 'react-router-dom'

// packages
import { createClient } from 'contentful'

// constants
const CONTENTFUL_SPACE = process.env.CONTENTFUL_SPACE
const CONTENTFUL_ACCESS_TOKEN = process.env.CONTENTFUL_ACCESS_TOKEN

export const PageBlog = () => {
  const [contentfulPosts, setContentfulPosts] = useState(null)
  const mounted = useRef(true)
  const contentfulClient = createClient({
    space: CONTENTFUL_SPACE,
    accessToken: CONTENTFUL_ACCESS_TOKEN,
  })

  const fetchContentful = async () => {
    try {
      if (mounted.current) {
        const res = await contentfulClient.getEntries({
          content_type: 'blogPost',
        })

        setContentfulPosts(res.items)
      }
    } catch (err) {
      console.error(err)
    }
  }

  useEffect(() => {
    fetchContentful()
    return () => {
      // contentful's package does not have a cancel/unsub method at the moment
      // this ref is used as a condition to the fetch
      mounted.current = false
    }
  }, [])

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
