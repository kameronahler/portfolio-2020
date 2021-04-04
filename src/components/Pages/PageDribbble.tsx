// react
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

// packages
import axios, { CancelTokenSource } from 'axios'
import styled from 'styled-components'

// styled
const StyledShots__Grid = styled.div`
  display: grid;
  gap: 1rem;
  grid-template-columns: repeat(2, minmax(0, 1fr));
`

const StyledShots__Img = styled.img`
  display: block;
  max-width: 100%;
`

// constants
const URL =
  'https://api.dribbble.com/v2/user/shots?per_page=6&access_token=' +
  process.env.DRIBBBLE_API_KEY

export const PageDribbble = () => {
  const [shots, setShots] = useState<IDribbbleShot[] | null>(null)

  const fetchDribbble = async (source: CancelTokenSource) => {
    try {
      const res = await axios.get<IDribbbleShot[]>(URL, {
        cancelToken: source.token,
      })

      if (res.status === 200) {
        setShots(res.data)
      } else {
        throw new Error('Unable to load Dribbble shots')
      }
    } catch (err) {
      console.error(err)
    }
  }

  useEffect(() => {
    const source = axios.CancelToken.source()
    fetchDribbble(source)

    return () => {
      source.cancel('Component unmounted before completing request')
    }
  }, [])

  return (
    <>
      <div>
        <h1>Dribbble</h1>
      </div>
      <StyledShots__Grid>
        {shots
          ? shots.map(shot => (
              <a key={shot.id} href={shot.html_url} target='_blank'>
                <StyledShots__Img
                  alt={shot.title}
                  src={shot.images.hidpi}
                ></StyledShots__Img>
              </a>
            ))
          : 'Loading...'}
      </StyledShots__Grid>
      <Link to='/blog'>Previous </Link>
      <Link to='/about'>Next</Link>
    </>
  )
}
