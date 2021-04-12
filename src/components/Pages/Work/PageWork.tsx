// react
import React, { useState } from 'react'

//components
import { Dribbble } from './Dribbble'
import { PageHeader } from '../../PageHeader/PageHeader'
import { Recent } from './Recent'
import { Tabs } from './Tabs'
import { Work } from './Work'

// constants
export const PageWork = () => {
  const [currentTab, setCurrentTab] = useState<string>('portfolioPost')

  return (
    <>
      <PageHeader title={'Work'} />
      <Tabs currentTab={currentTab} setCurrentTab={setCurrentTab} />
      {currentTab === 'portfolioPost' && <Work ariaControls={currentTab} />}
      {currentTab === 'blogPost' && <Recent ariaControls={currentTab} />}
      {currentTab === 'dribbble' && <Dribbble ariaControls={currentTab} />}
    </>
  )
}
