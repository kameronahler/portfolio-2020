// react
import React from 'react'

// packages
import styled from 'styled-components'

// components
import { SRHeader } from '../../SRHeader/SRHeader'

// assets
import { SVGArrowTopRight } from '../../../assets/SVGArrowTopRight'

// styled
const StyledCardLink = styled.a`
  align-items: flex-start;
  background-color: var(--color-bg-card);
  display: flex;
  flex-direction: column;
  position: relative;
  transition-property: box-shadow, transform;

  &:hover {
    transform: translateY(-0.5rem);
  }
`

const StyledCardStatic = styled.div`
  align-items: flex-start;
  border: 0.0625rem solid var(--color-bg-dark);
  display: flex;
  flex-direction: column;
  box-shadow: none;

  h3 {
    font-size: 3rem;
    line-height: 1;
    margin-bottom: unset;
    position: relative;
  }
`

const StyledCardLogoWrapper = styled.span`
  display: inline-block;
  height: 3rem;
  width: auto;

  svg,
  img {
    display: inline-block;
    height: 100%;
    width: auto;
  }
`

const StyledCardDescription = styled.span`
  margin-top: 2rem;
`

const StyledHoverSVGWrapper = styled.span`
  opacity: 0;
  position: absolute;
  right: 3rem;
  top: 3rem;
  visibility: hidden;

  ${StyledCardLink}:hover & {
    opacity: 1;
    z-index: 1;
    transition-timing-function: var(--easing-default);
    transition-duration: var(--duration-250ms);
    transition-property: opacity, transform;
    transform: translate(1.25rem, -1.25rem);
    visibility: visible;
  }

  svg {
    height: 1.5rem;
    width: 1.5rem;
  }

  path {
    fill: ${({ arrowColor }: { arrowColor: string }) => arrowColor};
  }
`

export const ExperienceCard = ({
  arrowColor,
  description,
  href,
  srOnlyTitle,
  visual,
}: IExperienceCard) => {
  return href ? (
    <StyledCardLink
      className='card-flat card-hover'
      data-resize='true'
      href={href}
      target='_blank'
    >
      <SRHeader>
        <h2>{srOnlyTitle}</h2>
      </SRHeader>
      <StyledCardLogoWrapper>{visual}</StyledCardLogoWrapper>
      <StyledCardDescription>{description}</StyledCardDescription>
      <StyledHoverSVGWrapper arrowColor={arrowColor}>
        {SVGArrowTopRight}
      </StyledHoverSVGWrapper>
    </StyledCardLink>
  ) : (
    <StyledCardStatic className='card-flat'>
      {visual}
      <StyledCardDescription>{description}</StyledCardDescription>
    </StyledCardStatic>
  )
}
