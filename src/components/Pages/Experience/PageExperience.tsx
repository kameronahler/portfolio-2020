// react
import React, { useState, useRef, useEffect } from 'react'
import { Link } from 'react-router-dom'

// packages
import { EntryCollection } from 'contentful'

// hooks
import {
  useFetchContentful,
  useFilterContentfulByTag,
} from '../../../hooks/hooks'

// components
import { Loader } from '../../Loader/Loader'
import { PageHeader } from '../../PageHeader/PageHeader'

// constants
const CONTENTFUL_ENTRY_TYPE = 'resumeItem'

export const PageExperience = React.memo(() => {
  const mounted = useRef<Boolean>(true)
  const [
    contentfulEntries,
    setContentfulEntries,
  ] = useState<EntryCollection<any> | null>(null)
  let filteredContentfulEntries

  useEffect(() => {
    useFetchContentful<any>({
      contentfulEntryType: CONTENTFUL_ENTRY_TYPE,
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
      <PageHeader title={'Experience'} />
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
})
