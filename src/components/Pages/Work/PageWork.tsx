// react
import React, { useState } from 'react'

//components
import { PageHeader } from '../../PageHeader/PageHeader'
import { Work } from './Work'
import { Recent } from './Recent'
import { Dribbble } from './Dribbble'

// constants
export const PageWork = () => {
  const [currentTab, setCurrentTab] = useState<string>('portfolioPost')

  return (
    <>
      <PageHeader title={'Portfolio post'} />
      <ul role='tablist' aria-label='Select which kind of work'>
        <li>
          <button
            onClick={() => setCurrentTab('portfolioPost')}
            aria-controls=''
            aria-selected='true'
            role='tab'
          >
            Work
          </button>
          <button
            onClick={() => setCurrentTab('blogPost')}
            aria-controls=''
            role='tab'
          >
            Recent
          </button>
          <button
            onClick={() => setCurrentTab('dribbble')}
            aria-controls=''
            role='tab'
          >
            Dribbble
          </button>
        </li>
      </ul>
      {currentTab === 'portfolioPost' && <Work />}
      {currentTab === 'blogPost' && <Recent />}
      {currentTab === 'dribbble' && <Dribbble />}
    </>
  )
}
