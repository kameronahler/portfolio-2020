import React, { useState } from 'react'

// packages
import { createGlobalStyle } from 'styled-components'

// styled
const Styles = createGlobalStyle`
  .hidden {
    display: none;
  }
`

export const RoleContent = () => {
  const [dropdownExpanded, setDropdownExpanded] = useState<Boolean>(false)
  const [role, setRole] = useState<String>('all')

  const handleRoleChange = (role: string) => {
    setDropdownExpanded(false)
    setRole(role)
  }

  return (
    <>
      <Styles />

      <div>
        <p id='im-a'>
          I'm a&nbsp;
          <button
            aria-label='Select one of my skills'
            aria-haspopup='listbox'
            id='dropdown-button'
            onClick={() => setDropdownExpanded(!dropdownExpanded)}
            role='listbox'
          >
            {role === 'all' && <p>product designer + developer</p>}
            {role === 'designer' && <p>Designer</p>}
            {role === 'developer' && <p>Developer</p>}
          </button>
        </p>
        <ul
          aria-expanded={dropdownExpanded ? 'true' : 'false'}
          aria-labelledby='im-a'
          className={dropdownExpanded ? '' : 'hidden'}
        >
          <li
            onClick={() => handleRoleChange('all')}
            aria-selected='true'
            role='option'
          >
            Product designer and Frontend developer
          </li>
          <li onClick={() => handleRoleChange('designer')} role='option'>
            Product designer
          </li>
          <li onClick={() => handleRoleChange('developer')} role='option'>
            Frontend developer
          </li>
        </ul>
      </div>
      {role === 'all' && <p>All</p>}
      {role === 'designer' && <p>Designer</p>}
      {role === 'developer' && <p>Developer</p>}
    </>
  )
}
