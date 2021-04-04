// react
import React from 'react'

// packages
import styled, { keyframes } from 'styled-components'

const KeyframeLoading = (circumference: number) =>
  keyframes`
    0% {
      stroke-dasharray: 0, ${circumference};
      stroke-dashoffset: 0;
    }
    20% {
      stroke-dasharray: ${circumference * 0.667}, ${circumference};
      stroke-dashoffset: 0;
    }
    80% {
      stroke-dasharray:${circumference * 0.667}, ${circumference};
      stroke-dashoffset: ${circumference * -0.99};
    }
    100% {
      transform: rotate(360deg);
      stroke-dasharray:${circumference * 0.667}, ${circumference};
      stroke-dashoffset: ${circumference * -0.99};
    }
  `

const KeyframeLoadingColors = keyframes`
  0% { stroke: pink }
  20% { stroke: gold }
  40% { stroke: lime }
  60% { stroke: aqua }
  80% { stroke: cyan }
  100% { stroke: violet }
`

const StyledSVG = styled.svg.attrs(props => ({
  xmlns: 'http://www.w3.org/2000/svg',
  fill: 'none',
  width: props.size,
  height: props.size,
  viewBox: `0 0 ${props.size} ${props.size}`,
  size: props.size,
}))`
  display: block;
`

const StyledCircle = styled.circle.attrs(props => ({
  r: (props.size - props.strokeWidth) / 2,
  cx: props.size / 2,
  cy: props.size / 2,
  stroke: '#000',
  strokeWidth: props.strokeWidth,
  strokeLinecap: 'round',
}))`
  animation: ${props => KeyframeLoading(props.r * 2 * Math.PI)} 2s infinite
      linear,
    ${KeyframeLoadingColors} 6s infinite linear;

  transform-origin: 50% 50%;
`

export const Loader = ({ size, strokeWidth }: ILoaderSVG) => {
  return (
    <>
      <StyledSVG size={size}>
        <StyledCircle strokeWidth={strokeWidth} size={size} />
      </StyledSVG>
    </>
  )
}
