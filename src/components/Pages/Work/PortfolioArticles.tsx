// react
import React, { useState, useRef, useEffect } from 'react'

// packages
import { EntryCollection } from 'contentful'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import styled from 'styled-components'

// components
import { CONTENTFUL_RICH_TEXT_OPTIONS } from '../../Contentful/RichTextResponsiveImg'
import { RichTextWrapper } from '../../Contentful/RichTextWrapper'
import { HeroImg } from '../../../components/Contentful/HeroImg'

// assets
import { SVGChevronLeft } from '../../../assets/SVGChevronLeft'
import { SVGChevronRight } from '../../../assets/SVGChevronRight'

// theme
import { THEME } from '../../../styles/Theme'
import { SRHeader } from '../../SRHeader/SRHeader'

// styled
const StyledNav = styled.nav`
  background-color: var(--color-bg);
  display: grid;
  padding-left: 3rem;
  padding-right: 3rem;
  margin-bottom: 1rem;
  position: relative;

  @media (min-width: ${THEME.w.screenSm}) {
    align-items: flex-start;
    background-color: var(--color-bg);
    column-gap: 1rem;
    grid-template-columns: 1fr auto;
    justify-content: start;
    margin-bottom: unset;
    padding: 1rem 0;
    position: sticky;
    top: 0;
    z-index: var(--z-nav);
  }
`

const StyledHeader = styled.header`
  h2 {
    font-size: var(--font-size-h4-clamp);
    margin-bottom: 0;
    @media (min-width: ${THEME.w.screenSm}) {
      font-size: var(--font-size-h3-clamp);
    }
    @media (min-width: ${THEME.w.screenDesktop}) {
      font-size: var(--font-size-h2);
    }
  }
`

const StyledUl = styled.ul`
  display: flex;
  justify-content: space-between;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 100%;

  @media (min-width: ${THEME.w.screenSm}) {
    justify-content: unset;
    position: static;
    top: unset;
    transform: unset;
  }

  @media (min-width: ${THEME.w.screenDesktop}) {
    margin-top: 0.75rem;
  }

  li:first-of-type {
    @media (min-width: ${THEME.w.screenSm}) {
      margin-right: 1rem;
    }
  }
`

const StyledNavButton = styled.button`
  display: block;
  line-height: 1;

  @media (min-width: ${THEME.w.screenDesktop}) {
    transition-duration: var(--duration-250ms);
    transition-property: transform;
    transition-timing-function: var(--easing-default);
  }

  &:disabled {
    opacity: 0.1;
  }

  &:hover {
    path {
      stroke: var(--color-primary);
    }
  }

  ${StyledNav}:hover li:first-of-type & {
    @media (min-width: ${THEME.w.screenDesktop}) {
      transform: translateX(-0.25rem);
    }
  }
  ${StyledNav}:hover li:last-of-type & {
    @media (min-width: ${THEME.w.screenDesktop}) {
      transform: translateX(0.25rem);
    }
  }

  svg {
    display: block;
    height: 2rem;
    width: 2rem;
  }
`

export const PortfolioArticles = ({
  contentfulEntries,
}: {
  contentfulEntries: EntryCollection<any>
}) => {
  const transitionRef = useRef<HTMLDivElement>()
  const [currentArticle, setCurrentArticle] = useState<number>(0)

  const handleArticleChange = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    setCurrentArticle(parseInt(e.currentTarget.dataset.article))
  }

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
      {/* nav */}
      <StyledNav>
        <StyledHeader>
          <h2>{contentfulEntries.items[currentArticle].fields.title}</h2>
        </StyledHeader>
        <StyledUl>
          <li>
            <StyledNavButton
              aria-label='Previous article'
              data-article={currentArticle - 1}
              disabled={currentArticle - 1 >= 0 ? false : true}
              onClick={e => handleArticleChange(e)}
            >
              {SVGChevronLeft}
            </StyledNavButton>
          </li>
          <li>
            <StyledNavButton
              aria-label='Next article'
              disabled={
                currentArticle + 1 < contentfulEntries.items.length
                  ? false
                  : true
              }
              data-article={currentArticle + 1}
              onClick={e => handleArticleChange(e)}
            >
              {SVGChevronRight}
            </StyledNavButton>
          </li>
        </StyledUl>
      </StyledNav>

      {/* hero */}
      {contentfulEntries.items[currentArticle].fields.hero && (
        <HeroImg hero={contentfulEntries.items[currentArticle].fields.hero} />
      )}

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
