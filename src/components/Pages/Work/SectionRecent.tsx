// react
import React, { useState, useRef, useEffect } from 'react'

// packages
import { EntryCollection } from 'contentful'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import styled from 'styled-components'

// hooks
import { useFetchContentful } from '../../../hooks/hooks'

// components
import { CONTENTFUL_RICH_TEXT_OPTIONS } from '../../Contentful/RichTextResponsiveImg'
import { RichTextWrapper } from '../../../components/Contentful/RichTextWrapper'
import { LoaderWrapper } from '../../Loader/LoaderWrapper'
import { Loader } from '../../Loader/Loader'

// theme
import { THEME } from '../../../styles/Theme'

// styled
const StyledArticle = styled.article`
  @media (min-width: ${THEME.w.screenMd}) {
    column-gap: 2rem;
    display: grid;
    grid-template-columns: 1fr minmax(300px, 1fr);
  }

  header {
    @media (min-width: ${THEME.w.screenMd}) {
      grid-column: 1/3;
    }
  }

  h1 {
    font-family: inherit;
    font-size: var(--font-size-h3-clamp);
    margin-bottom: unset;
  }

  img {
    display: block;
    margin-top: 2rem;
    width: 100%;
  }
`

const StyledHr = styled.hr`
  border-top: unset;
  border-bottom: 0.0625rem solid var(--color-bg-dark);
  margin: 4rem 0;
`

// constants
const CONTENTFUL_TYPE = 'blogPost'

export const SectionRecent = ({ ariaControlledBy }: ISectionRecent) => {
  const mounted = useRef<Boolean>(true)
  const transitionRef = useRef<HTMLDivElement>()

  const [contentfulEntries, setContentfulEntries] =
    useState<EntryCollection<any> | null>(null)

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
  }, [contentfulEntries])

  return (
    <>
      {contentfulEntries ? (
        <div className='animate-fade-in' ref={transitionRef}>
          <p>Just some random things I've tried recently.</p>
          {contentfulEntries.items
            .sort((a, b) => (a.sys.createdAt < b.sys.createdAt ? 1 : -1))
            .map(entry => {
              return (
                <div key={entry.sys.id}>
                  <StyledArticle id={ariaControlledBy}>
                    <header>
                      <h1>{entry.fields.title}</h1>
                    </header>
                    <div>
                      <RichTextWrapper>
                        {documentToReactComponents(
                          entry.fields.body,
                          CONTENTFUL_RICH_TEXT_OPTIONS
                        )}
                      </RichTextWrapper>
                    </div>
                    <div>
                      {entry.fields.hero && (
                        <img
                          alt={entry.fields.hero.fields.description || ''}
                          src={entry.fields.hero.fields.file.url}
                        />
                      )}
                    </div>
                  </StyledArticle>
                  <StyledHr />
                </div>
              )
            })}
        </div>
      ) : (
        <LoaderWrapper>
          <Loader size={50} strokeWidth={6} />
        </LoaderWrapper>
      )}
    </>
  )
}
