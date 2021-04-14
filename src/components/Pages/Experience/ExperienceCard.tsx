// react
import React from 'react'

// packages
import styled from 'styled-components'

// components
import { Header } from '../../Header/Header'

// assets
import { SVGArrowTopRight } from '../../../assets/SVGArrowTopRight'

// styled
const StyledCardLink = styled.a`
  align-items: flex-start;
  background-color: var(--color-bg-card);
  display: flex;
  flex-direction: column;
  position: relative;
  transition-property: box-shadow, background-color;
`

const StyledCardStatic = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  background-color: var(--color-bg-dark);
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
  transition-delay: var(--duration-250ms);

  ${StyledCardLink}:hover & {
    opacity: 1;
    z-index: 1;
    transition-timing-function: var(--easing-default);
    transition-duration: var(--duration-250ms);
    transition-property: opacity, transform;
    transform: translate(1rem, -1rem);
    visibility: visible;
  }

  svg {
    height: 1.5rem;
    width: 1.5rem;

    path {
      fill: var(--color-primary);
    }
  }
`

export const ExperienceCard = ({
  description,
  href,
  srOnlyTitle,
  visual,
}: IExperienceCard) => {
  return href ? (
    <StyledCardLink
      className='card-flat card-hover'
      href={href}
      target='_blank'
    >
      <Header srOnly={true}>
        <h2>{srOnlyTitle}</h2>
      </Header>
      <StyledCardLogoWrapper>{visual}</StyledCardLogoWrapper>
      <StyledCardDescription>{description}</StyledCardDescription>
      <StyledHoverSVGWrapper>{SVGArrowTopRight}</StyledHoverSVGWrapper>
    </StyledCardLink>
  ) : (
    <StyledCardStatic className='card-flat'>
      {visual}
      <StyledCardDescription>{description}</StyledCardDescription>
    </StyledCardStatic>
  )
}
