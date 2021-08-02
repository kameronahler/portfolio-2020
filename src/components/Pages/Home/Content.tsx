// react
import React, { useState, useRef } from 'react'
import { CSSTransition } from 'react-transition-group'

// packages
import styled from 'styled-components'

// hooks
import { useToggleBodyOverflow, useScrollTop } from '../../..//hooks/hooks'

// theme
import { THEME } from '../../../styles/Theme'

// components
import { All } from './All'
import { Design } from './Design'
import { Development } from './Development'
import { Overlay } from '../../Overlay/Overlay'
import {
  TransitionType,
  TransitionComponentGroup,
} from '../../../components/TransitionComponentGroup/TransitionComponentGroup'

// styled
const StyledDropdownWrapper = styled.section`
  position: relative;
`
const StyledP = styled.p`
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  font-size: var(--font-size-h3-clamp);
  font-weight: var(--font-weight-bold);
  line-height: var(--line-height-heading);
  margin-bottom: 4rem;

  @media (min-width: ${THEME.w.screenDesktop}) {
    font-size: var(--font-size-h2-clamp);
  }
`

const StyledButton = styled.button`
  align-items: center;
  display: inline-flex;
  font-size: inherit;
  font-weight: inherit;
  margin-top: 0.5rem;
  position: ${({ dropdownExpanded }) => (dropdownExpanded ? 'relative' : '')};
  text-align: left;
  z-index: ${({ dropdownExpanded }) =>
    dropdownExpanded ? 'var(--z-above-overlay)' : ''};

  span {
    border-bottom: ${({ dropdownExpanded }) =>
      dropdownExpanded
        ? '1px dashed transparent'
        : '1px dashed var(--color-primary)'};
    display: block;
  }

  &:hover {
    span {
      border-bottom: 1px solid var(--color-primary);
    }
  }
`

const StyledUl = styled.ul`
  display: grid;
  font-size: var(--font-size-h3);
  font-weight: var(--font-weight-bold);
  position: absolute;
  row-gap: 1rem;
  top: 0;
  visibility: ${({ dropdownExpanded }) =>
    dropdownExpanded ? 'visible' : 'hidden'};
  width: calc(100vw - 4rem);
  z-index: ${({ dropdownExpanded }) =>
    dropdownExpanded ? 'var(--z-above-overlay)' : ''};

  @media (min-width: ${THEME.w.screenDesktop}) {
    font-size: var(--font-size-h2);
    width: auto;
  }

  &::before {
    background-color: var(--color-bg-card);
    border-radius: var(--rounded-card);
    box-shadow: var(--shadow-card);
    content: '';
    height: calc(100% + (2 * var(--p-card)));
    left: calc(-1 * var(--p-card));
    position: absolute;
    top: calc(-1 * var(--p-card));
    transform-origin: 25% 0%;
    transform: scale(0);
    transition: var(--duration-250ms) var(--easing-default) transform;
    width: calc(100% + (2 * var(--p-card)));
    z-index: -1;
  }

  &.enter,
  &.enter-done {
    &::before {
      transform: scale(1);
    }
  }
`

const StyledLi = styled.li`
  cursor: pointer;
  line-height: var(--line-height-heading);
  position: relative;

  ${StyledUl}.enter &:nth-of-type(n+2) {
    transform: translate3d(0, -1rem, 0);
    opacity: 0;
  }

  ${StyledUl}.enter-active &:nth-of-type(n+2) {
    opacity: 1;
    transform: translate3d(0, 0, 0);
    transition-delay: var(--duration-250ms);
    transition-duration: var(--duration-250ms);
  }

  &.active::before {
    background-color: var(--color-primary);
    border-radius: 9999px;
    content: '';
    height: 0.5rem;
    left: -1rem;
    position: absolute;
    top: 0.5em;
    width: 0.5rem;
  }
`

export const ContentCardsWrapper = styled.section`
  display: grid;
  grid-template-columns: var(--grid-default);
  row-gap: var(--gap-lg);

  @media (min-width: ${THEME.w.screenDesktop}) {
    gap: var(--gap-lg);
  }
`

// constants
const ROLE = {
  all: 'Design & development',
  design: 'Product design',
  development: 'UI development',
}

export const Content = () => {
  const [dropdownExpanded, setDropdownExpanded] = useState<boolean>(false)
  const [role, setRole] = useState<string>(ROLE.all)
  const listRef = useRef<HTMLElement>()

  const handleDropdown = (e: React.MouseEvent<HTMLElement>) => {
    listRef.current.style.top = `${e.currentTarget.offsetTop}px`
    setDropdownExpanded(!dropdownExpanded)
  }

  const handleRoleChange = (role: string) => {
    setDropdownExpanded(false)
    setRole(role)
  }
  return (
    <StyledDropdownWrapper>
      <StyledP id='im-a'>
        How can I&nbsp;help?
        <StyledButton
          aria-label='Select one of my skills'
          aria-haspopup='listbox'
          dropdownExpanded={dropdownExpanded}
          id='dropdown-button'
          onClick={e => {
            handleDropdown(e)
          }}
          role='listbox'
        >
          <span className='link-gradient'>{role}</span>
        </StyledButton>
      </StyledP>
      <CSSTransition in={dropdownExpanded} timeout={+THEME.duration['250']}>
        <StyledUl
          aria-expanded={dropdownExpanded ? 'true' : 'false'}
          aria-labelledby='im-a'
          dropdownExpanded={dropdownExpanded}
          ref={listRef}
        >
          {role === ROLE.all && (
            <>
              <StyledLi
                aria-selected={role === ROLE.all ? true : false}
                className={
                  role === ROLE.all
                    ? 'active link-gradient link-gradient-hover'
                    : 'link-gradient-hover'
                }
                onClick={() => handleRoleChange(ROLE.all)}
                role='option'
              >
                {ROLE.all}
              </StyledLi>
              <StyledLi
                aria-selected={role === ROLE.design ? true : false}
                className={
                  role === ROLE.design
                    ? 'active link-gradient link-gradient-hover'
                    : 'link-gradient-hover'
                }
                onClick={() => handleRoleChange(ROLE.design)}
                role='option'
              >
                {ROLE.design}
              </StyledLi>
              <StyledLi
                aria-selected={role === ROLE.development ? true : false}
                className={
                  role === ROLE.development
                    ? 'active link-gradient link-gradient-hover'
                    : 'link-gradient-hover'
                }
                onClick={() => handleRoleChange(ROLE.development)}
                role='option'
              >
                {ROLE.development}
              </StyledLi>
            </>
          )}
          {role === ROLE.design && (
            <>
              <StyledLi
                aria-selected={role === ROLE.design ? true : false}
                className={
                  role === ROLE.design
                    ? 'active link-gradient link-gradient-hover'
                    : 'link-gradient-hover'
                }
                onClick={() => handleRoleChange(ROLE.design)}
                role='option'
              >
                {ROLE.design}
              </StyledLi>
              <StyledLi
                aria-selected={role === ROLE.all ? true : false}
                className={
                  role === ROLE.all
                    ? 'active link-gradient link-gradient-hover'
                    : 'link-gradient-hover'
                }
                onClick={() => handleRoleChange(ROLE.all)}
                role='option'
              >
                {ROLE.all}
              </StyledLi>
              <StyledLi
                aria-selected={role === ROLE.development ? true : false}
                className={
                  role === ROLE.development
                    ? 'active link-gradient link-gradient-hover'
                    : 'link-gradient-hover'
                }
                onClick={() => handleRoleChange(ROLE.development)}
                role='option'
              >
                {ROLE.development}
              </StyledLi>
            </>
          )}
          {role === ROLE.development && (
            <>
              <StyledLi
                aria-selected={role === ROLE.development ? true : false}
                className={
                  role === ROLE.development
                    ? 'active link-gradient link-gradient-hover'
                    : 'link-gradient-hover'
                }
                onClick={() => handleRoleChange(ROLE.development)}
                role='option'
              >
                {ROLE.development}
              </StyledLi>
              <StyledLi
                aria-selected={role === ROLE.design ? true : false}
                className={
                  role === ROLE.design
                    ? 'active link-gradient link-gradient-hover'
                    : 'link-gradient-hover'
                }
                onClick={() => handleRoleChange(ROLE.design)}
                role='option'
              >
                {ROLE.design}
              </StyledLi>
              <StyledLi
                aria-selected={role === ROLE.all ? true : false}
                className={
                  role === ROLE.all
                    ? 'active link-gradient link-gradient-hover'
                    : 'link-gradient-hover'
                }
                onClick={() => handleRoleChange(ROLE.all)}
                role='option'
              >
                {ROLE.all}
              </StyledLi>
            </>
          )}
        </StyledUl>
      </CSSTransition>
      <TransitionComponentGroup
        currentKey={role}
        onExit={() => {
          useScrollTop()
          useToggleBodyOverflow(true)
        }}
        onEntered={() => useToggleBodyOverflow(false)}
        type={TransitionType.SCALE_IN_OUT}
      >
        <ContentCardsWrapper>
          {role === ROLE.all && <All />}
          {role === ROLE.design && <Design />}
          {role === ROLE.development && <Development />}
        </ContentCardsWrapper>
      </TransitionComponentGroup>

      {dropdownExpanded && (
        <Overlay
          appendToId='overlay-container'
          ariaLabel='Close menu'
          setOpen={setDropdownExpanded}
        />
      )}
    </StyledDropdownWrapper>
  )
}
