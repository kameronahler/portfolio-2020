// react
import React from 'react'

// packages
import styled from 'styled-components'

// styled
const StyledImg = styled.img`
  display: block;
  mask-image: linear-gradient(to bottom, black, transparent);
  object-fit: cover;
  width: 100%;
  z-index: -1;
`

export const HeroImg = ({ hero }) => {
  const url = hero.fields.file.url
  const format = 'fm=webp'
  const type = /(?:\.([^.]+))?$/.exec(url)[1]

  if (type === '.jpeg' || '.jpg' || '.png') {
    return (
      <StyledImg
        alt={hero.fields.description}
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
      />
    )
  } else {
    return <StyledImg alt={hero.fields.description} src={url} />
  }
}
