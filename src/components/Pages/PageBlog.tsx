// react
import React, { useState, useRef, useEffect } from 'react'
import { Link } from 'react-router-dom'

// packages
import { EntryCollection } from 'contentful'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'

// hooks
import { useFetchContentful } from '../../hooks/hooks'

// components
import { CONTENTFUL_RICH_TEXT_OPTIONS } from '../Contentful/RichText'
import { Loader } from '../Loader/Loader'

// constants
const CONTENTFUL_ENTRY_TYPE = 'blogPost'

// styled
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
      <h1>blogPost</h1>
      {contentfulEntries ? (
        <section>
          {contentfulEntries.items
            .map(entry => {
              return {
                ...entry,
                fields: {
                  ...entry.fields,
                  body: {
                    ...entry.fields.body,
                    content: documentToReactComponents(
                      entry.fields.body,
                      CONTENTFUL_RICH_TEXT_OPTIONS
                    ),
                  },
                },
              }
            })
            .map(entry => (
              <section key={entry.sys.id}>{entry.fields.body.content}</section>
            ))}
        </section>
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
