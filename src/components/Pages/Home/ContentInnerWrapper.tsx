// packages
import styled from 'styled-components'

// theme
import { THEME } from '../../../styles/Theme'

// styled
export const ContentInnerWrapper = styled.div`
  @media (min-width: ${THEME.w.screenDesktop}) {
    column-gap: var(--gap-default);
    display: grid;
    grid-template-columns: var(--grid-default);
  }
`
