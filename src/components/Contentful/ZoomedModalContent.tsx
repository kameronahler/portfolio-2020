// react
import React, { useEffect, useCallback, useRef, useState } from 'react'

// packages
import styled from 'styled-components'

// components
import { Loader } from '../Loader/Loader'

// styled
const StyledLoaderWrapper = styled.div`
  display: block;
  inset: auto;
  position: fixed;
  z-index: var(--z-above-overlay);
`

const StyledModalImg = styled.img`
  display: block;
  height: 100%;
  max-height: 100%;
  max-width: 100%;
  object-fit: contain;
  opacity: ${({ imgLoaded }: { imgLoaded: boolean }) =>
    imgLoaded ? '1' : '0'};
  width: 100%;
  z-index: var(--z-above-overlay);
`

export const ZoomedModalContent = ({ alt, src }: IZoomedModalImage) => {
  const [imgLoaded, setImgLoaded] = useState(false)
  const ref = useRef<HTMLImageElement>()

  // handler
  const handleImgLoaded = useCallback(() => setImgLoaded(true), [])

  useEffect(() => {
    ref.current.addEventListener('load', handleImgLoaded, { once: true })
  }, [])

  return (
    <>
      {imgLoaded || null}
      <StyledLoaderWrapper>
        <Loader size={50} strokeWidth={6} />
      </StyledLoaderWrapper>
      <StyledModalImg
        imgLoaded={imgLoaded}
        ref={ref}
        alt={alt || ''}
        src={src}
      />
    </>
  )
}
