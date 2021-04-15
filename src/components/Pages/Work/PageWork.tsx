// react
import React, { useState } from 'react'

//components
import { Dribbble } from './Dribbble'
import { Header } from '../../Page/Header'
import { Recent } from './Recent'
import { Tabs } from './Tabs'
import { Portfolio } from './Portfolio'

// constants
export const PageWork = () => {
  const [currentTab, setCurrentTab] = useState<string>('portfolioPost')

  return (
    <>
      <Header title={'Work'} />
      <Tabs currentTab={currentTab} setCurrentTab={setCurrentTab} />
      {currentTab === 'portfolioPost' && (
        <Portfolio ariaControlledBy={currentTab} />
      )}
      {currentTab === 'blogPost' && <Recent ariaControlledBy={currentTab} />}
      {currentTab === 'dribbble' && <Dribbble ariaControlledBy={currentTab} />}
    </>
  )
}
