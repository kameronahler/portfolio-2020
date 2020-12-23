// packages
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

const dribbbleAPIKey = process.env.DRIBBBLE_API_KEY

export default function PageDribbble() {
  const [imgs, setImgs] = useState(null)
  const [error, setError] = useState(null)

  const fetchDribbble = async () => {
    const source = axios.CancelToken.source()

    try {
      const res = await axios.get(
        `https://api.dribbble.com/v2/user/shots?per_page=6&access_token=${dribbbleAPIKey}`,
        { cancelToken: source.token }
      )
      if (res.status === 200) {
        setImgs(
          res.data.map(shot => (
            <img key={shot.id} src={shot.images.two_x}></img>
          ))
        )
      }
    } catch (err) {
      setError('Error')
    }

    // unmount
    return () => {
      console.log('unmounted')
      source.cancel('page unmounted')
    }
  }

  useEffect(fetchDribbble)

  return (
    <>
      <div>
        <h1>Dribbble</h1>
      </div>
      <div>
        {imgs && !error ? imgs : 'Loading...'}
        {error ? error : null}
      </div>
      <Link to='/work'>Previous </Link>
      <Link to='/about'>Next</Link>
    </>
  )
}
