// react
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

// packages
import axios from 'axios'

// constants
const URL =
  'https://api.dribbble.com/v2/user/shots?per_page=6&access_token=' +
  process.env.DRIBBBLE_API_KEY

export const PageDribbble = () => {
  const [imgs, setImgs] = useState(null)

  const fetchDribbble = async source => {
    try {
      const res = await axios.get(URL, { cancelToken: source.token })

      if (res.status === 200) {
        setImgs(
          res.data.map(shot => (
            <img key={shot.id} src={shot.images.two_x}></img>
          ))
        )
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
      <div>{imgs ? imgs : 'Loading...'}</div>
      <Link to='/blog'>Previous </Link>
      <Link to='/about'>Next</Link>
    </>
  )
}
