// react
import React, { useState, useEffect, useRef } from 'react'

// packages
import styled from 'styled-components'
import { EntryCollection } from 'contentful'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import { CONTENTFUL_RICH_TEXT_OPTIONS } from '../../Contentful/RichTextResponsiveImg'

// hooks
import {
  useFilterContentfulByTag,
  useScrollTop,
  useToggleBodyOverflow,
} from '../../../hooks/hooks'

// theme
import { THEME } from '../../../styles/Theme'

// components
import { OverviewNav } from './OverviewNav'
import { RichTextWrapper } from '../../Contentful/RichTextWrapper'
import {
  TransitionType,
  TransitionComponentGroup,
} from '../../TransitionComponentGroup/TransitionComponentGroup'

// styled
const StyledArticle = styled.article`
  display: grid;
  grid-gap: 2rem;
  margin-bottom: 3rem;

  @media (min-width: ${THEME.w.screenLg}) {
    grid-template-columns: repeat(12, minmax(0, 1fr));
  }

  h3,
  p {
    grid-column: 1 / -1;
    margin: unset;
  }

  figure {
    // 1
    &:first-of-type:last-of-type {
      @media (min-width: ${THEME.w.screenLg}) {
        grid-column: 1 / -1;
      }
    }

    // 2
    @media (min-width: ${THEME.w.screenLg}) {
      grid-column: span 6;
    }

    // 3
    &:nth-of-type(1):nth-last-of-type(3),
    &:nth-of-type(2):nth-last-of-type(2),
    &:nth-of-type(3):last-of-type {
      @media (min-width: ${THEME.w.screenLg}) {
        grid-column: span 4;
      }
    }
  }

  img {
    filter: blur(16px);
    max-width: 37.5rem;
    object-fit: cover;
    object-position: 50% 0%;
    width: 100%;

    &[data-lazy-loaded='true'] {
      box-shadow: var(--shadow-card);
      filter: blur(0);
      transition-duration: var(--duration-1000ms);
      transition-property: filter;
      transition-timing-function: var(--easing-default);
    }

    @media (min-width: ${THEME.w.screenLg}) {
      height: 25rem;
      max-width: unset;
      object-position: 0% 0%;
    }

    @media (min-width: ${THEME.w.screenXl}) {
      object-position: 50% 0%;
    }
  }
`

// constants
const TAGS = [
  { id: 0, contentful: 'workProduct', title: 'Design & development' },
  { id: 1, contentful: 'workDev', title: 'UI development' },
  { id: 2, contentful: 'workDesign', title: 'Design' },
]

// intersection callback
const handleIntersectingImg = (
  entries: IntersectionObserverEntry[],
  parentObserver: IntersectionObserver
) => {
  for (let entry of entries) {
    if (entry.isIntersecting) {
      entry.target.setAttribute(
        'srcset',
        entry.target.getAttribute('data-srcset')
      )
      entry.target.setAttribute('src', entry.target.getAttribute('data-src'))
      entry.target.setAttribute('data-lazy-loaded', 'true')
      parentObserver.unobserve(entry.target)
    }
  }
}

export const OverviewContent = ({
  contentfulEntries,
}: {
  contentfulEntries: EntryCollection<any>
}) => {
  const [currentTagIndex, setCurrentTagIndex] = useState<number>(0)
  const previousTagIndex = useRef<number | null>(currentTagIndex)

  const transitionRight =
    currentTagIndex > previousTagIndex.current ? true : false

  // intersection observer lazy load imgs
  useEffect(() => {
    const lazyImgs = document.querySelectorAll('img[data-lazy-loaded="false"]')
    previousTagIndex.current = currentTagIndex

    const parentObserver = new IntersectionObserver(
      entries => handleIntersectingImg(entries, parentObserver),
      { rootMargin: '25%' }
    )

    for (let lazyImg of lazyImgs) {
      parentObserver.observe(lazyImg)
    }

    // clean up callback
    return () => {
      parentObserver.disconnect()
    }
  }, [currentTagIndex])

  return (
    <div>
      <OverviewNav
        currentTagIndex={currentTagIndex}
        currentTagTitle={TAGS[currentTagIndex].title}
        setCurrentTagIndex={setCurrentTagIndex}
        totalTags={TAGS.length}
      />
      <TransitionComponentGroup
        currentKey={currentTagIndex}
        onExit={() => {
          useScrollTop()
          useToggleBodyOverflow(true)
        }}
        onEntered={() => useToggleBodyOverflow(false)}
        transitionInnerProps={{ $transitionRight: transitionRight }}
        type={TransitionType.HORIZONTAL}
      >
        <RichTextWrapper>
          {useFilterContentfulByTag(
            contentfulEntries,
            TAGS[currentTagIndex].contentful
          ).map(filteredEntry => (
            <StyledArticle key={filteredEntry.sys.id}>
              <h3>{filteredEntry.fields.title}</h3>
              {documentToReactComponents(
                filteredEntry.fields.body,
                CONTENTFUL_RICH_TEXT_OPTIONS
              )}
            </StyledArticle>
          ))}
        </RichTextWrapper>
      </TransitionComponentGroup>
    </div>
  )
}
