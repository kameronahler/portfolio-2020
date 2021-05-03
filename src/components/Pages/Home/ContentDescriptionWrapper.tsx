// packages
import styled from 'styled-components'

// theme
import { THEME } from '../../../styles/Theme'

export const ContentDescriptionWrapper = styled.div`
  @media (min-width: ${THEME.w.screenDesktop}) {
    grid-column: 1 / 8;
    grid-row: 1 / 2;
  }
`
