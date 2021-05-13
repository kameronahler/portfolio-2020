// react
import React, { useState, useRef, useEffect } from 'react'

// packages
import { EntryCollection } from 'contentful'

// hooks
import { useFetchContentful } from '../../../hooks/hooks'

// components
import { LoaderWrapper } from '../../Loader/LoaderWrapper'
import { Loader } from '../../Loader/Loader'
import { PortfolioArticles } from './PortfolioArticles'

// constants
const CONTENTFUL_TYPE = 'portfolioEntryV2'

export const Portfolio = ({
  ariaControlledBy,
}: {
  ariaControlledBy: string
}) => {
  const [contentfulEntries, setContentfulEntries] =
    useState<EntryCollection<any> | null>(null)
  const mounted = useRef<Boolean>(true)

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
    <div id={ariaControlledBy}>
      {contentfulEntries ? (
        <PortfolioArticles contentfulEntries={contentfulEntries} />
      ) : (
        <LoaderWrapper>
          <Loader size={50} strokeWidth={6} />
        </LoaderWrapper>
      )}
    </div>
  )
}
