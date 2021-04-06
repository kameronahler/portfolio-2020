// react
import React, { useState, useRef, useEffect } from 'react'
import { Link } from 'react-router-dom'

// packages
import { EntryCollection } from 'contentful'

// hooks
import { useFetchContentful } from '../../hooks/hooks'

// components
import { Loader } from '../Loader/Loader'

// constants
const CONTENTFUL_ENTRY_TYPE = 'blogPost'

export const PageBlog = React.memo(() => {
  const mounted = useRef<Boolean>(true)
  const [
    contentfulEntries,
    setContentfulEntries,
  ] = useState<EntryCollection<IContentfulBlogEntry> | null>(null)

  useEffect(() => {
    useFetchContentful<IContentfulBlogEntry>({
      contentfulEntryType: CONTENTFUL_ENTRY_TYPE,
      mountedRef: mounted,
      setState: setContentfulEntries,
    })
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
})
