// packages
import styled from 'styled-components'

export const Separator = styled.li`
  background-image: ${({ top }: { top: boolean }) =>
    top
      ? 'linear-gradient(180deg, transparent, var(--color-text-light))'
      : 'linear-gradient(0deg, transparent, var(--color-text-light))'};
  display: block;
  margin-bottom: 1rem;
  margin-left: 1.375rem;
  margin-top: 1rem;
  flex-grow: 1;
  width: 0.0625rem;
`
