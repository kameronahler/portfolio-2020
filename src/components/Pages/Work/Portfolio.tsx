// react
import React, { useState, useRef, useEffect } from 'react'

// packages
import { EntryCollection } from 'contentful'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'

// hooks
import { useFetchContentful } from '../../../hooks/hooks'

// components
import { LoaderWrapper } from '../../Loader/LoaderWrapper'
import { Loader } from '../../Loader/Loader'

// constants
const CONTENTFUL_TYPE = 'portfolioPost'

export const Portfolio = ({ ariaControls }: { ariaControls: string }) => {
  const mounted = useRef<Boolean>(true)
  const [
    contentfulEntries,
    setContentfulEntries,
  ] = useState<EntryCollection<any> | null>(null)

  useEffect(() => {
    useFetchContentful<IContentfulPortfolioEntry>({
      contentfulEntryType: CONTENTFUL_TYPE,
      mountedRef: mounted,
      setState: setContentfulEntries,
    })
  }, [])

  if (contentfulEntries) {
    contentfulEntries.items.sort((a, b) =>
      a.fields.order > b.fields.order ? 1 : -1
    )
  }

  return (
    <>
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
            <article id={ariaControls} key={entry.sys.id}>
              {entry.fields.body.content}
            </article>
          ))
      ) : (
        <LoaderWrapper>
          <Loader size={50} strokeWidth={6} />
        </LoaderWrapper>
      )}
    </>
  )
}
