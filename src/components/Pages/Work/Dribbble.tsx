// react
import React, { useEffect, useState } from 'react'

// packages
import axios, { CancelTokenSource } from 'axios'
import styled from 'styled-components'

// components
import { LoaderWrapper } from '../../Loader/LoaderWrapper'
import { Loader } from '../../Loader/Loader'

// styled
const StyledShots__Grid = styled.div`
  display: grid;
  gap: 1rem;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
`

const StyledShots__ImgWrapper = styled.div`
  padding-top: 75%;
  position: relative;
  background-color: var(--color-bg-dark);
`

const StyledShots__Img = styled.img`
  position: absolute;
  display: block;
  max-width: 100%;
  top: 0;
  left: 0;
`

const StyledShots__ViewMore = styled.a`
  display: grid;
  place-items: center;
`

// constants
const API_URL =
  'https://api.dribbble.com/v2/user/shots?per_page=9&access_token=' +
  process.env.DRIBBBLE_API_KEY
const CANCEL_FETCH_MSG = 'Component unmounted before completing request'
const ERROR_FETCH_MSG = 'Unable to load Dribbble shots'
const PROFILE_URL = 'https://dribbble.com/kamtr0n'

export const Dribbble = () => {
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

  return (
    <>
      {shots ? (
        <StyledShots__Grid>
          {shots.map(shot => (
            <a key={shot.id} href={shot.html_url} target='_blank'>
              <StyledShots__ImgWrapper>
                <StyledShots__Img alt={shot.title} src={shot.images.hidpi} />
              </StyledShots__ImgWrapper>
            </a>
          ))}
          <StyledShots__ViewMore href={PROFILE_URL}>
            View more
          </StyledShots__ViewMore>
        </StyledShots__Grid>
      ) : (
        <LoaderWrapper>
          <Loader size={50} strokeWidth={6} />
        </LoaderWrapper>
      )}
    </>
  )
}
