// react
import React, { useState, useRef, useEffect } from 'react'

// packages
import { EntryCollection } from 'contentful'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import { CONTENTFUL_RICH_TEXT_OPTIONS } from '../../Contentful/RichText'

// hooks
import { useFetchContentful } from '../../../hooks/hooks'

// components
import { LoaderWrapper } from '../../Loader/LoaderWrapper'
import { Loader } from '../../Loader/Loader'

// constants
const CONTENTFUL_TYPE = 'blogPost'

export const Recent = () => {
  const [
    contentfulEntries,
    setContentfulEntries,
  ] = useState<EntryCollection<any> | null>(null)

  const mounted = useRef<Boolean>(true)

  useEffect(() => {
    useFetchContentful<IContentfulPortfolioEntry>({
      contentfulEntryType: CONTENTFUL_TYPE,
      mountedRef: mounted,
      setState: setContentfulEntries,
    })
  }, [])

  return (
    <>
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
        <LoaderWrapper>
          <Loader size={50} strokeWidth={6} />
        </LoaderWrapper>
      )}
    </>
  )
}
