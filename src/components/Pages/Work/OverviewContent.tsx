// react
import React, { useState, useRef, useEffect } from 'react'

// packages
import { EntryCollection } from 'contentful'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'

// hooks
import { useFilterContentfulByTag } from '../../../hooks/hooks'

// components
import { CONTENTFUL_RICH_TEXT_OPTIONS } from '../../Contentful/RichTextResponsiveImg'
import { RichTextWrapper } from '../../Contentful/RichTextWrapper'

// theme
import { THEME } from '../../../styles/Theme'
import { SRHeader } from '../../SRHeader/SRHeader'
import { OverviewNav } from './OverviewNav'

// constants
const TAGS = [
  {
    contentful: 'workDev',
    title: 'Dev',
  },
  {
    contentful: 'workProduct',
    title: 'Product',
  },
]

export const OverviewContent = ({
  contentfulEntries,
}: {
  contentfulEntries: EntryCollection<any>
}) => {
  const transitionRef = useRef<HTMLDivElement>()
  const [currentTagIndex, setCurrentTagIndex] = useState<number>(0)

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
      <OverviewNav
        currentTagIndex={currentTagIndex}
        currentTagTitle={TAGS[currentTagIndex].title}
        setCurrentTagIndex={setCurrentTagIndex}
        totalTags={TAGS.length}
      />

      <article>
        <SRHeader>
          <h1>{contentfulEntries.items[currentTagIndex].fields.title}</h1>
        </SRHeader>
        <RichTextWrapper>
          {
            <>
              {useFilterContentfulByTag(
                contentfulEntries,
                TAGS[currentTagIndex].contentful
              ).map(filteredEntry =>
                documentToReactComponents(
                  filteredEntry.fields.body,
                  CONTENTFUL_RICH_TEXT_OPTIONS
                )
              )}
            </>
          }
        </RichTextWrapper>
      </article>
    </div>
  )
}
