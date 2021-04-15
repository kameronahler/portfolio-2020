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

// theme
import { THEME } from '../../../styles/Theme'

// constants
const CONTENTFUL_TYPE = 'blogPost'

export const Recent = ({ ariaControlledBy }: { ariaControlledBy: string }) => {
  const mounted = useRef<Boolean>(true)
  const transitionRef = useRef<HTMLDivElement>()

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

  useEffect(() => {
    if (contentfulEntries) {
      setTimeout(
        () => transitionRef.current.classList.add('mounted'),
        +THEME.duration[250]
      )
    }
  })

  return (
    <>
      {contentfulEntries ? (
        <section className='animate-fade-in' ref={transitionRef}>
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
              <section id={ariaControlledBy} key={entry.sys.id}>
                {entry.fields.body.content}
              </section>
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
