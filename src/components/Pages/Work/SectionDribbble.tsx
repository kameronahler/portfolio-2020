// react
import React, { useEffect, useRef, useState } from 'react'

// packages
import axios, { CancelTokenSource } from 'axios'
import styled from 'styled-components'

// components
import { LoaderWrapper } from '../../Loader/LoaderWrapper'
import { Loader } from '../../Loader/Loader'

// theme
import { THEME } from '../../../styles/Theme'

// assets
import { SVGDribbble } from '../../../assets/SVGDribbble'

// styled
const StyledWrapper = styled.div`
  display: grid;
  gap: 1rem;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));

  @media (min-width: ${THEME.w.screenDesktop}) {
    gap: 2rem;
  }
`

const StyledThumbLink = styled.a`
  background-color: var(--color-text);
  overflow: hidden;
  position: relative;
`

const StyledArrowWrapper = styled.span`
  display: block;
  height: 2rem;
  left: 50%;
  opacity: 0;
  position: absolute;
  top: 50%;
  transform: translate(-50%, -50%);
  transition-duration: var(--duration-250ms);
  transition-property: opacity;
  transition-timing-function: var(--easing-default);
  width: 2rem;

  ${StyledThumbLink}:hover & {
    opacity: 1;
  }

  path {
    fill: var(--color-text-inverse);
  }
`

const StyledImg = styled.img`
  display: block;
  height: 100%;
  object-fit: cover;
  transition-duration: var(--duration-250ms);
  transition-timing-function: opacity, transform;
  transition-timing-function: var(--easing-default);
  width: 100%;

  ${StyledThumbLink}:hover & {
    opacity: 0.2;
  }

  &:hover {
    transform: scale(1.05);
  }
`

const StyledViewMoreLink = styled.a`
  display: grid;
  overflow: hidden;
  position: relative;
  place-items: center;

  svg {
    bottom: 0;
    object-fit: cover;
    opacity: 0.1;
    position: absolute;
    right: 0;
    transition: var(--duration-250ms) var(--easing-default) transform;
    z-index: -1;
  }

  path {
    fill: var(--color-text-light);
    transition: var(--duration-250ms) var(--easing-default) fill;
  }

  &:hover {
    svg {
      transform: scale(1.05);
    }

    path {
      fill: var(--color-primary-light);
    }
  }
`

// constants
const API_URL =
  'https://api.dribbble.com/v2/user/shots?per_page=5&access_token=' +
  process.env.DRIBBBLE_API_KEY
const CANCEL_FETCH_MSG = 'Component unmounted before completing request'
const ERROR_FETCH_MSG = 'Unable to load Dribbble shots'
const PROFILE_URL = 'https://dribbble.com/kamtr0n'

export const SectionDribbble = ({
  ariaControlledBy,
}: {
  ariaControlledBy: string
}) => {
  const transitionRef = useRef<HTMLDivElement>()
  const [shots, setShots] = useState<IDribbbleShot[] | null>(null)

  const fetchDribbble = async (source: CancelTokenSource) => {
    try {
      const res = await axios.get<IDribbbleShot[]>(API_URL, {
        cancelToken: source.token,
      })

      if (res.status === 200) {
        setShots(res.data)
      } else {
        throw new Error(ERROR_FETCH_MSG)
      }
    } catch (err) {
      console.error(err)
    }
  }

  useEffect(() => {
    const source = axios.CancelToken.source()
    fetchDribbble(source)

    return () => {
      source.cancel(CANCEL_FETCH_MSG)
    }
  }, [])

  useEffect(() => {
    if (shots) {
      setTimeout(
        () => transitionRef.current.classList.add('mounted'),
        +THEME.duration[250]
      )
    }
  })

  return (
    <>
      {shots ? (
        <StyledWrapper
          className='animate-fade-in'
          id={ariaControlledBy}
          ref={transitionRef}
        >
          {shots.map(shot => (
            <StyledThumbLink href={shot.html_url} key={shot.id} target='_blank'>
              <StyledImg alt={shot.title} src={shot.images.hidpi} />
              <StyledArrowWrapper>{SVGDribbble}</StyledArrowWrapper>
            </StyledThumbLink>
          ))}
          <StyledViewMoreLink
            className='link-gradient-hover'
            href={PROFILE_URL}
            target='_blank'
          >
            {SVGDribbble}
            <span>View more</span>
          </StyledViewMoreLink>
        </StyledWrapper>
      ) : (
        <LoaderWrapper>
          <Loader size={50} strokeWidth={6} />
        </LoaderWrapper>
      )}
    </>
  )
}
