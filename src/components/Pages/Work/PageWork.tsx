// react
import React, { useState } from 'react'

//components
import { Header } from '../../Page/Header'
import { SectionDribbble } from './SectionDribbble'
import { SectionOverview } from './SectionOverview'
import { SectionRecent } from './SectionRecent'
import { SectionTabs } from './SectionTabs'

// constants
export const PageWork = () => {
  const [currentTab, setCurrentTab] = useState<string>('portfolioPost')

  return (
    <>
      <Header title={'Work'} />
      <SectionTabs currentTab={currentTab} setCurrentTab={setCurrentTab} />
      <section>
        {currentTab === 'portfolioPost' && (
          <SectionOverview ariaControlledBy={currentTab} />
        )}
        {currentTab === 'blogPost' && (
          <SectionRecent ariaControlledBy={currentTab} />
        )}
        {currentTab === 'dribbble' && (
          <SectionDribbble ariaControlledBy={currentTab} />
        )}
      </section>
    </>
  )
}
