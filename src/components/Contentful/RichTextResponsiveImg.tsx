// react
import React from 'react'

// packages
import { BLOCKS, Block } from '@contentful/rich-text-types'
import styled from 'styled-components'

// theme
import { THEME } from '../../styles/Theme'

// styled
const StyledFigure = styled.figure`
  position: relative;
`

const StyledImg = styled.img`
  display: block;
  max-width: 100%;
`

const StyledFigcaption = styled.figcaption`
  color: var(--color-text-light);
  font-size: var(--font-size-default);
  margin: 0.5rem 0.5rem 1rem;

  @media (min-width: ${THEME.w.screenDesktop}) {
    bottom: 0;
    color: var(--color-text-inverse);
    margin: unset;
    opacity: 0;
    padding: 2rem 1rem 1rem;
    position: absolute;
    transition-duration: var(--duration-250ms);
    transition-property: opacity;
    transition-timing-function: var(--easing-default);
    width: 100%;
    z-index: 0;

    ${StyledFigure}:hover &,
    ${StyledImg}:focus + & {
      opacity: 1;
    }
  }

  &::after {
    @media (min-width: ${THEME.w.screenDesktop}) {
      background: transparent
        linear-gradient(to top, var(--color-bg-inverse), transparent);
      bottom: 0;
      content: '';
      display: block;
      height: 100%;
      left: 0;
      opacity: 1;
      position: absolute;
      width: 100%;
      z-index: -1;
    }
  }
`

const RichTextResponsiveImg = ({ node }: { node: Block }) => {
  const url = node.data.target.fields.file.url
  const alt = node.data.target.fields.title
  const description = node.data.target.fields.description
  const type = /(?:\.([^.]+))?$/.exec(url)[1]
  const format = 'fm=webp'

  if (type === '.jpeg' || '.jpg' || '.png') {
    return (
      <StyledFigure>
        <StyledImg
          alt={alt || ''}
          srcSet={
            `${url}?${format}&w=200&q=90 200w,` +
            `${url}?${format}&w=300&q=90 300w,` +
            `${url}?${format}&w=400&q=80 400w,` +
            `${url}?${format}&w=800&q=80 800w,` +
            `${url}?${format}&w=1200&q=70 1200w,` +
            `${url}?${format}&w=1600&q=70 1600w,` +
            `${url}?${format}&w=2000&q=60 2000w,` +
            `${url}?${format}&w=2400&q=60 2400w,` +
            `${url}?${format}&w=3000&q=60 3000w,` +
            `${url}?${format}&w=4000&q=60 4000w`
          }
          src={url}
          tabIndex='0'
        />
        {description && <StyledFigcaption>{description}</StyledFigcaption>}
      </StyledFigure>
    )
  } else {
    return (
      <figure>
        <StyledImg alt={alt || ''} src={url} tabIndex='0' />
        {description && <figcaption>{description}</figcaption>}
      </figure>
    )
  }
}

export const CONTENTFUL_RICH_TEXT_OPTIONS = {
  renderNode: {
    [BLOCKS.EMBEDDED_ASSET]: (node: Block) => {
      return <RichTextResponsiveImg node={node} />
    },
  },
}
