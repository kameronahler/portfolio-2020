// react
import React, { useState, useRef, useEffect } from 'react'

// packages
import { EntryCollection } from 'contentful'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'

// components
import { CONTENTFUL_RICH_TEXT_OPTIONS } from '../../Contentful/RichTextResponsiveImg'
import { RichTextWrapper } from '../../Contentful/RichTextWrapper'

// theme
import { THEME } from '../../../styles/Theme'
import { SRHeader } from '../../SRHeader/SRHeader'
import { PortfolioArticlesNav } from './OverviewNav'

export const OverviewContent = ({
  contentfulEntries,
}: {
  contentfulEntries: EntryCollection<any>
}) => {
  const transitionRef = useRef<HTMLDivElement>()
  const [currentArticle, setCurrentArticle] = useState<number>(0)

  useEffect(() => {
    if (contentfulEntries) {
      setTimeout(
        () => transitionRef.current.classList.add('mounted'),
        +THEME.duration[250]
      )
    }
  })

  return (
    <div className='animate-fade-in' ref={transitionRef}>
      <PortfolioArticlesNav
        contentfulEntries={contentfulEntries}
        currentArticle={currentArticle}
        setCurrentArticle={setCurrentArticle}
      />

      {/* article */}
      <article>
        <SRHeader>
          <h1>{contentfulEntries.items[currentArticle].fields.title}</h1>
        </SRHeader>
        <RichTextWrapper>
          {documentToReactComponents(
            contentfulEntries.items[currentArticle].fields.body,
            CONTENTFUL_RICH_TEXT_OPTIONS
          )}
        </RichTextWrapper>
      </article>
    </div>
  )
}
