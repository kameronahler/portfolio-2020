// react
import React, { useState, useRef, useEffect } from 'react'
import { Link } from 'react-router-dom'

// packages
import { createClient, EntryCollection } from 'contentful'

// hooks
import { useFetchContentful, useFilterContentfulByTag } from '../../hooks/hooks'

// components
import { Loader } from '../Loader/Loader'

// constants
const CONTENTFUL_ENTRY_TYPE = 'resumeItem'
const CONTENTFUL_SPACE = process.env.CONTENTFUL_SPACE
const CONTENTFUL_ACCESS_TOKEN = process.env.CONTENTFUL_ACCESS_TOKEN
const CONTENTFUL_CLIENT = createClient({
  space: CONTENTFUL_SPACE,
  accessToken: CONTENTFUL_ACCESS_TOKEN,
})

export const PageExperience = () => {
  const mounted = useRef<Boolean>(true)
  const [
    contentfulEntries,
    setContentfulEntries,
  ] = useState<EntryCollection<any> | null>(null)
  let filteredContentfulEntries

  useEffect(() => {
    useFetchContentful<any>({
      contentfulClient: CONTENTFUL_CLIENT,
      countentfulEntryType: CONTENTFUL_ENTRY_TYPE,
      mountedRef: mounted,
      setState: setContentfulEntries,
    })
  }, [])

  if (contentfulEntries) {
    filteredContentfulEntries = useFilterContentfulByTag({
      entries: contentfulEntries,
      targetTag: 'experience',
    })
  }

  return (
    <>
      <h1>Experience</h1>
      {contentfulEntries ? (
        <section>
          {filteredContentfulEntries.map(item => (
            <div key={item.sys.id}>
              <h2>{item.fields.title}</h2>
              <p>{item.fields.description}</p>
            </div>
          ))}
        </section>
      ) : (
        <div
          style={{ display: 'grid', minHeight: '50vh', placeItems: 'center' }}
        >
          <Loader size={50} strokeWidth={6} />
        </div>
      )}

      <Link to='/'>Previous </Link>
      <Link to='/work'>Next</Link>
    </>
  )
}
