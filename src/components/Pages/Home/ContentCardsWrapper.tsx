// packages
import styled from 'styled-components'

// theme
import { THEME } from '../../../styles/Theme'

export const ContentCardsWrapper = styled.section`
  @media (min-width: ${THEME.w.screenDesktop}) {
    display: grid;
    gap: var(--gap-default);
    grid-column: span 5;
    grid-template-columns: repeat(5, minmax(0, 1fr));
  }
`
