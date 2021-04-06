// react
import React, { useState, useRef, useEffect } from 'react'
import { Link } from 'react-router-dom'

// packages
import { createClient, EntryCollection } from 'contentful'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'

// hooks
import { useFetchContentful } from '../../hooks/hooks'

//components
import { Loader } from '../Loader/Loader'

// constants
const CONTENTFUL_SPACE = process.env.CONTENTFUL_SPACE
const CONTENTFUL_ACCESS_TOKEN = process.env.CONTENTFUL_ACCESS_TOKEN
const CONTENTFUL_ENTRY_TYPE = 'portfolioPost'
const CONTENTFUL_CLIENT = createClient({
  space: CONTENTFUL_SPACE,
  accessToken: CONTENTFUL_ACCESS_TOKEN,
})

export const PageWork = React.memo(() => {
  const mounted = useRef<Boolean>(true)
  const [
    contentfulEntries,
    setContentfulEntries,
  ] = useState<EntryCollection<any> | null>(null)

  useEffect(() => {
    useFetchContentful<IContentfulPortfolioEntry>({
      contentfulClient: CONTENTFUL_CLIENT,
      countentfulEntryType: CONTENTFUL_ENTRY_TYPE,
      mountedRef: mounted,
      setState: setContentfulEntries,
    })
  }, [])

  return (
    <>
      <h1>Portfolio Posts</h1>
      {contentfulEntries ? (
        contentfulEntries.items
          .map(entry => {
            return {
              ...entry,
              fields: {
                ...entry.fields,
                body: {
                  ...entry.fields.body,
                  content: documentToReactComponents(entry.fields.body),
                },
              },
            }
          })
          .map(entry => (
            <section key={entry.sys.id}>{entry.fields.body.content}</section>
          ))
      ) : (
        <div
          style={{ display: 'grid', minHeight: '50vh', placeItems: 'center' }}
        >
          <Loader size={50} strokeWidth={6} />
        </div>
      )}

      <Link to='/experience'>Previous </Link>
      <Link to='/blog'>Next</Link>
    </>
  )
})
