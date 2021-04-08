// react
import React, { useState, useRef, useEffect } from 'react'
import { Link } from 'react-router-dom'

// packages
import { EntryCollection } from 'contentful'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'

// hooks
import { useFetchContentful } from '../../../hooks/hooks'

//components
import { Loader } from '../../Loader/Loader'
import { PageHeader } from '../../PageHeader/PageHeader'

// constants
const CONTENTFUL_ENTRY_TYPE = 'portfolioPost'

export const PageWork = React.memo(() => {
  const mounted = useRef<Boolean>(true)
  const [
    contentfulEntries,
    setContentfulEntries,
  ] = useState<EntryCollection<any> | null>(null)

  useEffect(() => {
    useFetchContentful<IContentfulPortfolioEntry>({
      contentfulEntryType: CONTENTFUL_ENTRY_TYPE,
      mountedRef: mounted,
      setState: setContentfulEntries,
    })
  }, [])

  return (
    <>
      <PageHeader title={'Portfolio post'} />
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
