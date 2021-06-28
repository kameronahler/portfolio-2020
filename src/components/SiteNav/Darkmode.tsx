// react
import React, { useEffect, useState } from 'react'

// packages
import styled from 'styled-components'
import { THEME } from '../../styles/Theme'

import { SROnly } from '../SROnly/SROnly'

//styled
const BUTTON_WIDTH = '3.25rem'
const BUTTON_HEIGHT = '1.875rem'
const SWITCH_HEIGHT = '1.5rem'

const StyledButton = styled.button`
  align-items: center;
  background-color: var(--color-bg-accent);
  border-radius: 9999px;
  border: 1px solid transparent;
  display: flex;
  height: ${BUTTON_HEIGHT};
  position: fixed;
  right: 4rem;
  top: 0.625rem;
  transition-duration: var(--duration-250ms);
  transition-property: border;
  transition-timing-function: var(--easing-default);
  z-index: var(--z-above-nav);
  width: ${BUTTON_WIDTH};

  &:hover {
    border: 1px solid var(--color-primary);
  }

  @media (min-width: ${THEME.w.screenDesktop}) {
    position: absolute;
    right: 0;
    top: 0.375rem;
  }
`

const SVGWrapper = styled.span`
  background-color: var(--color-primary);
  border-radius: 9999px;
  display: flex;
  align-items: center;
  justify-content: center;
  height: ${SWITCH_HEIGHT};
  width: ${SWITCH_HEIGHT};
  transform: ${({ darkmode }: { darkmode: boolean }) =>
    darkmode
      ? `translateX(calc(${BUTTON_WIDTH} - ${SWITCH_HEIGHT} - 0.375rem))`
      : 'translateX(0.25rem)'};
  transition-duration: var(--duration-250ms);
  transition-property: transform;
  transition-timing-function: var(--easing-default);

  &:active {
    transform: ${({ darkmode }: { darkmode: boolean }) =>
      darkmode
        ? `scale(.9) translateX(calc(${BUTTON_WIDTH} - ${SWITCH_HEIGHT} - 0.25rem))`
        : 'scale(.9) translateX(0.25rem)'};
  }

  svg {
    color: var(--color-white);
    height: 0.875rem;
    width: 0.875rem;
  }
`
// assets
import { SVGMoon } from '../../assets/SVGMoon'
import { SVGSun } from '../../assets/SVGSun'

export const Darkmode = () => {
  const [darkmode, setDarkmode] = useState<boolean>(() =>
    window.matchMedia('(prefers-color-scheme: dark)').matches ? true : false
  )

  const handleClick = () => setDarkmode(!darkmode)

  useEffect(() => {
    if (darkmode) {
      document.documentElement.classList.add('darkmode')
    } else {
      document.documentElement.classList.remove('darkmode')
    }
  }, [darkmode])

  return (
    <>
      <StyledButton darkmode={darkmode} onClick={handleClick}>
        <SROnly>{darkmode ? 'Turn light mode on' : 'Turn dark mode on'}</SROnly>
        <SVGWrapper darkmode={darkmode}>
          {darkmode ? SVGMoon : SVGSun}
        </SVGWrapper>
      </StyledButton>
    </>
  )
}
