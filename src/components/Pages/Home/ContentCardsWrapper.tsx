// packages
import styled from 'styled-components'
import { THEME } from '../../../styles/Theme'

export const ContentCardsWrapper = styled.section`
  display: grid;
  grid-template-columns: var(--grid-default);
  row-gap: var(--gap-lg);

  @media (min-width: ${THEME.w.screenDesktop}) {
    gap: var(--gap-lg);
  }
`
