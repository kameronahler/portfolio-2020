// react
import React, { useState } from 'react'

// packages
import { EntryCollection } from 'contentful'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import styled from 'styled-components'

// components
import { CONTENTFUL_RICH_TEXT_OPTIONS } from '../../Contentful/RichText'

// theme
import { THEME } from '../../../styles/Theme'

// styled
const StyledUl = styled.ul`
  background-color: var(--color-bg-dark);
  display: flex;
  justify-content: space-between;
  padding: 2rem;
`

export const PortfolioContent = ({
  contentfulEntries,
}: {
  contentfulEntries: EntryCollection<any>
}) => {
  const [currentArticle, setCurrentArticle] = useState<number>(0)

  const handleArticleChange = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    setCurrentArticle(parseInt(e.currentTarget.dataset.article))
  }

  return (
    <>
      <nav>
        <StyledUl>
          <li>
            <button
              className='link-gradient-hover'
              disabled={currentArticle - 1 >= 0 ? false : true}
              data-article={currentArticle - 1}
              onClick={e => handleArticleChange(e)}
            >
              Previous
            </button>
          </li>
          <li>
            <button
              className='link-gradient-hover'
              data-article={currentArticle + 1}
              disabled={
                currentArticle + 1 < contentfulEntries.items.length
                  ? false
                  : true
              }
              onClick={e => handleArticleChange(e)}
            >
              Next
            </button>
          </li>
        </StyledUl>
      </nav>
      <article>
        {documentToReactComponents(
          contentfulEntries.items[currentArticle].fields.body,
          CONTENTFUL_RICH_TEXT_OPTIONS
        )}
      </article>
    </>
  )
}
