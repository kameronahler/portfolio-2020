// react
import React from 'react'

// packages
import styled from 'styled-components'

// styled
const StyledWrapper = styled.div`
  max-width: 60ch;
  margin-left: auto;
  margin-right: auto;
  margin-top: 2rem;
  font-size: 1.25rem;
  line-height: 1.75;

  > p,
  > ul,
  > ol,
  > blockquote,
  > hr {
  }

  h1,
  h2,
  h3 {
    line-height: 1.3;
    margin: 3rem 0 1.38rem;
  }

  h1 {
    margin-top: 0;
    font-size: 1.777rem;
  }

  h2 {
    font-size: 1.777rem;
  }

  h3 {
    font-size: 1.333rem;
  }

  a {
    text-decoration: underline;

    &:hover {
      background-image: linear-gradient(
        45deg,
        var(--color-primary),
        var(--color-primary-light)
      );
      background-clip: text;
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }
  }

  ol,
  ul {
    line-height: var(--line-height-default);
    margin-left: 1rem;
    margin-bottom: 1rem;
  }

  ul {
    li {
      column-gap: 0.75rem;
      display: grid;
      grid-template-columns: auto 1fr;

      &::before {
        border-radius: 9999px;
        border: 0.125rem solid var(--color-primary);
        content: '';
        display: inline-block;
        height: 0.625rem;
        margin-top: 0.75rem;
        width: 0.625rem;
      }

      p {
        display: inline-block;
      }
    }
  }

  ol {
    li {
      &::marker {
        color: var(--color-primary);
        font-size: 0.75em;
        font-weight: var(--font-weight-bold);
      }
    }

    p {
      display: inline-block;
    }
  }

  figure {
    margin: 0 0 1rem;
  }

  blockquote {
    border-left: 0.125rem solid var(--color-primary);
    margin: unset;
    padding: 1rem;
  }

  hr {
    border-bottom: 0.125rem solid;
    border-left: unset;
    border-right: unset;
    border-top: unset;
    color: var(--color-bg-dark);
    margin: 2rem auto;
  }
`

export const RichTextWrapper = ({
  children,
}: {
  children: React.ReactNode
}) => {
  return <StyledWrapper>{children}</StyledWrapper>
}
