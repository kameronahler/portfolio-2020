// react
import React, { useState } from 'react'

// packages
import { BLOCKS, Block } from '@contentful/rich-text-types'
import styled from 'styled-components'

// components
import { Modal } from '../Modal/Modal'

// theme
import { THEME } from '../..//styles/Theme'

// styled
const StyledImg = styled.img`
  display: block;
  width: 100%;
  max-width: 100%;
`

const StyledModalImg = styled.img`
  display: block;
  height: 100%;
  max-height: 100%;
  max-width: 100%;
  object-fit: contain;
  width: 100%;
  z-index: var(--z-above-overlay);
`

const RichTextResponsiveImg = ({
  lazy = true,
  node,
}: {
  lazy?: boolean
  node: Block
}) => {
  const [modalOpen, setModalOpen] = useState(false)

  const url = node.data.target.fields.file.url
  const alt = node.data.target.fields.title
  const description = node.data.target.fields.description
  const type = /(?:\.([^.]+))?$/.exec(url)[1]
  const format = 'fm=webp'

  if (type === '.jpeg' || '.jpg' || '.png') {
    return (
      <figure>
        <button onClick={() => setModalOpen(true)}>
          <StyledImg
            alt={alt || ''}
            data-lazy-loaded='false'
            data-srcset={
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
            data-src={url}
            src={lazy ? `${url}?${format}&h=400&q=20` : null}
          />
        </button>

        {description && (
          <figcaption className='sr-only'>{description}</figcaption>
        )}

        {modalOpen && (
          <Modal
            appendToId='overlay-container'
            ariaLabel='Close preview'
            setOpen={setModalOpen}
          >
            <StyledModalImg alt={alt || ''} src={`${url}?${format}`} />
          </Modal>
        )}
      </figure>
    )
  } else {
    return (
      <figure>
        <button>
          <StyledImg alt={alt || ''} src={url} />

          {description && (
            <figcaption className='sr-only'>{description}</figcaption>
          )}
        </button>

        {modalOpen && (
          <Modal
            appendToId='overlay-container'
            ariaLabel='Close preview'
            setOpen={setModalOpen}
          >
            <StyledImg alt={alt || ''} src={url} />
          </Modal>
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
