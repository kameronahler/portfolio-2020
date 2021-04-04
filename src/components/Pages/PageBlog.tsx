// react
import React, { useState, useRef, useEffect } from 'react'
import { Link } from 'react-router-dom'

// packages
import { createClient, EntryCollection } from 'contentful'

//components
import { Loader } from '../Loader/Loader'

// constants
const CONTENTFUL_ENTRY_TYPE = 'blogPost'
const CONTENTFUL_SPACE = process.env.CONTENTFUL_SPACE
const CONTENTFUL_ACCESS_TOKEN = process.env.CONTENTFUL_ACCESS_TOKEN
const contentfulClient = createClient({
  space: CONTENTFUL_SPACE,
  accessToken: CONTENTFUL_ACCESS_TOKEN,
})

export const PageBlog = () => {
  const mounted = useRef<Boolean>(true)
  const [
    contentfulEntries,
    setContentfulEntries,
  ] = useState<EntryCollection<IContentfulBlogEntry> | null>(null)

  const fetchContentful = async () => {
    try {
      if (mounted.current) {
        const res = await contentfulClient.getEntries<IContentfulBlogEntry>({
          content_type: CONTENTFUL_ENTRY_TYPE,
        })
        setContentfulEntries(res)
      }
    } catch (err) {
      console.error(err)
    }
  }

  useEffect(() => {
    fetchContentful()

    // contentful's package does not have a cancel/unsub method at the moment
    // this ref is used as a condition to the fetch
    return () => {
      mounted.current = false
    }
  }, [])

  return (
    <>
      <h1>Contentful Blog Shtuff</h1>
      {contentfulEntries ? (
        <ul>
          {contentfulEntries.items.map(item => (
            <li key={item.sys.id}>{item.fields.title}</li>
          ))}
        </ul>
      ) : (
        <div
          style={{ display: 'grid', minHeight: '50vh', placeItems: 'center' }}
        >
          <Loader size={50} strokeWidth={6} />
        </div>
      )}

      <Link to='/work'>Previous </Link>
      <Link to='/dribbble'>Next</Link>
    </>
  )
}
