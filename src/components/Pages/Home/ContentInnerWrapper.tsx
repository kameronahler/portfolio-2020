// packages
import styled from 'styled-components'

// theme
import { THEME } from '../../../styles/Theme'

// styled
export const ContentInnerWrapper = styled.section`
  @media (min-width: ${THEME.w.screenDesktop}) {
    gap: var(--gap-default);
    display: grid;
    grid-template-columns: var(--grid-default);
  }
`
