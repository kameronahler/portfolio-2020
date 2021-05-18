// react
import React, { useState, useRef, useEffect } from 'react'

// packages
import styled from 'styled-components'
import { EntryCollection } from 'contentful'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import { CONTENTFUL_RICH_TEXT_OPTIONS } from '../../Contentful/RichTextResponsiveImg'

// hooks
import { useFilterContentfulByTag } from '../../../hooks/hooks'

// theme
import { THEME } from '../../../styles/Theme'

// components
import { RichTextWrapper } from '../../Contentful/RichTextWrapper'
import { SRHeader } from '../../SRHeader/SRHeader'
import { OverviewNav } from './OverviewNav'

// styled
const StyledArticle = styled.article`
  margin-bottom: 3rem;

  @media (min-width: ${THEME.w.screenDesktop}) {
    display: grid;
    grid-gap: 2rem;
    grid-template-columns: repeat(12, minmax(0, 1fr));
  }

  figure {
    @media (min-width: ${THEME.w.screenDesktop}) {
      grid-column: span 6;
    }

    // 3
    &:nth-of-type(1):nth-last-of-type(3) {
      @media (min-width: ${THEME.w.screenDesktop}) {
        grid-column: 1 / 5;
      }
    }

    &:nth-of-type(2):nth-last-of-type(2) {
      @media (min-width: ${THEME.w.screenDesktop}) {
        grid-column: 5 / 9;
      }
    }

    &:nth-of-type(3):last-of-type {
      @media (min-width: ${THEME.w.screenDesktop}) {
        grid-column: 9 / 13;
      }
    }

    &:first-of-type:last-of-type {
      @media (min-width: ${THEME.w.screenDesktop}) {
        grid-column: 1 / -1;
      }
    }
  }

  img {
    width: 100%;

    @media (min-width: ${THEME.w.screenDesktop}) {
      height: 100%;
      min-height: 300px;
      max-height: 400px;
      object-fit: cover;
    }
  }

  & :not(figure) {
    grid-column: 1 / -1;
  }
`

// constants
const TAGS = [
  {
    contentful: 'workProduct',
    title: 'Design & development',
  },
  {
    contentful: 'workDev',
    title: 'UI development',
  },
  {
    contentful: 'workDesign',
    title: 'Design',
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
    setTimeout(
      () => transitionRef.current.classList.add('mounted'),
      +THEME.duration[250]
    )
  }, [])

  useEffect(() => {
    const parentObserver = new IntersectionObserver(
      (
        entries: IntersectionObserverEntry[],
        parentObserver: IntersectionObserver
      ) => {
        for (let entry of entries) {
          if (entry.isIntersecting) {
            entry.target.setAttribute(
              'srcset',
              entry.target.getAttribute('data-srcset')
            )
            entry.target.setAttribute(
              'srcset',
              entry.target.getAttribute('data-src')
            )
            parentObserver.unobserve(entry.target)
          }
        }
      },
      { rootMargin: '50%' }
    )
    const lazyImgs = document.querySelectorAll('img[data-lazy="true"]')

    for (let lazyImg of lazyImgs) {
      parentObserver.observe(lazyImg)
    }

    return () => {
      parentObserver.disconnect()
    }
  }, [currentTagIndex])

  return (
    <div className='animate-fade-in' ref={transitionRef}>
      <OverviewNav
        currentTagIndex={currentTagIndex}
        currentTagTitle={TAGS[currentTagIndex].title}
        setCurrentTagIndex={setCurrentTagIndex}
        totalTags={TAGS.length}
      />
      <RichTextWrapper>
        <SRHeader>
          <h1>{contentfulEntries.items[currentTagIndex].fields.title}</h1>
        </SRHeader>
        <>
          {useFilterContentfulByTag(
            contentfulEntries,
            TAGS[currentTagIndex].contentful
          ).map(filteredEntry => (
            <StyledArticle key={filteredEntry.sys.id}>
              {documentToReactComponents(
                filteredEntry.fields.body,
                CONTENTFUL_RICH_TEXT_OPTIONS
              )}
            </StyledArticle>
          ))}
        </>
      </RichTextWrapper>
    </div>
  )
}
