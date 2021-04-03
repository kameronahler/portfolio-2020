// packages
import React, { useState, useRef, useEffect } from 'react'
import { createClient } from 'contentful'
import { Link } from 'react-router-dom'

export const PageBlog = () => {
  // state
  const [contentfulPosts, setContentfulPosts] = useState(null)
  const mounted = useRef(true)

  // contentful
  const contentfulSpace = process.env.CONTENTFUL_SPACE
  const contentfulAccessToken = process.env.CONTENTFUL_ACCESS_TOKEN
  const contentfulClient = createClient({
    space: contentfulSpace,
    accessToken: contentfulAccessToken,
  })

  const fetchContentful = async () => {
    // contentful does not have an unsub strategy at the moment - even though
    // they use axios
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
