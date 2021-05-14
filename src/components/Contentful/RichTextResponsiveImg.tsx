// react
import React from 'react'

// packages
import { BLOCKS, Block } from '@contentful/rich-text-types'
import styled from 'styled-components'

// styled
const StyledImg = styled.img`
  display: block;
  max-width: 100%;
`

const RichTextResponsiveImg = ({ node }: { node: Block }) => {
  const url = node.data.target.fields.file.url
  const alt = node.data.target.fields.title
  const description = node.data.target.fields.description
  const type = /(?:\.([^.]+))?$/.exec(url)[1]
  const format = 'fm=webp'

  if (type === '.jpeg' || '.jpg' || '.png') {
    return (
      <figure>
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
        {description && (
          <figcaption className='sr-only'>{description}</figcaption>
        )}
      </figure>
    )
  } else {
    return (
      <figure>
        <StyledImg alt={alt || ''} src={url} tabIndex='0' />
        {description && (
          <figcaption className='sr-only'>{description}</figcaption>
        )}
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
