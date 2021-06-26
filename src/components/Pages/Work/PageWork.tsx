// react
import React, { useState } from 'react'

//components
import { PageHeader } from '../../Page/PageHeader'
import { SectionDribbble } from './SectionDribbble'
import { SectionOverview } from './SectionOverview'
import { SectionRecent } from './SectionRecent'
import { SectionTabs } from './SectionTabs'
import {
  TransitionType,
  TransitionComponentGroup,
} from '../../TransitionComponentGroup/TransitionComponentGroup'

// hooks
import { useScrollTop, useToggleBodyOverflow } from '../../../hooks/hooks'

// constants
export const PageWork = () => {
  const [currentTab, setCurrentTab] = useState<string>('portfolioPost')

  return (
    <>
      <PageHeader title={'Work'} />
      <SectionTabs currentTab={currentTab} setCurrentTab={setCurrentTab} />
      <TransitionComponentGroup
        currentKey={currentTab}
        onExit={() => {
          useScrollTop()
          useToggleBodyOverflow(true)
        }}
        onEntered={() => useToggleBodyOverflow(false)}
        type={TransitionType.FADE_IN_OUT}
      >
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
      </TransitionComponentGroup>
    </>
  )
}
