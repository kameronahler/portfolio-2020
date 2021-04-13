// react
import React, { useState, useRef } from 'react'
import { CSSTransition } from 'react-transition-group'

// packages
import styled from 'styled-components'

// theme
import { THEME } from '../../../styles/Theme'

// components
import { All } from './All'
import { Design } from './Design'
import { Development } from './Development'
import { Overlay } from './Overlay'

// styled
const StyledP = styled.p`
  font-size: var(--font-size-h3);
  font-weight: var(--font-weight-bold);
  line-height: var(--line-height-heading);
  margin-bottom: 4rem;
  width: 100%;

  @media (min-width: ${THEME.w.screenDesktop}) {
    font-size: var(--font-size-h2);
  }
`

const StyledButton = styled.button`
  align-items: center;
  display: inline-flex;
  font-size: inherit;
  font-weight: inherit;
  position: ${({ dropdownExpanded }) => (dropdownExpanded ? 'relative' : '')};
  text-align: left;
  width: 100%;
  z-index: ${({ dropdownExpanded }) => (dropdownExpanded ? '1000' : '')};

  span {
    border-bottom: ${({ dropdownExpanded }) =>
      dropdownExpanded ? 'unset' : '1px dashed var(--color-text-light)'};
  }

  &:hover {
    span {
      border-bottom: 1px solid var(--color-primary);
    }
  }
`

const StyledUl = styled.ul`
  font-size: var(--font-size-h3);
  font-weight: var(--font-weight-bold);
  position: fixed;
  visibility: ${({ dropdownExpanded }) =>
    dropdownExpanded ? 'visible' : 'hidden'};
  z-index: ${({ dropdownExpanded }) => (dropdownExpanded ? '1000' : '')};

  @media (min-width: ${THEME.w.screenDesktop}) {
    font-size: var(--font-size-h2);
  }

  &::before {
    background-color: var(--color-overlay);
    border-radius: var(--rounded-card);
    box-shadow: var(--shadow-card);
    content: '';
    height: calc(100% + (2 * var(--p-card)));
    left: calc(-1 * var(--p-card));
    position: absolute;
    top: calc(-1 * var(--p-card));
    transform: translateY(-2rem);
    transition: var(--duration-default-ms) var(--easing-cubic) transform;
    width: calc(100% + (2 * var(--p-card)));
    z-index: -1;
  }

  &.enter,
  &.enter-done {
    &::before {
      transform: translateY(0);
    }
  }
`

const StyledLi = styled.li`
  cursor: pointer;
  line-height: var(--line-height-heading);
  opacity: 0;
  transform: translateY(1rem);

  .enter > &,
  .enter-done > & {
    opacity: 1;
    transform: translateY(0);
    transition-duration: var(--duration-default-ms);
    transition-delay: var(--duration-default-ms);
    transition-timing-function: var(--easing-cubic);
    transition-property: opacity;
  }
`

// constants
const ROLE = {
  all: 'Product design + development',
  design: 'Product design',
  development: 'Frontend development',
}

export const Content = () => {
  const [dropdownExpanded, setDropdownExpanded] = useState<boolean>(false)
  const [role, setRole] = useState<String>(ROLE.all)
  const listRef = useRef<HTMLElement>()

  const handleDropdown = (e: React.MouseEvent<HTMLElement>) => {
    const buttonCoords = e.currentTarget.getBoundingClientRect()
    listRef.current.style.left = `${buttonCoords.left}px`
    listRef.current.style.top = `${buttonCoords.top}px`
    listRef.current.style.width = `${buttonCoords.width}px`

    setDropdownExpanded(!dropdownExpanded)
  }

  const handleRoleChange = (role: string) => {
    setDropdownExpanded(false)
    setRole(role)
  }

  return (
    <div>
      <StyledP id='im-a'>
        What can I help with?
        <StyledButton
          aria-label='Select one of my skills'
          aria-haspopup='listbox'
          className='link-gradient'
          dropdownExpanded={dropdownExpanded}
          id='dropdown-button'
          onClick={e => {
            handleDropdown(e)
          }}
          role='listbox'
        >
          <span>{role}</span>
        </StyledButton>
      </StyledP>
      <CSSTransition in={dropdownExpanded} timeout={+THEME.duration.default}>
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
                    ? 'link-gradient link-gradient-hover'
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
                    ? 'link-gradient link-gradient-hover'
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
                    ? 'link-gradient link-gradient-hover'
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
                    ? 'link-gradient link-gradient-hover'
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
                    ? 'link-gradient link-gradient-hover'
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
                    ? 'link-gradient link-gradient-hover'
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
                    ? 'link-gradient link-gradient-hover'
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
                    ? 'link-gradient link-gradient-hover'
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
                    ? 'link-gradient link-gradient-hover'
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

      {role === ROLE.all && <All />}
      {role === ROLE.design && <Design />}
      {role === ROLE.development && <Development />}

      <Overlay
        dropdownExpanded={dropdownExpanded}
        setDropdownExpanded={setDropdownExpanded}
      />
    </div>
  )
}
