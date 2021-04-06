// react
import React, { useState, useRef, useEffect } from 'react'
import { Link } from 'react-router-dom'

// packages
import { EntryCollection } from 'contentful'
import { BLOCKS } from '@contentful/rich-text-types'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'

// hooks
import { useFetchContentful } from '../../hooks/hooks'

// components
import { Loader } from '../Loader/Loader'

// constants
const CONTENTFUL_ENTRY_TYPE = 'blogPost'
const CONTENTFUL_RICH_TEXT_OPTIONS = {
  renderNode: {
    [BLOCKS.EMBEDDED_ASSET]: node => {
      const url = node.data.target.fields.file.url
      const type = /(?:\.([^.]+))?$/.exec(url)[1]

      if (type === '.jpeg' || '.jpg' || '.png') {
        return (
          <img
            style={{ maxWidth: '100%', display: 'block' }}
            srcSet={
              `${url}?fm=webp&w=200&q=90 200w,` +
              `${url}?fm=webp&w=300&q=90 300w,` +
              `${url}?fm=webp&w=400&q=80 400w,` +
              `${url}?fm=webp&w=800&q=80 800w,` +
              `${url}?fm=webp&w=1200&q=70 1200w,` +
              `${url}?fm=webp&w=1600&q=70 1600w,` +
              `${url}?fm=webp&w=2000&q=60 2000w,` +
              `${url}?fm=webp&w=2400&q=60 2400w,` +
              `${url}?fm=webp&w=3000&q=60 3000w,` +
              `${url}?fm=webp&w=4000&q=60 4000w`
            }
            src={url}
          />
        )
      } else {
        return <img src={url} />
      }
    },
  },
}
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

  console.log(contentfulEntries)
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
