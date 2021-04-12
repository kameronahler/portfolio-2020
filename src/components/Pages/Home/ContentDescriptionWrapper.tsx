// packages
import styled from 'styled-components'

// theme
import { THEME } from '../../../styles/Theme'

export const ContentDescriptionWrapper = styled.section`
  @media (min-width: ${THEME.w.screenDesktop}) {
    grid-column: 6 / -1;
    order: 2;
  }
`
